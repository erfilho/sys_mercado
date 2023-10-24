function cards() {
  return [
    {
      title: "Nova venda",
      text: "Aqui você tem acesso ao cadastro de novas vendas!",
      link: "/vendas/cadastro",
      icon: "bi bi-cart",
    },
    {
      title: "Histórico de vendas",
      text: "Aqui você tem acesso ao histórico de todas as vendas!",
      link: "/vendas/historico",
      icon: "bi bi-receipt",
    },
    {
      title: "Cadastro de Clientes",
      text: "Aqui você tem acesso ao cadastro dos clientes!",
      link: "/clientes/cadastro",
      icon: "bi bi-file-person",
    },
    {
      title: "Cadastro de Produtos",
      text: "Aqui você tem acesso ao cadastro dos produtos!",
      link: "/produtos/cadastro",
      icon: "bi bi-file-earmark-bar-graph",
    },
    {
      title: "Cadastro de Usuários",
      text: "Aqui você tem acesso ao cadastro dos usuários!",
      link: "/usuarios/cadastro",
      icon: "bi bi-person-plus",
    },
    {
      title: "Estoque",
      text: "Aqui você tem acesso ao estoque!",
      link: "/produtos/estoque",
      icon: "bi bi-archive",
    },
  ];
}

module.exports = cards;
