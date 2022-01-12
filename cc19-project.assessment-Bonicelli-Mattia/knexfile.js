module.exports = {
  client: "pg",
  connection: {
    connectionString:
    process.env.DATABASE_URL ||
      `postgres://${process.env.DB_USER}:${process.env.DB_PW}@127.0.0.1:5432/vue_notes`,
    // ssl: { rejectUnauthorized: false },
  },
  searchPath: "public",
  migrations: {
    tableName: "migrations",
  },
  seeds: {
    tableName: "seeds"
  }
};