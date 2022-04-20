  const bd = require('../infra/bd.js')

  module.exports = (app) => {

    app.get('/usuario',function(req,res){
        res.send(bd)
    })
    
    app.post('/usuarios',function(req,res){
       bd.usuario.push(req.body)
    })
 }
  
