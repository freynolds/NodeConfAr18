'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.User = Comment.belongsTo(models.User, { foreignKey: "user_id" });
    Comment.Post = Comment.belongsTo(models.Post, { foreignKey: "post_id" });
  }
  return Comment;
};