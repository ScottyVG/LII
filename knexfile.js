module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/LII",
    migrations: { directory: "./DB/migrations", },
    seeds: { directory: "./DB/seeds", }
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: { directory: "./DB/migrations", },
    seeds: { directory: "./DB/seeds", }
  }

};
