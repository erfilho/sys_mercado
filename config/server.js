let express = require('express')
let app = express()
let consign = require('consign')
let bodyParser = require('body-parser')
let jsonParser = bodyParser.json()
const { isReadable } = require('stream')

// CONFIGURANDO O ENGINE DO EJS
app.set('view engine', 'ejs')
// CONFIGURANDO A PASTA DAS VIEWS
app.set('views', './views')

app.use(bodyParser.urlencoded({extended: true}))

app.use(jsonParser)

// CONFIGURANDO A ROTA DE LER QRCODE
app.get('/read', (req, res) => {
    let connection = app.config.dbConnection()
    //aula 42
    let qrCode = new app.models.qrcodeDAO(connection)
    //aula 42
    qrCode.getQrcode((err, rest) => {
        res.render("qrcode/ler", {qrcode: rest})
    })
})

app.get('/qrcode/save', (req, res) => {
    res.render("qrcode/ler");
})

app.post('/qrcode/save', jsonParser,(req, res) => {
    // Lendo a requisição
    let qrcode = req.body;
    // Abrindo a conexão
    let connection = app.config.dbConnection()
    // Criando o model do qrCode
    let qrCode = new app.models.qrcodeDAO(connection)
    // Salvando no banco de dados
    qrCode.salvarQrcode(qrcode, (err, result) => {
        console.log(err)
    })
})

app.post('/qrcode/check', jsonParser, (req, res) => {
    // Lendo a requisição
    let valor = req.body;
    // Abrindo a conexão
    let connection = app.config.dbConnection()
    // Criando o model do qrcode
    let qrCode = new app.models.qrcodeDAO(connection)
    // Verificando no banco de dados
    qrCode.getQrcode((err, result) => {
        // Caso ocorra algum erro
        if(err){ 
            res.render('qrcode/erro', {err: erro})
        }
        // Lendo o valor do último qrcode que foi gravado
        ultimo_val = result[result.length-1].valor
        // Se o valor lido for igual ao último valor do qr code irá ser marcada a sua presença
        if(valor.valor == ultimo_val) {
            res.render('qrcode/presencamarcada')
        } else {
            // Caso não seja a página vai ser recarregada
            res.redirect('/read')
        }
    })
})

// CONFIGURANDO A ROTA DO INDEX
app.get('/', (req, res) => {
    res.render('home/index')
})


// CONFIGURANDO A PASTA DOS ARQUIVOS ESTÁTICOS
app.use(express.static('public'))

consign().then('/config/dbConnection.js')
         .then('/models')
        .into(app)

module.exports = app