const faker = require("faker");
const productModel = require("../dao/models/productModel.js");
const mongoose = require('mongoose');




async function main() {
  await mongoose.connect("mongodb+srv://app:5UJvYAsuYJ9v461V@cluster0.ryzcf1s.mongodb.net/ecommerce?retryWrites=true&w=majority")
  // const result = await productModel.insertMany(productsRecords)
const result = await productModel.find({stock: 13}).explain("executionStats")

  console.log(result)

  await mongoose.disconnect()
}

main()