const sequelize = require('../connection')
const { timeMark } = require('../schemes/schemes')
const options = require('./options')

const TimeMark = sequelize.define('TimeMark', timeMark, options)


module.exports = {
    TimeMark
}