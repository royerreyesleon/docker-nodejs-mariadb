const express = require('express')
const app = express()
const pool = require('./database')

app.use(express.json());

app.get('/products', async (req, res) => {
    try {
        const conn = await pool.getConnection()
        const query = 'SELECT * FROM products'
        const rows = await conn.query(query)
        res.status(200).json(rows)
    } catch (error) {
        console.log(error);      
    }
})

app.post('/new-product', async (req, res) => {
    console.log(req.body);
    try {
        const conn = await pool.getConnection()
        const query = 'INSERT INTO products VALUE(?)'
        const result = await conn.query(query, [req.body.name])
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000, () => {
    console.log('Server on port 3000');
})