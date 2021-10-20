const TaskModel = require('../model/TaskModel');

//A controller faz o tráfego, recebendo e enviando respostas
class TaskController{

    //método reponsável por receber a requisição de armazenamento no banco de dados e criar esse armazenamento
    async create(req, res){
        //recebe a requisição do front
        const task = new TaskModel(req.body);
        //salva no banco de dados
        await task
        .save() 
        .then(response => {return res.status(200).json(response)})
        .catch(error => {return res.status(500).json(error)});

        // save() => método utilizado para salvar os dados que vem do front no banco de dados
        //then() => resposta positiva, caso o salvamento for bem sucedido
        //catch () => tratamento de erro, caso for mal sucedido

    }
}


module.exports = new TaskController();