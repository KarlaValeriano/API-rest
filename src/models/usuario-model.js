let id = 0;
 class user {
     constructor(nome,email,senha){
         this.id = id++;
         this.nome= nome;
         this.email = email;
         this.senha = this.validarsenha(senha);

     }
     validarsenha(senha){
         if(senha.length <= 8){
             return senha;
         }else{
             throw new Error('senha deve ter 8 caracteres')
         }
     }
 }
 module.exports = user;