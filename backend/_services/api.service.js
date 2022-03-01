﻿const https = require("https");
const fetch = require("node-fetch");
const crud = require("../_db/crud/crud")
const { TimeMark } = require("../_db/models/models")

async function saveTimeMark(payload)
{
    try 
    {
        await crud.save(TimeMark, payload)
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