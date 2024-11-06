import { FastifyInstance } from 'fastify'
import * as Colors from './colors/index.js'
import * as Shapes from './shapes/index.js'

export default function (fastify: FastifyInstance) {
    Object.values({
        Color: Colors.schema,
        Shape: Shapes.schema,
    }).forEach((schema) => {
        fastify.addSchema(schema)
    })

    Object.values({
        colors: Colors.routes,
        shapes: Shapes.routes,
    }).forEach((route) => {
        fastify.register(route)
    })
}
