'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      leadStudio: {
        type: Sequelize.STRING
      },
      audienceScore: {
        type: Sequelize.INTEGER
      },
      profitability: {
        type: Sequelize.FLOAT
      },
      rottenTomatoes: {
        type: Sequelize.INTEGER
      },
      gross: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};
