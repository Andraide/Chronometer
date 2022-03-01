const { DataTypes } = require('sequelize');

const timeMark = {
    timeMarkId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    timeMark: {
        type: DataTypes.STRING
    }
}

module.exports = {
    timeMark
}