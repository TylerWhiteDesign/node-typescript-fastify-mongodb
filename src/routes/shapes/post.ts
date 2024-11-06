import { FastifyInstance, RouteShorthandOptions } from 'fastify'
import authorize from '../../middleware/authorize.js'
import createOne from '../../controllers/api/shapes/createOne.js'
import { IShape } from '../../models/index.js'

const postOpts: RouteShorthandOptions = {
    schema: {
        body: { $ref: 'Shape' },
        response: {
            200: { $ref: 'Shape' },
        },
    },
    preValidation: authorize,
}

export default function post(fastify: FastifyInstance) {
    fastify.post<{
        Body: IShape
        Reply: IShape
    }>('/shapes', postOpts, async (request) => {
        const object = request.body
        const shape = await createOne(object)

        return shape
    })
}
