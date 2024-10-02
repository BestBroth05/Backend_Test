const express = require('express');
const router = express.Router();
const sql  = require('mssql');

router.post('/post', (req, res) =>
{
    let id_customer = req.body.id_customer;
    let iva = req.body.iva;
    let isr = req.body.isr;
    let dhlComponents = req.body.dhlComponents;
    let dhlPCB = req.body.dhlPCB;
    let dhlAssembly = req.body.dhlAssembly;
    let liberation = req.body.liberation;
    let ajComponents = req.body.ajComponents;
    let ajDigikey = req.body.ajDigikey;
    let ajPCB = req.body.ajPCB;
    let ajAssembly = req.body.ajAssembly;
    
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
            var dataBody = ["'"+id_customer+"'","'"+iva+"'","'"+isr+"'","'"+dhlComponents+"'","'"+dhlPCB+"'","'"+dhlAssembly+"'","'"+liberation+"'","'"+ajComponents+"'","'"+ajDigikey+"'","'"+ajPCB+"'","'"+ajAssembly+"'"];
            var QueryCmd = "INSERT INTO QuotesPorcentajes (id_customer, iva, isr, dhlComponents, dhlPCB, dhlAssembly, liberation, ajComponents, ajDigikey, ajPCB, ajAssembly) VALUES ("+dataBody+")";
                
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
                let QueryCmd = "SELECT id_porcentaje, id_customer, iva, isr, dhlComponents, dhlPCB, dhlAssembly, liberation, ajComponents, ajDigikey, ajPCB, ajAssembly FROM QuotesPorcentajes WHERE id_customer = "+id_customer;
                            
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
            let QueryCmd = "SELECT id_porcentaje, id_customer, iva, isr, dhlComponents, dhlPCB, dhlAssembly, liberation, ajComponents, ajDigikey, ajPCB, ajAssembly FROM QuotesPorcentajes";
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
            let id_porcentaje = req.body.id_porcentaje;
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
                    var QueryCmd = "DELETE FROM QuotesPorcentajes WHERE id_porcentaje = "+id_porcentaje;
                        
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

        router.post('/update', (req, res) =>
            {
                let id_porcentaje = req.body.id_porcentaje;
                let id_customer = req.body.id_customer;
                let iva = req.body.iva;
                let isr = req.body.isr;
                let dhlComponents = req.body.dhlComponents;
                let dhlPCB = req.body.dhlPCB;
                let dhlAssembly = req.body.dhlAssembly;
                let liberation = req.body.liberation;
                let ajComponents = req.body.ajComponents;
                let ajDigikey = req.body.ajDigikey;
                let ajPCB = req.body.ajPCB;
                let ajAssembly = req.body.ajAssembly;
                
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
                        var QueryCmd = "UPDATE QuotesPorcentajes SET id_customer = '"+id_customer+"', iva = '"+iva+"', isr = '"+isr+"', dhlComponents = '"+dhlComponents+"', dhlPCB = '"+dhlPCB+"', dhlAssembly = '"+dhlAssembly+"', liberation = '"+liberation+"', ajComponents = '"+ajComponents+"', ajDigikey = '"+ajDigikey+"', ajPCB = '"+ajPCB+"', ajAssembly = '"+ajAssembly+"' WHERE id_porcentaje = "+id_porcentaje;
                            
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