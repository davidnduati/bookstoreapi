const express = require ('express');
require('dotenv').config();

const app = express();
const router = require('./routes/booksrouter')


app.use(express.json());

app.get('/',(req, res)=>{
    res.send("OK")
})

app.use(router)

const port = process.env.port || 4000;

app.listen(port, ()=>console.log(`Server on port: ${port}`));



