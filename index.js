const express = require('express');
require('dotenv').config();

const todoRouters = require('./routers/todo');

const app = express();
const port = process.env.PORT || 8000;

app.use('/api', todoRouters);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});