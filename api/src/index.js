const express = require('express');

const api = express();

api.get('/health', (_, res) => res.sendStatus(200));

api.listen(3001, () => console.log('api running on port 3001'));