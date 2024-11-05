import { Color, IColor } from '../../../models/index.js'

export default async function createOne(object: IColor) {
    if (await Color.exists(object)) {
        throw new Error('Color already exists')
    }

    const color = new Color(object)

    return await color.save()
}
