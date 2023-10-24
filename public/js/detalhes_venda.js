function mostrarDetalhes(id) {
  console.log("mostrarDetalhes: " + id);
  // requisição no banco
  produtos = [{
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },
  {
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },
  {
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },
  {
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },
  {
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },
  {
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },
  {
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },
  {
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },
  {
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },
  {
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },
  {
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },
  {
    id: 1,
    nome: "Produto A",
    quantidade: 10,
    valorUnitario: 25.0,
    valorTotal: 250.0,
  },
  {
    id: 2,
    nome: "Produto B",
    quantidade: 5,
    valorUnitario: 15.0,
    valorTotal: 75.0,
  },
  {
    id: 3,
    nome: "Produto C",
    quantidade: 8,
    valorUnitario: 30.0,
    valorTotal: 240.0,
  },]

  let table = document.createElement("table");
  let headerRow = document.createElement("tr");
  let headers = ["ID", "Nome", "Quantidade", "Valor Unitário", "Valor Total"];
  headers.forEach(header => {
    let th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.classList.add("table");
  table.appendChild(headerRow);

  produtos.forEach(produto => {
    let row = document.createElement("tr");
    let columns = [produto.id, produto.nome, produto.quantidade, produto.valorUnitario, produto.valorTotal];
    columns.forEach(column => {
      let td = document.createElement("td");
      td.textContent = column;
      row.appendChild(td);
    });
    table.appendChild(row);
  });

  let div = document.getElementById("detalhes");
  div.innerHTML = "";
  div.innerHTML = `<h1>Listagem de produtos da venda: ${id}</h1>`;
  // table.classList.add('table', 'table-striped', 'table-sm');
  div.appendChild(table);
  

}