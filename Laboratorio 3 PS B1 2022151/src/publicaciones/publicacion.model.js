import mongoose, {Schema, model } from 'mongoose'

const publicacionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    PrincipalText: {
        type: String,
        required: true
    },
    usuario: {
        type: Schema.ObjectId,
        ref: 'usuario',
        required: true
    }
})

export default model('publicacion', publicacionSchema)