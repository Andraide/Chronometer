const { TimeMark } = require("../models/models")

async function syncModels()
{
    try 
    {
        await TimeMark.sync({ force: true })
        console.log("Models sync")
    }
    catch(err)
    {
        throw err
    }
}

module.exports = {
    syncModels
}