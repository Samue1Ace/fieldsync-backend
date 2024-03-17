const { Pool, Client } = require('pg');
const express = require('express')
const app = express();
const port = 8080;


//allows express to read json
app.use(express.json())

//allows cors
const cors = require('cors')
app.use(cors())

//logs that the server started 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });

//First endpoint fetches data from POSTGRES
app.get('/fetch', async (req,res) => {
    try{  
        let data = await pool.query("SELECT * FROM users")
        res.status(200).send({entity:data.rows})
    }catch (err){
        console.log(err)
        res.status(500).send({entity:"Internal Server Error"})
    }
})

//Second endpoint to put the data into our POSTGRES db
app.post('/save', async (req,res) => {
    let queryBuilder = "INSERT INTO users VALUES "
    //below builds the query
    await req.body.forEach((item,index) => {
        index != 0 ? queryBuilder+=', ': queryBuilder+="" // add comma except for last
        const {id,name,company,email,phone} = item 
        queryBuilder+= `(${id},'${name}','${company.name}','${email}','${phone}')`
    })
    try{  
        let data = await pool.query(queryBuilder)
        res.status(200).send({entity:data.rows})
    }catch (err){
        console.log(err)
        res.status(500).send({entity:"Internal Server Error"})
    }

})

//postgres db info
const pool = new Pool({
    user: 'sammy',
    host: 'postgres',
    database: 'db',
    password: '123',
    port: 5432,
  });

