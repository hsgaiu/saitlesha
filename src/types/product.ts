export interface Product {
  title?: string;
  images: string[];
  material?: string;
  material1?: string;
  base?: string;
  rack?: string;
  table_top?: string;
  top?: string;
  seat?: string;
  legs?: string;
  belt?: string;
  drawing?: string;
  drawing1?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  products: Product[];
}
