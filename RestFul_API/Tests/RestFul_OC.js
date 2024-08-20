const express = require('express');
const router = express.Router();
const sql  = require('mssql');

router.post('/post', (req, res) =>
{
    let id_OC = req.body.id_OC;
    let id_customer = req.body.id_customer;
    let fecha_inicio = req.body.fecha_inicio;
    let fecha_fin = req.body.fecha_fin;
    let solicitante = req.body.solicitante;
    let country = req.body.country;
    let state = req.body.state;
    let city = req.body.city;
    let cp = req.body.cp;
    let street = req.body.street;
    let prioridad = req.body.prioridad;
    let moneda = req.body.moneda;
    
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
            var dataBody = ["'"+id_OC+"'","'"+id_customer+"'","'"+fecha_inicio+"'","'"+fecha_fin+"'","'"+solicitante+"'","'"+country+"'","'"+state+"'","'"+city+"'","'"+cp+"'","'"+street+"'","'"+prioridad+"'","'"+moneda+"'"];
            var QueryCmd = "INSERT INTO OrdenCompra (id_OC, id_customer, fecha_inicio, fecha_fin, solicitante, pais, estado, ciudad, cp, street, prioridad, moneda) VALUES ("+dataBody+")";
                
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
            let QueryCmd = "SELECT id_OC, id_customer, fecha_inicio, fecha_fin, solicitante, pais, estado, ciudad, cp, street, prioridad, moneda FROM OrdenCompra";
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
            let id_OC = req.body.id_OC;
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
                    var QueryCmd = "DELETE FROM OrdenCompra WHERE id_OC = "+id_OC;
                        
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

router.post('/select/orden', (req, res) =>
    {
        let id_OC = req.body.id_OC;
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
                let QueryCmd = "SELECT id_OC, id_customer, fecha_inicio, fecha_fin, solicitante, pais, estado, ciudad, cp, street, prioridad, moneda FROM OrdenCompra WHERE id_OC = "+id_OC;
                            
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
                    let QueryCmd = "SELECT id_OC, id_customer, fecha_inicio, fecha_fin, solicitante, pais, estado, ciudad, cp, street, prioridad, moneda FROM OrdenCompra WHERE id_customer = "+id_customer;
                                
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
                let id_OC = req.body.id_OC;
                let id_customer = req.body.id_customer;
                let fecha_inicio = req.body.fecha_inicio;
                let fecha_fin = req.body.fecha_fin;
                let solicitante = req.body.solicitante;
                let country = req.body.country;
                let state = req.body.state;
                let city = req.body.city;
                let cp = req.body.cp;
                let street = req.body.street;
                let prioridad = req.body.prioridad;
                let moneda = req.body.moneda;
                
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
                        var QueryCmd = "UPDATE OrdenCompra SET id_customer = '"+id_customer+"', fecha_inicio = '"+fecha_inicio+"', fecha_fin = '"+fecha_fin+"', solicitante = '"+solicitante+"', pais = '"+country+"', estado = '"+state+"', ciudad = '"+city+"', cp = '"+cp+"', street = '"+street+"', prioridad = '"+prioridad+"', moneda = '"+moneda+"' WHERE id_OC = "+id_OC;
                            
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