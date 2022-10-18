// const mysql = require('mysql')

// const conn = mysql.createConnection({
//     host:'localhost',
//     user: 'root',
//     password:'12345',
//     database: 'usuario'
// })

// conn.connect((err)=>{
//     if(err) throw err
//     console.log('conexion exitosa')
// })

// const insert = "insert into  usuario (id,admin,pass) values (NULL,'Perez',12345)"
// conn.query(insert,(err,rows)=>{
//     if(err) throw err
// })

// conn.query('select * from usuario',(err, rows) =>{
//     if(err) throw err
//     console.log('Datos en la base')
//     console.log(rows)
// })