import type { HttpContext } from '@adonisjs/core/http'
import ProdutosComanda from '../models/produtos_comanda.js'

export default class ProdutosComandasController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/ProdutosComandas?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await ProdutosComanda.query().paginate(page, perPage)
        // return await ProdutosComanda.query()
    };


    async show({params}: HttpContext) {
        return await ProdutosComanda.findOrFail(params.id)
    };


    async store({request}: HttpContext){

        const dados = request.only(["produtoId", "comandaId"])
        return await ProdutosComanda.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const produtosComanda =  await ProdutosComanda.findOrFail(params.id)
        const dados = request.only(["produtoId", "comandaId"])
        
        produtosComanda.merge(dados)
    
        return await produtosComanda.save()
    };


    async destroy({params}: HttpContext) {

        const produtosComanda =  await ProdutosComanda.findOrFail(params.id)

        await produtosComanda.delete()

        return {msg:'registro deletado com sucesso', ProdutosComanda}
    };
}