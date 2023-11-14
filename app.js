const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const pathPublic = path.join(__dirname, './public');



app.listen(port, ()=> console.log(`Servidor funcionando en el puerto ${port}. http://localhost:${port}/`));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, './views/register.html'))
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './views/login.html'))
});

app.use(express.static(pathPublic))
