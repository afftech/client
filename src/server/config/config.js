module.exports = {
  portl: 8081,
  db: {
    database: process.env.DB_NAME || 'users',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '995637',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
    }

  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}