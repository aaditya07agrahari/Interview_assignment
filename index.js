// const Product = require('./src/models/product');

// const product1 = new Product('product1', 'category 1', 11.00 , 'gaurav');
// // console.log(product1);

const Product = require('./src/models/product');
const Variant = require('./src/models/variant');
const User = require('./src/models/user');

// Create instances of modules
const product1 = new Product('Product 1', 'Category 1', 10.99, 'Seller 1');
const variant1 = new Variant('Small', 5.99);
const user1 = new User('Aditya', '1234567890', 'Aditya@BBDEC.com', 'password123');

// Use the instances as needed
console.log(product1);
console.log(variant1);
console.log(user1);