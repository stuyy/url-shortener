import mongoose, { Model, Document } from 'mongoose'

export interface URLMapType extends Document {
  code: string
  url: string
}

const URLMapSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    required: true,
  },
  url: {
    type: String,
    unique: false,
    required: true,
  },
})

const URLMap: Model<URLMapType> = mongoose.model('urls', URLMapSchema)
export default URLMap
