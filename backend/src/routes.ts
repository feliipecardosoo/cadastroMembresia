import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'
import { CreateMembroController } from './controllers/CreateMembroController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get('/teste', async (req: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post('/membro', async(req: FastifyRequest, reply: FastifyReply) => {
        return new CreateMembroController().handle(req, reply)
    })
}