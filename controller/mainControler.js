const Clients = require("../models/Clients");
const Sales = require("../models/Sales");
const Products = require("../models/Products");

async function loadData(req, res) {
  try {
    let somaVendas = await Sales.sum('value');
    let quantidadeClientes = await Clients.count();
    let quantidadeProdutos = await Products.count();
    return { somaVendas, quantidadeClientes, quantidadeProdutos };
  } catch (error) {
    console.log(error);
  }
}

module.exports = class ClientController {

  static async mainRedirect(req, res) {
    if (req.session.userid) {
      let data = await loadData();
      res.render("dashboard", { data });
    } else {
      res.render("home");
    }
  }
}
