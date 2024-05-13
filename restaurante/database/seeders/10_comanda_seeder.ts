import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comanda from '../../app/models/comanda.js'

export default class extends BaseSeeder {
  async run() {
    return await Comanda.createMany([
     {mesa: "teste1", funcionarioId: 3, clienteId: 1, formaPagamentoId: 3, data: new Date()},
     {mesa: "teste2", funcionarioId: 2, clienteId: 2, formaPagamentoId: 2, data: new Date()},
     {mesa: "teste3", funcionarioId: 1, clienteId: 3, formaPagamentoId: 1, data: new Date()},
    ])
  }
}