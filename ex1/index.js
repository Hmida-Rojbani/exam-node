require('./db/connect')
const express = require('express');
const contact_router = require('./routers/contacts');

let app = express();

app.use(express.json());

app.use('/api/contacts',contact_router);

app.listen(3000);