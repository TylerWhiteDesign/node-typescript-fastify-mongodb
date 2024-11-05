import Fastify from 'fastify'

const envToLogger = {
    development: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
            },
        },
    },
    production: true,
    test: true,
}

const fastify = Fastify({
    logger:
        envToLogger[process.env.NODE_ENV as keyof typeof envToLogger] ?? true,
})

fastify.register(import('./lib/database.js'))
fastify.register(import('./routes/index.js'))

import sendError from './middleware/sendError.js'
fastify.decorateReply('sendError', sendError)

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

await start()
