import { FastifyInstance, RouteShorthandOptions } from 'fastify'
import authorize from '../../middleware/authorize.js'
import listAll from '../../controllers/api/shapes/listAll.js'
import { IShape } from '../../models/index.js'

const opts: RouteShorthandOptions = {
    schema: {
        querystring: { $ref: 'Shape' },
        response: {
            200: {
                type: 'array',
                items: { $ref: 'Shape' },
            },
        },
    },
    preValidation: authorize,
}

export default function get(fastify: FastifyInstance) {
    fastify.get<{
        Reply: IShape[]
    }>('/shapes', opts, async () => {
        const shapes = await listAll()
        return shapes
    })
}
