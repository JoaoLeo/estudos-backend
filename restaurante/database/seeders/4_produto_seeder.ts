import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
    return await Produto.createMany([
      {nome: "teste1", preco: 40, tamanho: "teste1", tipoId: 2},
      {nome: "teste2", preco: 50, tamanho: "teste2", tipoId: 1},
      {nome: "teste3", preco: 60, tamanho: "teste2", tipoId: 5},
      {nome: "teste3", preco: 70, tamanho: "teste2", tipoId: 4},
      {nome: "teste4", preco: 80, tamanho: "teste2", tipoId: 3}
    ])
  }
}