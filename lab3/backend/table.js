const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "items",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tel: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      place: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
