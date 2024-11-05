import { Color, IColor } from '../../../models/index.js'

export default async function listMany(object: IColor) {
    return await Color.find(object)
}
