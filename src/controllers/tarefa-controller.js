module.exports = (app) => {
    app.get('/tarefas',function(req,res){
        res.send('Rota ativada com GET e recurso tarefas: valores de tarefas devem ser retornados')
    })
    app.post('/tarefa',function(req,res){
      console.log(Object.keys(req.body))

        res.send('Rota POST de tarefas ativada:tarefas adicionado ao banco de dados')
    })

}


