module.exports = {
    "type": process.env.DB_TYPE,
    "host": process.env.DB_HOST,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "migrations":["src/database/migrations/*ts"],
    "entities":["src/entities/*.ts"],
    "cli":{
        migrationsDir:"src/database/migrations"
    }
}