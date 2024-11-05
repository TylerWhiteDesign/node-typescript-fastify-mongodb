import Fastify from 'fastify'
import routes from './routes/index.js'
import decorateReply from './middleware/decorateReply.js'

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

decorateReply(fastify)
fastify.register(routes)

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

await start()
