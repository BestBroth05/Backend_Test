const express = require('express');
const router = express.Router();
const sql  = require('mssql');

router.post('/post', (req, res) =>
{
    let id_entrega = req.body.id_entrega;
    let id_OC = req.body.id_OC;
    let id_quote = req.body.id_quote;
    let image = req.body.image;
    let cantidad = req.body.cantidad;
    let descripcion = req.body.descripcion;
    let precio_unitario = req.body.precio_unitario;
    let importe = req.body.importe;
    
    const ServerConfig = require('../server/config');
    var sql = require("mssql");

    sql.connect(ServerConfig, function (err) {
        if (err) {
            console.log(err);
            res.sendStatus(401); //HTTP 401 = Unauthorized
        }
        else {
            let request = new sql.Request();
            //Ad new Exceptions here
            var dataBody = ["'"+id_entrega+"'","'"+id_OC+"'","'"+id_quote+"'","'"+image+"'","'"+cantidad+"'","'"+descripcion+"'","'"+precio_unitario+"'","'"+importe+"'"];
            var QueryCmd = "INSERT INTO ProductosOC (id_entrega, id_OC, id_quote, image, cantidad, descripcion, precio_unitario, importe) VALUES ("+dataBody+")";
                
            request.query(QueryCmd, function (err, data) {
                if (err) {
                    console.log(err);
                    res.sendStatus(400); //HTTP 400 = Bad Request
                    sql.close();
                }
                else {
                    let info = data.rowsAffected;
                    if (info > 0) {
                        let result = data.recordsets;
                            res.json({"message": "good"});
                    }
                    else {
                        res.sendStatus(404); //HTTP 404 = Not Found
                        sql.close();
                    }
                }
            });
        }
    });
});

router.get('/get', (req, res) =>
    {
        const ServerConfig = require('../server/config');
        var sql = require("mssql");
    
        sql.connect(ServerConfig, function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(401); //HTTP 401 = Unauthorized
            }
            else {
                // create Request objCountryect
            let request = new sql.Request();
            let QueryCmd = "SELECT id_producto, id_entrega, id_OC, id_quote, image, cantidad, descripcion, precio_unitario, importe FROM ProductosOC";
            request.query(QueryCmd, function (err, data) {
                if (err) {
                    console.log(err);
                    res.sendStatus(400); //HTTP 400 = Bad Request
                    sql.close();
                }
                else {
                    let info = data.rowsAffected;
                    if (info > 0) {
                        let result = data.recordsets;
                        
                            res.json(
                                result [0]
                            );  

                    }
                    else {
                        res.sendStatus(404); //HTTP 404 = Not Found
                        sql.close();
                    }
                }
            });
            }
        });
    });

    router.post('/delete', (req, res) =>
        {
            let id_producto = req.body.id_producto;
            const ServerConfig = require('../server/config');
            var sql = require("mssql");
        
            sql.connect(ServerConfig, function (err) {
                if (err) {
                    console.log(err);
                    res.sendStatus(401); //HTTP 401 = Unauthorized
                }
                else {
                    let request = new sql.Request();
                    //Ad new Exceptions here
                    var QueryCmd = "DELETE FROM ProductosOC WHERE id_producto = "+id_producto;
                        
                    request.query(QueryCmd, function (err, data) {
                        if (err) {
                            console.log(err);
                            res.sendStatus(400); //HTTP 400 = Bad Request
                            sql.close();
                        }
                        else {
                            let info = data.rowsAffected;
                            if (info > 0) {
                                let result = data.recordsets;
                                    res.json({"message": "good"});
                            }
                            else {
                                res.sendStatus(404); //HTTP 404 = Not Found
                                sql.close();
                            }
                        }
                    });
                }
            });
        });

router.post('/select', (req, res) =>
    {
        let id_entrega = req.body.id_entrega;
        const ServerConfig = require('../server/config');
        var sql = require("mssql");
            
        sql.connect(ServerConfig, function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(401); //HTTP 401 = Unauthorized
            }
            else {
                let request = new sql.Request();
                //Ad new Exceptions here
                var dataBody = "'"+id_entrega+"'";
                let QueryCmd = "SELECT id_producto, id_entrega, id_OC, id_quote, image, cantidad, descripcion, precio_unitario, importe FROM ProductosOC WHERE id_entrega = "+dataBody+"";
                            
                request.query(QueryCmd, function (err, data) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(400); //HTTP 400 = Bad Request
                        sql.close();
                    }
                    else {
                        let info = data.rowsAffected;
                        if (info > 0) {
                            let result = data.recordsets;
                                res.json(
                                    result [0]
                                );  
                        }
                        else {
                            res.sendStatus(404); //HTTP 404 = Not Found
                            sql.close();
                        }
                    }
                });
            }
        });
    });

    router.post('/select/customer', (req, res) =>
        {
            let id_customer = req.body.id_customer;
            const ServerConfig = require('../server/config');
            var sql = require("mssql");
                
            sql.connect(ServerConfig, function (err) {
                if (err) {
                    console.log(err);
                    res.sendStatus(401); //HTTP 401 = Unauthorized
                }
                else {
                    let request = new sql.Request();
                    //Ad new Exceptions here
                    let QueryCmd = "SELECT id_OC, id_customer, id_OC, fecha_inicio, fecha_fin, solicitante, pais, estado, ciudad, cp, street, prioridad, moneda FROM OrdenCompra WHERE id_customer = "+id_customer;
                                
                    request.query(QueryCmd, function (err, data) {
                        if (err) {
                            console.log(err);
                            res.sendStatus(400); //HTTP 400 = Bad Request
                            sql.close();
                        }
                        else {
                            let info = data.rowsAffected;
                            if (info > 0) {
                                let result = data.recordsets;
                                    res.json(
                                        result [0]
                                    );  
                            }
                            else {
                                res.sendStatus(404); //HTTP 404 = Not Found
                                sql.close();
                            }
                        }
                    });
                }
            });
        });

        router.post('/update', (req, res) =>
            {
                let id_producto = req.body.id_producto;
                let id_entrega = req.body.id_entrega;
                let id_OC = req.body.id_OC;
                let id_quote = req.body.id_quote;
                let image = req.body.image;
                let precioUnitario = req.body.precioUnitario;
                let cantidad = req.body.cantidad;
                let descripcion = req.body.descripcion;
                let importe = req.body.importe;
                
                const ServerConfig = require('../server/config');
                var sql = require("mssql");
            
                sql.connect(ServerConfig, function (err) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(401); //HTTP 401 = Unauthorized
                    }
                    else {
                        let request = new sql.Request();
                        //Ad new Exceptions here
                        var QueryCmd = "UPDATE ProductosOC SET id_entrega = '"+id_entrega+"', id_OC = '"+id_OC+"', id_quote = '"+id_quote+"', image = '"+image+"', precio_unitario = '"+precioUnitario+"', cantidad = '"+cantidad+"', descripcion = '"+descripcion+"', importe = '"+importe+"' WHERE id_producto = "+id_producto;
                            
                        request.query(QueryCmd, function (err, data) {
                            if (err) {
                                console.log(err);
                                res.sendStatus(400); //HTTP 400 = Bad Request
                                sql.close();
                            }
                            else {
                                let info = data.rowsAffected;
                                if (info > 0) { 
                                    let result = data.recordsets;
                                        res.json({"message": "good"});
                                }
                                else {
                                    res.sendStatus(404); //HTTP 404 = Not Found
                                    sql.close();
                                }
                            }
                        });
                    }
                });
            });

module.exports = router;