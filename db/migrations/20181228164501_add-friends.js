exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('follows', table => {
      table
        .uuid('id')
        .primary()
        .notNull()
      table.uuid('userId').references('users.id')
      table.uuid('friendId').references('users.id')
    }),
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('follows')])
}
