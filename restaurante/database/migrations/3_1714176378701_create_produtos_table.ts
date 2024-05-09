import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable();
      table.decimal('preco',5,2).notNullable();
      
      table.string('tamanho', 45).notNullable();
      table.integer('tipo_id').unsigned().notNullable();
      
      table
      .foreign('tipo_id')
      .references('id')
      .inTable('tipos')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}