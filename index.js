const express = require("express");
const path = require('path');
const { engine } = require("express-handlebars");
//const routesAdmin = require('./routes/rotaAbout');
const app = express();

app.engine('handlebars', engine({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  }
}));

// Teste simples de rota
app.get('/', (req, res) => {
  res.send('Rota principal funcionando!');
});

//app.set('view engine', 'handlebars');
//app.use('/', routesAdmin);

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando");
});
