// const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');
// const Sequelize = require('sequelize')

// class Post extends Model {}

// Post.init( 
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         postId: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         body: {
//             type: DataTypes.TEXT,
//             allowNull: true,
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'user'
//     }
//     );

// module.exports = Post;