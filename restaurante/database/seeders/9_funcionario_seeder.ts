import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'

export default class extends BaseSeeder {
  async run() {
      Funcionario.createMany([
        {nome: "teste1", cpf: "12345678911", endereco: "teste", sexo: "M", telefone:"123456789", cargoId: 3},
        {nome: "teste2", cpf: "12345678911", endereco: "teste", sexo: "M", telefone:"123456789", cargoId: 2},
        {nome: "teste3", cpf: "12345678911", endereco: "teste", sexo: "M", telefone:"123456789", cargoId: 1},

      ])
  }
}