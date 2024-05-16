import type { HttpContext } from '@adonisjs/core/http'
import ProdutosIngrediente from '../models/produtos_ingrediente.js'

export default class ProdutosIngredientesIngredientesController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/ProdutosIngredientes?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await ProdutosIngrediente.query().paginate(page, perPage)
        // return await ProdutosIngrediente.query()
    };


    async show({params}: HttpContext) {
        return await ProdutosIngrediente.findOrFail(params.id)
    };


    async store({request}: HttpContext){

        const dados = request.only(["produtoId", "ingredienteId"])
        return await ProdutosIngrediente.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const produtosIngrediente =  await ProdutosIngrediente.findOrFail(params.id)
        const dados = request.only(["produtoId", "ingredienteId"])
        
        produtosIngrediente.merge(dados)
    
        return await produtosIngrediente.save()
    };


    async destroy({params}: HttpContext) {

        const produtosIngrediente =  await ProdutosIngrediente.findOrFail(params.id)

        await produtosIngrediente.delete()

        return {msg:'registro deletado com sucesso', produtosIngrediente}
    };
}