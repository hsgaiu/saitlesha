#cloud-config

package_update: true
package_upgrade: true

packages:
  - nginx
  - python3
  - python3-pip
  - python3-venv
  - nodejs
  - npm
  - git
  - certbot
  - python3-certbot-nginx
  - ufw

runcmd:
  # --- КЛОНИРОВАНИЕ ПРОЕКТА ---
  - mkdir -p /var/www/memorial
  - git clone https://github.com/hsgaiu/saitlesha.git /var/www/memorial

  # --- BACKEND ---
  - cd /var/www/memorial/backend
  - python3 -m venv venv
  - /var/www/memorial/backend/venv/bin/pip install --upgrade pip
  - /var/www/memorial/backend/venv/bin/pip install -r requirements.txt

  # --- SYSTEMD СЕРВИС ---
  - |
    cat > /etc/systemd/system/memorial-backend.service <<EOF
    [Unit]
    Description=Memorial Backend
    After=network.target

    [Service]
    User=www-data
    Group=www-data
    WorkingDirectory=/var/www/memorial/backend
    Environment="PATH=/var/www/memorial/backend/venv/bin"
    ExecStart=/var/www/memorial/backend/venv/bin/uvicorn main:app --host 127.0.0.1 --port 8000
    Restart=always

    [Install]
    WantedBy=multi-user.target
    EOF

  - systemctl daemon-reload
  - systemctl enable memorial-backend
  - systemctl start memorial-backend

  # --- FRONTEND ---
  - cd /var/www/memorial
  - npm install
  - npm run build

  # --- ПРАВА ---
  - chown -R www-data:www-data /var/www/memorial

  # --- NGINX ---
  - rm -f /etc/nginx/sites-enabled/default
  - |
    cat > /etc/nginx/sites-available/memorial.conf <<EOF
    server {
        listen 80;
        server_name granitmaster34.ru www.granitmaster34.ru;

        return 301 https://granitmaster34.ru\$request_uri;
    }

    server {
        listen 443 ssl;
        server_name granitmaster34.ru www.granitmaster34.ru;

        root /var/www/memorial/dist;
        index index.html;

        location / {
            try_files \$uri \$uri/ /index.html;
        }

        location /api/ {
            proxy_pass http://127.0.0.1:8000;

            proxy_http_version 1.1;
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;

            proxy_set_header Upgrade \$http_upgrade;
            proxy_set_header Connection "upgrade";
        }

        ssl_certificate /etc/letsencrypt/live/granitmaster34.ru/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/granitmaster34.ru/privkey.pem;
        include /etc/letsencrypt/options-ssl-nginx.conf;
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    }
    EOF

  - ln -s /etc/nginx/sites-available/memorial.conf /etc/nginx/sites-enabled/
  - nginx -t
  - systemctl restart nginx

  # --- FIREWALL ---
  - ufw allow 22
  - ufw allow 80
  - ufw allow 443
  - ufw --force enable

  # --- SSL (ВАЖНО: домен должен уже указывать на сервер!) ---
  - certbot --nginx -d granitmaster34.ru --non-interactive --agree-tos -m saitlesha@gmail.com

  # --- АВТОПРОДЛЕНИЕ SSL ---
  - echo "0 */12 * * * root certbot renew --quiet --deploy-hook 'systemctl reload nginx'" > /etc/cron.d/certbot