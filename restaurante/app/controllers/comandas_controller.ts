import type { HttpContext } from '@adonisjs/core/http'
import Comanda from '../models/comanda.js'

export default class ComandasController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/comandas?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Comanda.query().paginate(page, perPage)
        // return await comanda.query()
    };


    async show({params}: HttpContext) {
        return await Comanda.findOrFail(params.id)
    };


    async store({request}: HttpContext){

        const dados = request.only(["mesa"])
        return await Comanda.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const comanda =  await Comanda.findOrFail(params.id)
        const dados = request.only(["mesa"])
        
        comanda.merge(dados)
    
        return await comanda.save()
    };


    async destroy({params}: HttpContext) {

        const comanda =  await Comanda.findOrFail(params.id)

        await comanda.delete()

        return {msg:'registro deletado com sucesso', comanda}
    };
}