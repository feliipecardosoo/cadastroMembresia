import Fastify from "fastify";
import { routes } from "./routes";
import { connectDB, closeDB } from "./utils/dbConnection";
import cors from '@fastify/cors'

const app = Fastify({logger: true})

// Adiciona tratamento de erro global
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message})
})

const start = async () => {
    // Conecta ao banco de dados
    connectDB();

    // Registra o middleware de CORS
    await app.register(cors)

    // Registra as rotas
    await app.register(routes)

    try {
        // Inicia o servidor
        await app.listen({
            port: 3333
        })
    } catch (err) {
        process.exit(1)
    }
}

// Fecha a conexão com o banco de dados ao encerrar o servidor
process.on('SIGINT', async () => {
    await closeDB();
    process.exit(0);
});

start()
