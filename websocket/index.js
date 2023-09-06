const productManager = require('../managers/product.manager.js')
const chatMessageManager = require('../managers/chat.message.manager.js')
// const CartManager = require('../managers/cart.manager.js')
// const cartManager = new CartManager('carrito.json')

async function socketManager(socket) {
  console.log(`user has connected: ${socket.id}`)

  /// logica de mensajes
  // obtener todos los mensajes de la base de datos
  const messages = await chatMessageManager.getAll()
  // console.log(messages)
  socket.emit('chat-messages', messages)

  socket.on('chat-message', async (msg) => {
    // guardar el mensaje en la DB
    console.log(msg)
    await chatMessageManager.create(msg)
    socket.broadcast.emit('chat-message', msg)
  })

 
}

module.exports = socketManager