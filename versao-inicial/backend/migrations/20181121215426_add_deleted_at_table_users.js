
exports.up = function (knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.timestamp('deletedAt').nullable()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('users', table =>{
        table.dropColumn('deletedAt')
    })
};
