const express = require("express");
require("dotenv").config();


const loansrouter = require('./routes/loansRoute');
const router = require("./routes/loansRoute");

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("OK")
})


app.use(router);

const port = process.env.port || 4000;

app.listen(port, ()=>console.log(`Server on port: ${port}`));