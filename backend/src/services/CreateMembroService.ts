class CreateMembroService {
    async execute() {
        console.log('Rota foi chamada')

        return {ok: true}
    }
}

export { CreateMembroService }