import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class User extends Model {}

User.init({

  id: {
    type: DataTypes.INTEGER, // Choose an appropriate type
    autoIncrement: true, // Auto-incrementing
    primaryKey: true, // Primary key
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Other'),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  termsAndConditions: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  timestamps: true, // This will create createdAt and updatedAt fields
});

export default User;
