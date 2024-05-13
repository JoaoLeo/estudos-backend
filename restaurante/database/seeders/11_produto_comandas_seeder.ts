import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoComanda from '../../app/models/produtos_comanda.js'

export default class extends BaseSeeder {
  async run() {
    ProdutoComanda.createMany([
      {produtoId: 1, comandaId: 2, quantidade: 3},
      {produtoId: 3, comandaId: 1, quantidade: 2},
      {produtoId: 2, comandaId: 2, quantidade: 3}

    ])
  }
}