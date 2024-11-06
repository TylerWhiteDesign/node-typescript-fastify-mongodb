import { Schema, model } from 'mongoose'
import decorations from './decorations.js'
import { IColor } from '../color/schema.js'

interface IShape {
    size: string
    color: IColor
}

const schema = new Schema(
    {
        size: {
            type: String,
            required: true,
        },
        color: {
            type: Schema.Types.ObjectId,
            ref: 'Color',
        },
    },
    {
        timestamps: true,
    }
)

schema.index({ size: 1 }, { sparse: true })
decorations(schema)

const Shape = model<IShape>('Shape', schema)

export { Shape, IShape }
