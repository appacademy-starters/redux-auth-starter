'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    leadStudio: DataTypes.STRING,
    audienceScore: DataTypes.INTEGER,
    profitability: DataTypes.FLOAT,
    rottenTomatoes: DataTypes.INTEGER,
    gross: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    timestamps: false,
  });
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};
