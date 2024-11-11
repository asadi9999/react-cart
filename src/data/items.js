const productList = [
  {
    id: '1',
    title: 'محصول',
    price: 250,
    image: '/images/car1.jpg',
  },
  {
    id: '2',
    title: 'محصول',
    price: 499,
    image: '/images/car1.jpg',
  },
  {
    id: '3',
    title: 'محصول',
    price: 2000,
    image: '/images/car1.jpg',
  },
  {
    id: '4',
    title: 'محصول',
    price: 650,
    image: '/images/car1.jpg',
  },
  {
    id: '5',
    title: 'محصول',
    price: 840,
    image: '/images/car1.jpg',
  },
  {
    id: '6',
    title: 'محصول',
    price: 120,
    image: '/images/car1.jpg',
  },
  {
    id: '7',
    title: 'محصول',
    price: 750,
    image: '/images/car1.jpg',
  },
  {
    id: '8',
    title: 'محصول',
    price: 950,
    image: '/images/car1.jpg',
  },
]

function getProductData(id) {
  let productData = productList.find((product) => product.id === id)

  return productData
}

export { productList, getProductData }
