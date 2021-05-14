const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const {sequelize} = require('./models')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.listen(process.env.PORT || 8081)

sequelize.sync(/*{force: true} для очищения БД при каждом запуске!*/)
  .then(() => {
    app.listen(config.port)
    console.log(`Server started! ${config.port}`)
  })
