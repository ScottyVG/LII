// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/LII",
    migrations: { directory: "./db/migrations" },
    seeds: { directory: "./db/seeds"}
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: "./db/migrations" },
    seeds: { directory: "./db/seeds"}
  }

};
