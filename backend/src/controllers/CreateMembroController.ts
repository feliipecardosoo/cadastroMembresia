import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateMembroService } from '../services/CreateMembroService'

class CreateMembroController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const membroService = new CreateMembroService()

        const membro = await membroService.execute()

        reply.send(membro)
    }
}

export { CreateMembroController }