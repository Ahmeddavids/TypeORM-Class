const { EntitySchema } = require('typeorm');

// Define the User entity schema
module.exports = new EntitySchema({
    name: 'User',
    tableName: 'c4festac',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        name: {
            type: 'varchar',
        },
        email: {
            type: 'varchar',
        },
    },
});
