import { Schema, model, Document } from 'mongoose'
import decorate from './decorations.js'

interface IColor extends Document {
    value: string
}

const schema = new Schema(
    {
        value: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

schema.index({ value: 1 }, { sparse: true })
decorate(schema)

const Color = model<IColor>('Color', schema)

export { Color, IColor }
