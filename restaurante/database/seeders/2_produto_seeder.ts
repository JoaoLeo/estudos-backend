import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
    await Produto.createMany([
      {nome: 'Coca lata', preco: 6.5, tamanho: "330ml",tipoId: 1},
      {nome: 'Coca 2L', preco: 10, tamanho: "2L",tipoId: 1},
      {nome: 'Coca 600', preco: 8, tamanho: "600ml",tipoId: 1},
      {nome: 'Coca ks', preco: 6.5, tamanho: "290 ml",tipoId: 1}
    ])
  }
}


