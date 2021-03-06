("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userExercise.belongsTo(models.user, { foreignKey: "userId" });
      userExercise.belongsTo(models.exercise, { foreignKey: "exerciseId" });
    }
  }
  userExercise.init(
    {
      userId: DataTypes.INTEGER,
      exerciseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userExercise",
    }
  );
  return userExercise;
};
