import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'

export default class extends BaseSeeder {
  async run() {
    return await Cliente.createMany([
      {nome: "teste1", cpf: "12345678999", telefone: "123456789", email: "teste@gmail.com"},
      {nome: "teste2", cpf: "12345678999", telefone: "123456789", email: "teste@gmail.com"},
      {nome: "teste3", cpf: "12345678999", telefone: "123456789", email: "teste@gmail.com"},
      {nome: "teste4", cpf: "12345678999", telefone: "123456789", email: "teste@gmail.com"},
    ])
  }
}