import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '../../app/models/ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    await Ingrediente.createMany([
      {nome: "teste1", descricao: "teste1"},
      {nome: "teste2", descricao: "teste2"},
      {nome: "teste3", descricao: "teste3"},
      {nome: "teste4", descricao: "teste4"},
    ]
  )
  }
}