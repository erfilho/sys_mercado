// calcular valor total do carrinho
function calculaValor() {
  let total = null;
  $("#carrinho tr:gt(0)").each(function () {
    const quantidade = parseInt($(this).find("td:eq(1)").text());
    const valor = parseFloat($(this).find("td:eq(2)").text());
    const subtotal = parseFloat(quantidade * valor);
    total = (total + subtotal);
    console.log(`quantidade ${quantidade} valor ${valor} subtotal ${subtotal}`);
  });
  if (isNaN(total) || total <= 0) {
    $("#btnFinalizar").addClass("disabled");
    $("#subtotalValue").text("0.00");
  } else {
    $("#btnFinalizar").removeClass("disabled");
    $("#subtotalValue").text(total.toFixed(2));
  }
}

// remover produto do carrinho
function removerProduto(id) {
  console.log("Id produto", id);
  $("#carrinho").DataTable().row(`#produto${id}`).remove().draw(false);
  calculaValor();
}

// atualizar input produtos
// function atualizarInput() {
//   $("#quantidade").each(function () {
//     $("input").val(1);
//   });
// }

// add produto no carrinho
function addProduto(id) {
  const quantidade = parseInt($(`#input${id}`).val());
  const max = parseInt($(`#input${id}`).attr("max"));
  console.log("teste");
  if (quantidade > max) {
    alert(`Quantidade ${quantidade} maior que o estoque ${max}`);
    return;
  } else {
    const nome = $(`#name${id}`).text();
    const valor = parseFloat($(`#valor${id}`).text());
    const subtotal = quantidade * valor;
    const template = `
    <tr id="produto${id}">
      <td>${nome}</td>
      <td>${quantidade}</td>
      <td>${valor}</td>
      <td>${subtotal.toFixed(2)}</td>
      <td><button class="btn btn-danger" onclick="removerProduto(${id})">Remover</button></td>
    </tr>
    `
    $("#carrinho").DataTable().row.add($(template)).draw(false);
    calculaValor();
    // atualizarInput();
  }
}

