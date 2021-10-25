const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on localhost:${PORT}`)
    })   
})
