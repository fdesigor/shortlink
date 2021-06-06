const express = require('express')
const routes = require("./routes");

require("dotenv/config");
require("./database");

const app = express();

// Configurações do Servidor
app.use(express.json());

app.use(routes);

app.listen(process.env.APP_PORT);
