import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Tipo from '../../app/models/tipo.js'

export default class extends BaseSeeder {
  async run() {
    return await Tipo.createMany([{nome: "Bebidas"}, {nome: "Burguers"}]);
  }
}