import { Shape } from '../../../models/index.js'

export default async function listAll() {
    return await Shape.find({})
}
