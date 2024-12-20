const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '1000mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '1000mb' }));
// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));

/* import Router - RestFul API */
//GET
const RestFul_Cortes_GET = require('./RestFul_API/GET/RestFul_Cortes_GET');
const RestFul_Empleados_GET = require('./RestFul_API/GET/RestFul_Empleados_GET');
const RestFul_Pagos_GET = require('./RestFul_API/GET/RestFul_Pagos_GET');

//POST\
const test = require('./RestFul_API/Tests/Test_aj');
const RestFul_OC = require('./RestFul_API/Tests/RestFul_OC');
const RestFul_Entrega = require('./RestFul_API/Tests/RestFul_Entrega');
const RestFul_Productos_OC = require('./RestFul_API/Tests/RestFul_Productos_OC');
const vidios = require('./RestFul_API/Tests/UploadVideos');
const RestFul_Quotes = require('./RestFul_API/Tests/RestFul_Quotes');
const RestFul_Digikey = require('./RestFul_API/Tests/RestFul_Digikeys');
const RestFul_Porcentajes = require('./RestFul_API/Tests/RestFul_Porcentajes');
const RestFul_Preview = require('./RestFul_API/Tests/RestFul_QuotesPreview');

const RestFul_Cortes_POST = require('./RestFul_API/POST/RestFul_Cortes_POST');
const RestFul_Empleados_POST = require('./RestFul_API/POST/RestFul_Empleados_POST');
const RestFul_Pagos_POST = require('./RestFul_API/POST/RestFul_Pagos_POST');

//DELETE
const RestFul_Cortes_DELETE = require('./RestFul_API/DELETE/RestFul_Cortes_DELETE');
const RestFul_Empleados_DELETE = require('./RestFul_API/DELETE/RestFul_Empleados_DELETE');
const RestFul_Pagos_DELETE = require('./RestFul_API/DELETE/RestFul_Pagos_DELETE');

/* Middlewares */
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type");
    res.setHeader("Access-Control-Max-Age", "86400");
    next();
  });
  
app.use('/get/cortes', RestFul_Cortes_GET);
app.use('/get/empleados', RestFul_Empleados_GET);
app.use('/get/pagos', RestFul_Pagos_GET);
app.use('/Customers', test);
app.use('/OrdenCompra', RestFul_OC);
app.use('/Entregas', RestFul_Entrega);
app.use('/ProductosOC', RestFul_Productos_OC);
app.use('/upload', vidios);
app.use('/quotes', RestFul_Quotes);
app.use('/digikeys', RestFul_Digikey);
app.use('/porcentajes', RestFul_Porcentajes);
app.use('/preview', RestFul_Preview);
app.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
});

//Password del servidor = AJsw3525

/* Running */
var server = app.listen(8080,function () {});
server.timeout = 500000;
var port = server.address().port;
var address = server.address().address;
console.log('Server is running: '+port);