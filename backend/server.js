const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const errorHandler = require('./helpers/error-handler');
const { syncModels } = require('./_db/sync/sync.models')
syncModels().then(() => console.log("Models sync"))

app.use(express.json());
//app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(cors())
app.use('/api', require('./_controllers/api.controller'));
app.use(errorHandler);


const port = process.env.NODE_ENV === true ? 3000 : 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
