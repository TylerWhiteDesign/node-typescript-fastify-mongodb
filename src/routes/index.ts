import { FastifyInstance } from 'fastify'
import * as Colors from './colors/index.js'
import * as Shapes from './shapes/index.js'

export default function (fastify: FastifyInstance) {
    Object.values({
        Colors: Colors.schema,
        Shapes: Shapes.schema,
    }).forEach((schema) => {
        fastify.addSchema(schema)
    })

    Object.values({
        Colors: Colors.routes,
        Shapes: Shapes.routes,
    }).forEach((route) => {
        fastify.register(route)
    })
}
