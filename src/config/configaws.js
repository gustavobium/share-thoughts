module.exports = {
    development: {
      database: {
        host: "database-1.cb3eec5pcbe6.us-east-2.rds.amazonaws.com",
        port: 3306,
        name: "share-thoughts",
        dialect: "mysql",
        user: "admin",
        password: "KBelnjqvEa9EkcZZ6B4Y"
      }
    },
    production: {
      database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
      }
    }
};