const mssql = require('mssql');
const config = require('../config/config')


async function getAllbooks(req, res){
let sql = await mssql.connect(config);
  console.log(sql.connected);



    res.send('Here are all the books available.')

}

module.exports = { getAllbooks}
