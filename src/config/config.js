module.exports = {
    development: {
      database: {
        host: "localhost",
        port: 3306,
        name: "share-thoughts",
        dialect: "mysql",
        user: "root",
        password: "gu@1993"
      }
    },
    production: {
      database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
      }
    }
};