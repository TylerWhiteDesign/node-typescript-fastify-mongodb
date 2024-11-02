import Fastify from 'fastify'
import firstRoute from './routes/ourFirstRoute.js'

const fastify = Fastify({
    logger: true,
})

fastify.register(firstRoute)

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

await start()
