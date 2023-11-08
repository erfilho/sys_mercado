// calcular valor total do carrinho
function calculaValor() {
  let total = 0;
  $("#carrinho tr:gt(0)").each(function () {
    const quantidade = parseInt($(this).find("td:eq(1)").text());
    const valor = parseFloat($(this).find("td:eq(2)").text());
    const subtotal = parseFloat(quantidade * valor);
    total = (total + subtotal);
  });
  if ((isNaN(total) || total <= 0)) {
    $("#btnFinalizar").addClass("disabled");
    $("#subtotalValue").text("0.00");
  } else {
    $("#btnFinalizar").removeClass("disabled");
    $("#subtotalValue").text(total.toFixed(2));
  }
}

// remover produto do carrinho
function removerProduto(id) {
  $("#carrinho").DataTable().row(`#produto${id}`).remove().draw(false);
  calculaValor();
}
$(document).ready(function () {
  $("#cliente").on("change", function () {
    var valorSelecionado = $(this).val();
    if (valorSelecionado != "") {
      calculaValor();
    } else {
      $("#btnFinalizar").addClass("disabled");
    }
  });
});
// atualizar input produtos
function atualizarInput() {
  $(".quantidadeInput input").each(function () {
    $(this).val(1);
  });
}

// add produto no carrinho
function addProduto(id) {
  const quantidade = parseInt($(`#input${id}`).val());
  const max = parseInt($(`#input${id}`).attr("max"));
  if (quantidade > max) {
    $('#estoqueInsuficiente').modal('show');
    return;
  } else {
    let existe = false;
    $("#carrinho tr:gt(0)").each(function () {
      if ($(this).data('id') == id) {
        existe = true;
        let quantidadeAtual = parseInt($(this).find("td:eq(1)").text());
        let quantidadeNova = quantidadeAtual + quantidade;
        $(this).find("td:eq(1)").text(quantidadeNova);
        calculaValor();
        atualizarInput();
      }
    });
    if (!existe) {
      const nome = $(`#name${id}`).text();
      const valor = parseFloat($(`#valor${id}`).text());
      const subtotal = quantidade * valor;
      const template = `
        <tr id="produto${id}" data-id="${id}">
          <td>${nome}</td>
          <td>${quantidade}</td>
          <td>${valor}</td>
          <td>${subtotal.toFixed(2)}</td>
          <td><button class="btn btn-danger" onclick="removerProduto(${id})">Remover</button></td>
        </tr>
        `;
      $("#carrinho").DataTable().row.add($(template)).draw(false);
      calculaValor();
      atualizarInput();
    }
  };
}

// finaliza venda
function finalizarVenda() {
  let produtos = [];
  let total = 0;
  $("#carrinho tr:gt(0)").each(function () {
    const quantidade = parseInt($(this).find("td:eq(1)").text());
    const valor = parseFloat($(this).find("td:eq(2)").text());
    const subtotal = parseFloat(quantidade * valor);
    let id = $(this).data('id')
    total = (total + subtotal);
    produtos.push({
      id: id,
      quantidade: quantidade,
      valor: valor,
      subtotal: subtotal,
    });
  });
  produtos.push(total.toFixed(2))
  produtos.push($("#cliente").val())
  postvenda(produtos);
}

function postvenda(produtos) {
  fetch("/vendas/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produtos),
  })
    .then((response) => {
      console.log("Success:", response.url);
      window.location.href = response.url;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
