import mongoose, { Schema, model } from 'mongoose'

const comentarioSchema = mongoose.Schema({
    comentary: {
        type: String,
        required: true
    },
    publicacion: {
        type: Schema.ObjectId,
        ref:'publicacion',
        required: true
    }
})

export default model('comentario', comentarioSchema)