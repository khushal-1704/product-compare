export const PRODUCT_DETAILS = [{
  name: 'Category',
  key: 'category',
}, {
  name: 'Price',
  key: 'price',
}, {
  name: 'Discount',
  key: 'discountPercentage',
}, {
  name: 'Brand',
  key: 'brand'
}, {
  name: 'Weight',
  key: 'weight'
}, {
  name: 'Dimensions',
  key: 'dimensions'
}, {
  name: 'Warranty',
  key: 'warrantyInformation'
}, {
  name: 'Shipping',
  key: 'shippingInformation'
}, {
  name: 'Availability',
  key: 'availabilityStatus'
}, {
  name: 'Rating',
  key: 'rating'
}, {
  name: 'Stock',
  key: 'stock'
}, {
  name: "Tag",
  key: 'tags'
}, {
  name: 'Return',
  key: 'returnPolicy'
}, {
  name: 'Minimum Order',
  key: 'minimumOrderQuantity'
}]

export const columns = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    width: "25%",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => {
      return a.price - b.price
    },
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: "Band",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Discount",
    dataIndex: "discountPercentage",
    key: "discountPercentage",
    sorter: (a, b) => {
      return a.discountPercentage - b.discountPercentage
    },
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: "",
    dataIndex: "compare",
    key: "compare",
  },
];