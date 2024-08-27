const { DataTypes } = require("sequelize");
const { Sequelize } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    DeviceCode:{ type: DataTypes.STRING(30), allowNull: false },
    CO: { type: DataTypes.STRING(30), allowNull: false },
    DUST: { type: DataTypes.STRING(30), allowNull: false },
    ETHYL: { type: DataTypes.STRING(30), allowNull: false },
    NO2: { type: DataTypes.STRING(30), allowNull: false },
    VOC: { type: DataTypes.STRING(30), allowNull: false },
    createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: new Sequelize.NOW(),
			comment: '',
			field: 'created_at'
		}
  };


  const options = {
    freezeTableName: true,
    timestamps: false,
  };
  return sequelize.define("HewaTell", attributes, options);
}
