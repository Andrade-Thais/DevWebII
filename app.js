const express = require ("express")
const app = express()

const Sequelize = require ("sequelize")
const sequelize = new Sequelize("projetoweb", "root", "", {
    host: "localhost",
    dialect: "mysql"
})


sequelize.authenticate().then(function (){
    console.log ("Conexão realizada com sucesso!")
}).catch (function (erro){
    console.log("Falha ao conectar!" + erro)
})

const Agendamentos = sequelize.define("agendamentos", {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.INTEGER
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    observacao: {
        type: Sequelize.TEXT
    },
})

//Agendamentos.sync({force: true})

//Agendamentos.create({
    //nome:"Thais Andrade",
    //endereco: "Rua Jose Antonio do Prado, 955",
   // bairro: "Jardim Zelia",
   // cep: "08575-270",
    //cidade: "Itaquauqecetuba",
    //estado: "São Paulo",
    //: "Realizar serviço de manutenção automotiva na próxima sexta!"
//})

app.get ("/", function(req, res){
    res.send("Tela inicial")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cidade/:estado/:observacao", function (req, res){
    Agendamentos.create({
        nome: req.params.nome,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        cidade: req.params.cidade,
        estado: req.params.estado,
        observacao: req.params.observacao
    })
    res.redirect("/")
})

app.listen(8081, function(){
    console.log("Servidor web carregando!")
})

