import type { HttpContext } from '@adonisjs/core/http'
import Cargo from '../models/cargo.js'

export default class CargosController {
    
    async index({request}: HttpContext){
        
        // http://localhost:3333/Cargos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Cargo.query().paginate(page, perPage)
        // return await Cargo.query()
    };


    async show({params}: HttpContext) {
        return await Cargo.findOrFail(params.id)
    };


    async store({request}: HttpContext){

        const dados = request.only(["nome", "preco", "tamanho","tipoId" ])
        return await Cargo.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const cargo =  await Cargo.findOrFail(params.id)
        const dados = request.only(["nome", "preco", "tamanho","tipoId" ])
        
        cargo.merge(dados)
    
        return await cargo.save()
    };


    async destroy({params}: HttpContext) {

        const cargo =  await Cargo.findOrFail(params.id)

        await cargo.delete()

        return {msg:'registro deletado com sucesso', cargo}
    };
}