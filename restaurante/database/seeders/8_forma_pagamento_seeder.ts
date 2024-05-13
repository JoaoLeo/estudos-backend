import { BaseSeeder } from '@adonisjs/lucid/seeders'
import FormaPagamento from '../../app/models/forma_pagamento.js'

export default class extends BaseSeeder {
  async run() {
    return await FormaPagamento.createMany([
      {nome: "teste1"},
      {nome: "teste2"},
      {nome: "teste3"}
    ])
  }
}