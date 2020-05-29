import { Model, DataTypes } from 'sequelize'
import { database } from '../config/database'

export class Users extends Model {
  public id!: number
  public username!: string
  public email!: string
  public name!: string
  public surname!: string
  public passwordHash!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    surname: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    passwordHash: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize: database,
  },
)

Users.sync({ alter: true }).then(() => console.log('Users table synchronized'))
