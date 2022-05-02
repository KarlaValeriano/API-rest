  
const bd = require('../infra/sqlite-bd')



  const usuario = (app) => {



    app.get('/usuario',function(req,res){
      bd.all (`select * from usuarios`, function(error,rows){
        if (error){
          res.send(error)}
          else{
            res.send(rows)
          }
      })
        
    })



    // deletar registro
    app.delete('usuario/nome', function(req, res){
      const nome = req.params.nome;
      const usuarioindex = bd.usuario.findIndex(aluno.nome == nome)

      if (indexusuario > -1){
        const usuariodeletado = bd.usuario.splice(indexusuario,1)
        res.json({"usuario":usuariodeletado})
      } else{
        res.json("usuario não encontrado")
      }
    })

    //atualizar usuario pelo nome 
    app.put ('/usuarios/:nome',(req,res) =>{
      const nome = req.params.nome;
      const body =req.body;
      const usuarioIndex = bd.usuario.findIndex((usuario => usuario.nome == nome))
   
 
       if (usuarioIndex > -1){
          const antigousuario = bd.usuario[indexusuario];
          const novousuario = new usuario(
            
             body.name || antigousuario.nome,
             body.email || antigousuario.email,
             body.senha|| antigousuario.senha,
             antigousuario.id
          );
                
 
            res.json({'atualizado':usuarioatualizado});
         
       } else { 
           res.json({mensagem: `usuario com ${nome} não existe`});
 
       }
 
    });
       
     
//atualizar usuario por email
    app.put ('/usuarios/:email',(req,res) =>{
     const email = req.params.email;
     const body =req.body;
     const usuarioIndex = bd.usuario.findIndex((usuario => usuario.email == email))
  

      if (usuarioIndex > -1){
         const antigousuario = bd.usuario[indexusuario];
         const novousuario = new usuario(
           
            body.name || antigousuario.nome,
            body.email || antigousuario.email,
            body.senha|| antigousuario.senha,
            antigousuario.id
         );
               

           res.json({'atualizado':usuarioatualizado});
        
      } else { 
          res.json({mensagem: `usuario com ${email} não existe`});

      }

   });    
 }

 module.exports = usuario;
  
