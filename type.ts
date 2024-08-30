export interface productType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: object[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
  quantity?:number
}

export interface StateType {
  user?: { user: object|null,}
  cart?:{ cart: productType[]}
}

// id: 28,
// title: 'Ice Cream',
// description: 'Creamy and delicious ice cream, available in various flavors for a delightful treat.',
// category: 'groceries',
// price: 5.49,
// discountPercentage: 7.58,
// rating: 3.77,
// stock: 76,
// tags: [ 'desserts' ],
// sku: 'VEZMU1EQ',
// weight: 5,
// dimensions: { width: 17.66, height: 24.49, depth: 25.98 },
// warrantyInformation: '2 year warranty',
// shippingInformation: 'Ships in 2 weeks',
// availabilityStatus: 'In Stock',
// reviews: [ [Object], [Object], [Object] ],
// returnPolicy: 'No return policy',
// minimumOrderQuantity: 19,
// meta: {
//   createdAt: '2024-05-23T08:56:21.620Z',
//   updatedAt: '2024-05-23T08:56:21.620Z',
//   barcode: '9603960319256',
//   qrCode: 'https://assets.dummyjson.com/public/qr-code.png'
// },
// images: [
//   'https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png',
//   'https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png',
//   'https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png',
//   'https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png'
// ],
// thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png'
// },
