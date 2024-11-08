import { Shape, IShape, Color } from '../../../models/index.js'

export default async function createOne(object: IShape) {
    const shape = new Shape(object)
    const color = new Color(object.color)
    await color.save()
    shape.color = color

    return await shape.save()
}
