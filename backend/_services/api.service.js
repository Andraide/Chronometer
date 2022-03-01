const https = require("https");
const fetch = require("node-fetch");
const crud = require("../_db/crud/crud")
const sync = require("../_db/sync/sync.models")
const { TimeMark } = require("../_db/models/models")

async function saveTimeMark(payload)
{
    try 
    {
        const { time } = payload
        await crud.save(TimeMark, time)
        await sync

    }
    catch(err)
    {
        throw err
    }
}

async function removeAll()
{
    crud.removeAll(Movie)
}

module.exports = {
    removeAll,
    saveTimeMark
};
