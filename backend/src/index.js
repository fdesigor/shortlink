const express = require('express')
const routes = require("./routes");

require("dotenv/config");
require("./database");

const app = express()
const port = 3000

// Configurações do Servidor
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
