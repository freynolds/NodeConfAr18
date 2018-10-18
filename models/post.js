'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    text: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    
  };
  return Post;
};