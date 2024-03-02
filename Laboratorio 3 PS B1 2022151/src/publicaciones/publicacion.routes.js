'use strict'


import { Router } from 'express'
import { deletePublic, save, test, updatePublic } from './publicacion.controller.js'

const api = Router()

api.post('/save',  save)
api.put('/update/:id', updatePublic)
api.delete('/delete/:id', deletePublic)
api.get('/test', test)

export default api
