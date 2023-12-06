const express = require('express');
const app = express();
const puerto = 80;


app.use(express.json());

const UsuariosController=require('./controllers/UsuariosControllers');
app.get('/usuarios',UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.ItemGet);

const CasasController=require('./controllers/CasasControllers');
app.get('/casas',CasasController.indexGet);
app.get('/casas/:id([0-9]+)', CasasController.ItemGet);

const TerrenosController=require('./controllers/TerrenosControllers');
app.get('/terrenos',TerrenosController.indexGet);
app.get('/terrenos/:id([0-9]+)', TerrenosController.ItemGet);

const DepartamentosController=require('./controllers/DepartamentosController');
app.get('/departamentos',DepartamentosController.indexGet);
app.get('/departamentos/:id([0-9]+)', DepartamentosController.ItemGet);

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Bienvenido a EstateIQ!');
});

app.listen(puerto, function() {
    console.log("Servidor iniciado");
});

