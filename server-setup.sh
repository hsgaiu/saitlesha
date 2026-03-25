#!/bin/bash

# Обновление системы
apt update && apt upgrade -y

# Установка необходимых пакетов
apt install -y nginx python3 python3-pip python3-venv nodejs npm certbot python3-certbot-nginx git

# Создание директории для проекта
mkdir -p /var/www/memorial
cd /var/www/memorial

# Клонирование репозитория
git clone https://github.com/hsgaiu/WebTwo .

# Настройка backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Создание systemd сервиса для backend
cat > /etc/systemd/system/memorial-backend.service << EOL
[Unit]
Description=Memorial Backend
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/memorial/backend
Environment="PATH=/var/www/memorial/backend/venv/bin"
ExecStart=/var/www/memorial/backend/venv/bin/uvicorn main:app --host 0.0.0.0 --port 8000

[Install]
WantedBy=multi-user.target
EOL

# Настройка frontend
cd ../
npm install
npm run build

# Настройка Nginx
cat > /etc/nginx/sites-available/memorial.conf << EOL
server {
    listen 80;
    server_name granitmaster34.ru;

    # Frontend
    location / {
        root /var/www/memorial/dist;
        try_files \$uri \$uri/ /index.html;
        add_header Cache-Control "public, no-cache";
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

# Активация конфигурации Nginx
ln -s /etc/nginx/sites-available/memorial.conf /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx

# Запуск backend сервиса
systemctl enable memorial-backend
systemctl start memorial-backend

# Настройка SSL с помощью Certbot
certbot --nginx -d granitmaster34.ru --non-interactive --agree-tos --email saitlesha@gmail.com

# Настройка автоматического обновления SSL-сертификата
cat > /etc/cron.d/certbot << EOL
0 */12 * * * root certbot renew --quiet --deploy-hook "systemctl reload nginx"
EOL

# Настройка базовых правил файрвола
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable