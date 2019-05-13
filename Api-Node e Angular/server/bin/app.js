const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();

const gestorRouter = require('../src/routers/gestorRouter');
const loginRouter = require('../src/routers/loginRouter');
const funcionarioRouter = require('../src/routers/funcionarioRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/dashboard-gestor', gestorRouter);
app.use('/dashboard-colaborador', funcionarioRouter);
app.use('/login', loginRouter);


module.exports = app;