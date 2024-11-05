declare module 'fastify' {
    interface FastifyReply {
        sendError(message: string): void
    }
}
