'use strict'

import express from 'express'
import { test, register , login , updateU } from './usuario.controller.js'

const api = express.Router()

api.get('/test', test)

api.put('/update/:id', updateU)

api.post('/register', register)
api.post('/login', login)

export default api