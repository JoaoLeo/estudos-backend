import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cargo from '../../app/models/cargo.js'

export default class extends BaseSeeder {
  async run() {
    return await Cargo.createMany([
      {nome: "teste1"},
      {nome: "teste2"},
      {nome: "teste3"},
      {nome: "teste4"},
    ])
  }
}