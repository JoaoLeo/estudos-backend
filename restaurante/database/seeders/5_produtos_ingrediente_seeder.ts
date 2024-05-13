import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutosIngrediente from '../../app/models/produtos_ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    return await ProdutosIngrediente.createMany([
      {produtoId: 2, ingredienteId: 1},
      {produtoId: 3, ingredienteId: 2}
    ])
  }
}