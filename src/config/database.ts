import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  database: 'myappback',
  username: 'root',
  password: 'Root*pass1234',
  dialect: 'mysql',
  storage: ':memory:',
})

database
  .authenticate()
  .then(() => {
    console.log('Connection established successfully.')
  })
  .catch((err: string) => {
    console.error('Unable to connect to the database:', err)
  })
