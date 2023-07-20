const { Router } = require('express')
const path = require('path')
const ProductManager = require('../models/productManager')
const productManager = new ProductManager('products.json')

const router = Router()

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

router.get('/', async (req, res) => {
  
  const products = await productManager.getAll()


  res.render('home', {
    title: 'Home',
    products,
    user: {
      ...req.user,
      isAdmin: req.user.role == 'admin',
    },
    style: 'home'
  })
})

router.get('/carrito', (req, res) => {
  
  res.render('carrito', {
    numItems: 2,
    title: 'Carrito'
  })
})

module.exports = router