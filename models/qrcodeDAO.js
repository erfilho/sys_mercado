function qrcodeDAO(connection){
    this._connection = connection
}
qrcodeDAO.prototype.getQrcode = function(callback){
    this._connection.query('SELECT * FROM qrcode', callback);
}
qrcodeDAO.prototype.salvarQrcode = function(qrcode, callback){
    this._connection.query('INSERT INTO qrcode SET ?', qrcode, callback)
}
qrcodeDAO.prototype.getLastqrcode = function(callback){
    this._connection.query('SELECT TOP 1 qrcode.dataehora FROM qrcode WHERE dataehora ORDER BY dataehora DESC', callback)
}

module.exports = () => {
    return qrcodeDAO
}