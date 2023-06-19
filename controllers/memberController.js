const e = require('express');
const mssql = require('mssql');
const config = require('./config')

module.exports = {

  home: (req, res) => {

    res.send('Welcome to my api')
  },


  getAllMembers: async (req, res) => {
    const sql = await mssql.connect(config);
    if (sql.connected) {
      const members = sql.query('SELECT * FROM dbo.Members')
      const data = (await members).recordset
      res.json({
        results: data
      })

    } else {
      res.send('failed to connect to database')
    }
  },

  get1member: async (req, res) => {
    try {
      const membernum = req.params.id;

      const sql = await mssql.connect(config);
      if (sql.connected) {
        const member = sql.request()
          .input("memberid", membernum)
          .execute("dbo.get1member")
        const member1 = (await member).recordset
        res.status(200).json({
          success: true,
          results: member1
        })

      }
    } catch (error) {

      res.send("internal server error")
      console.log(error)

    }

  },
  membersborredbook: async (req, res) => {
    const sql = await mssql.connect(config);
    try {
      if (sql.connected) {
        const member = sql.query('select * from memberswithborrowedbooks')
        const member1 = (await member).recordset
        res.status(200).json({
          success: true,
          results: member1
        })

      }
    } catch (error) {

      res.send("internal server error")
      console.log(error)

    }
  },
  createnewmember: async (req, res) => {

    try {
      const { MemberID, Name, Address, contactNumber } = req.body;
      console.log(req.body);

      const sql = await mssql.connect(config)

      if (sql.connected) {
        let results =  await sql.request()
         .input("MemberID", MemberID)
          .input("Name", Name)
          .input("Address",Address)
         .input("contactNumber",contactNumber)
         .execute('dbo.createnewmember' )

         //let result= await results.execute('dbo.createnewmember' )
         console.log(results)

      }
    } catch (error) {

      res.send("internal server error")
      console.log(error)

    }

  }

}

