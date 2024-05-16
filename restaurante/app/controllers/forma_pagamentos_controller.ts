import type { HttpContext } from '@adonisjs/core/http'
import FormaPagamento from '../models/forma_pagamento.js'


export default class FormaPagamentosController {

    async index({request}: HttpContext){
        
        // http://localhost:3333/FormaPagamentos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await FormaPagamento.query().paginate(page, perPage)
        // return await FormaPagamento.query()
    };


    async show({params}: HttpContext) {
        return await FormaPagamento.findOrFail(params.id)
    };


    async store({request}: HttpContext){

        const dados = request.only(["nome" ])
        return await FormaPagamento.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const formaPagamento =  await FormaPagamento.findOrFail(params.id)
        const dados = request.only(["nome"])
        
        formaPagamento.merge(dados)
    
        return await formaPagamento.save()
    };


    async destroy({params}: HttpContext) {

        const formaPagamento =  await FormaPagamento.findOrFail(params.id)

        await formaPagamento.delete()

        return {msg:'registro deletado com sucesso', formaPagamento}
    };
}