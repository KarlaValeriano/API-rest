
var id = 0;

class Tarefas{

    constructor(título,descrição,status, datadecriação){
        this.id = id++;
        this.título = título;
        this.descrição = descrição;
        this.status = status;
        this.datadecriação = datadecriação;
    }
}

module.exports = Tarefas;