export default () => ({
  connection: {
    client: 'postgres',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      database: 'accounting-db',
      user: 'postgres',
      password: 'docker',
      ssl: false,
    },
  },
});
