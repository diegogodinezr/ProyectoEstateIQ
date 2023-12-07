const express = require('express');
const app = express();
const puerto = 80;


app.use(express.json());

const UsuariosController=require('./controllers/UsuariosControllers');
app.get('/usuarios',UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.ItemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios/:id([0-9]+)', UsuariosController.itemPut);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

const CasasController=require('./controllers/CasasControllers');
app.get('/casas',CasasController.indexGet);
app.get('/casas/:id([0-9]+)', CasasController.ItemGet);
app.post('/casas', CasasController.indexPost);
app.put('/casas/:id([0-9]+)', CasasController.itemPut);
app.patch('/casas/:id([0-9]+)', CasasController.itemPatch);

const TerrenosController=require('./controllers/TerrenosControllers');
app.get('/terrenos',TerrenosController.indexGet);
app.get('/terrenos/:id([0-9]+)', TerrenosController.ItemGet);
app.post('/terrenos', TerrenosController.indexPost);
app.put('/terrenos/:id([0-9]+)', TerrenosController.itemPut);
app.patch('/terrenos/:id([0-9]+)', TerrenosController.itemPatch);

const DepartamentosController=require('./controllers/DepartamentosController');
app.get('/departamentos',DepartamentosController.indexGet);
app.get('/departamentos/:id([0-9]+)', DepartamentosController.ItemGet);
app.post('/departamentos', DepartamentosController.indexPost);
app.put('/departamentos/:id([0-9]+)', DepartamentosController.itemPut);
app.patch('/departamentos/:id([0-9]+)', DepartamentosController.itemPatch);

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Bienvenido a EstateIQ!');
});

app.listen(puerto, function() {
    console.log("Servidor iniciado");
});

