import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import usuariosRoutes from '../src/usuario/usuario.routes.js'
import publicacionesRoutes from '../src/publicaciones/publicacion.routes.js'
import comentariosRoutes from '../src/comentarios/comentario.routes.js'

const app = express()
config()
const port = process.env.PORT || 3200


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors()) 
app.use(helmet())
app.use(morgan('dev')) 


app.use('/usuario',usuariosRoutes)
app.use('/publicacion',publicacionesRoutes)
app.use('/comentario', comentariosRoutes)


export const initServer  = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}