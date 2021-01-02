const app = require("express")()
const consign = require("consign")
const bodyParser = require('body-parser')
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())

consign()
    .include("./api")
    .then("./routes.js")
    .into(app)

app.listen(3000, () => { console.log("Servidor rodando!")})