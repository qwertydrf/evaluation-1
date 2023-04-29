type ProductT = {
  name: string;
  price: number;
  stock: number;
};

const products: ProductT[] = [
  {
    name: 'Pasta dental',
    price: 3000,
    stock: 2,
  },
  {
    name: 'Jabon',
    price: 4000,
    stock: 0,
  },
  {
    name: 'Galletas',
    price: 800,
    stock: 1,
  },
  {
    name: 'Bebida',
    price: 1500,
    stock: 4,
  },
  {
    name: 'Jugo en polvo',
    price: 500,
    stock: 0,
  },
  {
    name: 'Azucar',
    price: 1250,
    stock: 3,
  },
];

const getProductsByStock = (products: ProductT[]): ProductT[] => {
  return [];
};

const productsHasStock: ProductT[] = getProductsByStock(products);

export { productsHasStock };
