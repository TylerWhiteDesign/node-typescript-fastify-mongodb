import { FastifyInstance } from 'fastify'
import mongoose from 'mongoose'
import { Env } from './constants.js'

export default async function (fastify: FastifyInstance) {
    try {
        mongoose.connection.on('connecting', function () {
            fastify.log.info('MongoDB connecting')
        })

        mongoose.connection.on('connected', function () {
            fastify.log.info('MongoDB connected')
        })

        mongoose.connection.on('disconnecting', function () {
            fastify.log.warn('MongoDB disconnecting')
        })

        mongoose.connection.on('disconnected', function () {
            fastify.log.error('MongoDB disconnected')
        })

        const uri = Env.mongoDBUri
        if (!uri) {
            throw new Error('MongoDB URI not found')
        }
        mongoose.set('autoIndex', false)
        await mongoose.connect(uri)
    } catch (error) {
        fastify.log.error(
            `MongoDB Connection Error: ${(error as Error).message}`
        )
    }
}
