'use strict'

import { Router } from 'express'
import { test, updateComent, deleteComent, saveComment } from './comentario.controller.js'

const api = Router()

api.post('/save', saveComment)
api.put('/update/:id', updateComent)
api.delete('/delete/:id', deleteComent)

api.get('/test', test)

export default api