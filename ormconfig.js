module.exports = {
    "type": process.env.TYPE,
    "host": process.env.HOST,
    "port": process.env.DB_PORT,
    "username": process.env.USER_NAME,
    "database": process.env.DATABASE,
    "password": process.env.PASSWORD,
    "migrations": [
        "src/database/migrations/*.ts"
    ],
    "entities": [
        "src/entities/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/entities"
    }
}