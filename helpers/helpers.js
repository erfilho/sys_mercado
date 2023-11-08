const Handlebars = require('handlebars');

Handlebars.registerHelper('formatDate', function (date) {
  console.log("datas ddddddddddddd",date)
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  const formattedDate = new Date(date).toLocaleString('pt-BR', options);
  return formattedDate;
});
