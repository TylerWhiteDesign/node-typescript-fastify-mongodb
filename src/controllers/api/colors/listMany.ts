import { Color, IColor } from '../../../models/index.js'

export default async function (object: IColor) {
    return await Color.find(object)
}
