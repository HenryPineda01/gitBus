const route = require('express').Router();
const bcryptjs = require('bcryptjs');
// import {conn} from "../mysql";
const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'12345',
    database: 'usuario'
})

conn.connect((err)=>{
    if(err) throw err
    console.log('conexion exitosa')
})


// route.get('/',(req, res)=>{
//     res.render('home');
//     setTimeout(function(){
//     },1000);
    
// });
route.get('/',(req, res)=>{
    res.render("home",{var1:'hola'});
});
route.get('/login',(req, res)=>{
    res.render("login");
});
route.get('/register',(req, res)=>{
    res.render('register');
});
route.get('/Admin',(req, res)=>{
    res.render('Admin');
});
route.get('/mapa',(req, res)=>{
    res.render('index');
});
route.get('/menu',(req, res)=>{
    res.render('Menuadmin');
});

// Presentar datos de la Tabla 
route.get('/Admin',(req, res)=>{
conn.query('select * from usuario',(error,results)=>{
    if (error){
        throw error;
    }else{
        res.render('admin_coor',{resultado:results})
    }
})
  });
  // route.post('/login',(req, res)=>{
//     res.render('index');
// });
   
//   ingresa los datos del nuevo usuario valida si ya existe
route.post('/register',(req, res)=>{
    const user = req.body.user;
    const pass = req.body.txtpassword;
    if(user && pass){
        conn.query('select * from usuario where admin = ?', [user],(error,results)=>{
            //  console.log(results[0].pass)
            if (results.length == 1 && pass === results[0].pass){
                //console.log('datos duplicados')
                res.render('login');
                
            }else{
                conn.query('insert into usuario set ?', {admin:user,pass:pass},(error,results)=>{
                    if (error){
                        console.log(error)
                    }else{
                        res.render('index')
                    }
                })
            }
        
        })
            }

});
// route.post('/login',(req, res)=>{
//     const user = req.body.user;
//     const pass = req.body.txtpassword;
// conn.query('insert into usuario set ?', {admin:user,pass:pass},(error,results)=>{
//     if (error){
//         console.log(error)
//     }else{
//         res.send('Alta Exitos')
//     }
// })
// });

route.post('/auth', async (req, res)=>{
    const user = req.body.user;
    const pass = req.body.txtpassword;
    if(user && pass){
conn.query('select * from usuario where admin = ?', [user],(error,results)=>{
      //console.log(results[0].pass,+ pass)
      
    if (results.length == 1 && pass === results[0].pass){
        res.render('index');
    
    }else{
        // alert('Contraseña y Usuario Incorrecto');
        res.render('login');
        
        // console.log('datos no estan en la base')
        // no funciona alert('Datos Validados')
    }

})
    }
    });
    ////////////////////////////////////////////////
    
    // Realiza la entrada Del Admisntrador
    route.post('/Admin',(req, res)=>{
        const user = req.body.user;
        const pass = req.body.txtpassword;
        if(user && pass){
            conn.query('select * from admin where admin = ?', [user],(error,results)=>{
                //  console.log(results[0].pass)
                if (results.length == 1 && pass === results[0].pass){
                    conn.query('select * from usuario',(error,results)=>{
                        if (error){
                            throw error;
                        }else{
                            res.render('admin_coor',{resultado:results})
                        }
                    })
                }else{
                   console.log('datos duplicados')
                    res.render('Admin');
                    
                }
            
            })
                }
    
    });
    ////////////////////////////////////////////////////////////////
  
    //////////////////////////////////////////////////

// route.post('/auth', async (req, res)=>{
//     const user = req.body.user;
//     const pass = req.body.txtpassword;
//     if(user && pass){
// conn.query('select * from admin where admin = ?', [user],(error,results)=>{
//       //console.log(results[0].pass,+ pass)
//     if (results.length == 1 && pass === results[0].pass){
//         conn.query('select * from usuario',(error,results)=>{
//             if (error){
//                 throw error;
//             }else{
//                 res.render('admin_coor',{resultado:results})
//             }
//         })
//     }else{
//         res.render('admin');
//         console.log('datos no estan en la base')
//     }
//   })
//  }
//  });

////////////////////////////////////////////////
  

// Insertar Datos a la Tabla
// const insert = "insert into  usuario (id,admin,pass) values (NULL,'Daniesdala',13333)"
// conn.query(insert,(err,rows)=>{
//     if(err) throw err
// })

// route.post('/register',(req, res)=>{
//     const user = req.body.user;
//     const pass = req.body.pass;
// conn.query('insert into registro set ?', {user:user,pass:pass},(error,results)=>{
//     if (error){
//         console.log(error)
//     }else{
//         res.send('Alta Exitosa')
//     }
// })
// });

module.exports= route;