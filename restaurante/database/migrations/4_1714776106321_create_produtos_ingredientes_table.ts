import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produtos_ingredientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('produto_id').unsigned().notNullable();
      table.integer('ingrediente_id').unsigned().notNullable();
      table
      .foreign('produto_id')
      .references('id')
      .inTable('produtos')

      table
      .foreign('ingrediente_id')
      .references('id')
      .inTable('ingredientes')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}