require('dotenv').config();
const { EntitySchema } = require('typeorm');

// Define the User entity schema
const UserEntity = new EntitySchema({
    name: 'User',
    tableName: process.env.DB_NAME,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        name: {
            type: 'varchar',
            // nullable: false
        },
        email: {
            type: 'varchar',
        },
    },
});

module.exports  = UserEntity
