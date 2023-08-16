const app = require("./config/express");
const connection = require("./config/mongodb");
const router = require("./api/routes/index");
const cors = require("cors");
const { initializePassport } = require("./config/passport");
const passport = require("passport");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

initializePassport(passport);

app.use(cors());

app.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use("/api/v1", router);

console.log("working...");



