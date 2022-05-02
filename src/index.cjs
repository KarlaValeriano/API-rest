 const express = require("express") ;
 const bd = require('./infra/sqlite-bd')
 const app = express()
 const bodyParser = require("body-parser")


app.use(bodyParser.json())


 const tarefa = require('./controllers/tarefa-controller.js')
 tarefa(app)

 
 const a = require('./controllers/usuario-controller.js')
 a(app)


 

 const user = require('./models/usuario-model')
 const novouser = new user("Karla","karla@gmail.com","12345678")
 
 
 const Tarefas  = require('./models/tarefa-model')
 const novatarefa = new Tarefas("1" ,"2","disponivel","13/10/2020")

 



 app.listen(8000,() =>
 console.log('rodando servidor na porta 8000')
 );
 