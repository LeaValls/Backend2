const faker = require('faker');
const userModel = require('../dao/models/userModel.js')
const mongoose = require('mongoose')


async function main() {
    await mongoose.connect("mongodb+srv://app:5UJvYAsuYJ9v461V@cluster0.ryzcf1s.mongodb.net/ecommerce?retryWrites=true&w=majority")
  

  const result = await userModel.find({ email: "adminCoder@coder.com" }).explain("executionStats")

  console.log(result)

  await mongoose.disconnect()
}

main()