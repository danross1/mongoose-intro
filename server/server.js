const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
app.listen(PORT, () => console.log('Server listening on', PORT));
app.use(bodyParser.urlencoded({extended: true}));