import type { HttpContext } from '@adonisjs/core/http'
import Tipo from '../models/tipo'

export default class TiposController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Tipos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Tipo.query().paginate(page, perPage)
        // return await Tipo.query()
    };


    async show({params}: HttpContext) {
        return await Tipo.findOrFail(params.id)
    };


    async store({request}: HttpContext){

        const dados = request.only(["nome", "preco", "tamanho","tipoId" ])
        return await Tipo.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const tipo =  await Tipo.findOrFail(params.id)
        const dados = request.only(["nome", "preco", "tamanho","tipoId" ])
        
        tipo.merge(dados)
    
        return await tipo.save()
    };


    async destroy({params}: HttpContext) {

        const tipo =  await Tipo.findOrFail(params.id)

        await tipo.delete()

        return {msg:'registro deletado com sucesso', Tipo}
    };
}