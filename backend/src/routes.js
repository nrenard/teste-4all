const routes = require('express').Router()

const {
  UserController,
  SessionController,
  CardController,
  TransactionsController,
  ContactsController
} = require('./app/controllers')

const { auth } = require('./app/middlewares')

routes.post('/register', UserController.store)
routes.post('/login', SessionController.store)

routes.use(auth)

// User
routes.get('/account', UserController.show)
routes.get('/users', UserController.index)

// Contacts
routes.get('/contacts', ContactsController.index)
routes.post('/contacts', ContactsController.store)
routes.delete('/contacts/:id', ContactsController.destroy)

// Card
routes.post('/cards', CardController.store)
routes.get('/cards', CardController.index)
routes.get('/cards/:id', CardController.show)
routes.delete('/cards/:id', CardController.destroy)
routes.put('/cards/:id', CardController.update)

// Transactions
routes.get('/transactions', TransactionsController.index)
routes.post('/transactions', TransactionsController.store)

module.exports = routes
