import { FastifyInstance, RouteShorthandOptions } from 'fastify'
import authorize from '../../middleware/authorize.js'
import createOne from '../../controllers/api/colors/createOne.js'
import { IColor } from '../../models/index.js'

const postOpts: RouteShorthandOptions = {
    schema: {
        body: { $ref: 'Color' },
        response: {
            200: { $ref: 'Color' },
        },
    },
    preValidation: authorize,
}

export default function post(fastify: FastifyInstance) {
    fastify.post<{
        Body: IColor
        Reply: IColor
    }>('/colors', postOpts, async (request) => {
        const object = request.body
        const color = await createOne(object)

        return color
    })
}
