let mysql = require('mysql')

let connMySQL = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sisac_teste'
    })
}
//aula 32
module.exports = () => {
    return connMySQL
}