exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table
        .uuid('id')
        .notNull()
        .primary()
      table.text('name').notNull()
      table
        .text('email')
        .unique()
        .notNull()
      table.text('password').notNull()
      table.date('birthday').nullable()
      table
        .enu('concentration', ['CS', 'CLASSICS', 'ANTHRO', 'EC', 'APPLIEDMATH'])
        .nullable()
      table.text('hometown').nullable()
      table
        .enu('house', [
          'FRESHMAN HOUSING',
          'ADAMS',
          'ELIOT',
          'MATHER',
          'CABOT',
          'KIRKLAND',
          'PFOHO',
          'CURRIER',
          'LEVERETT',
          'QUINCY',
          'DUDLEY',
          'LOWELL',
          'WINTHROP',
          'DUNSTER',
        ])
        .nullable()
      table.enu('gender', ['FEMALE', 'MALE', 'OTHER']).nullable()
      table.text('bio').nullable()
      table.text('picture').nullable()
      table
        .timestamp('createdAt')
        .defaultTo(knex.fn.now())
        .notNull()
      table
        .timestamp('updatedAt')
        .defaultTo(knex.fn.now())
        .notNull()
    }),
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('users')])
}
