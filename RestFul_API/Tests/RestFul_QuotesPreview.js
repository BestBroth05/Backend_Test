const express = require('express');
const router = express.Router();
const sql  = require('mssql');

router.post('/post', (req, res) =>
{
    let id_quote = req.body.id_quote;
    let description = req.body.description;
    let unitario = req.body.unitario;
    let cantidad = req.body.cantidad;
    let total = req.body.total;
    let notas = req.body.notas;
    let image = req.body.image;
    
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
            var dataBody = ["'"+id_quote+"'","'"+description+"'","'"+unitario+"'","'"+cantidad+"'","'"+total+"'","'"+notas+"'","'"+image+"'"];
            var QueryCmd = "INSERT INTO QuotesPreview (id_quote, description, unitario, cantidad, total, notas, image) VALUES ("+dataBody+")";
                
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
            let QueryCmd = "SELECT id_quotePreview, id_quote, description, unitario, cantidad, total, notas, image FROM QuotesPreview";
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

    router.post('/select/quote', (req, res) =>
        {
            let id_quote = req.body.id_quote;
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
                    let QueryCmd = "SELECT id_quotePreview, id_quote, description, unitario, cantidad, total, notas, image FROM QuotesPreview WHERE id_quote = "+id_quote;
                                
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
            let id_quotePreview = req.body.id_quotePreview;
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
                    var QueryCmd = "DELETE FROM QuotesPreview WHERE id_quotePreview = "+id_quotePreview;
                        
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
                let id_quotePreview = req.body.id_quotePreview;
                let id_quote = req.body.id_quote;
                let description = req.body.description;
                let unitario = req.body.unitario;
                let cantidad = req.body.cantidad;
                let total = req.body.total;
                let notas = req.body.notas;
                let image = req.body.image;
                
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
                        var QueryCmd = "UPDATE QuotesPreview SET id_quote = '"+id_quote+"', description = '"+description+"', unitario = '"+unitario+"', cantidad = '"+cantidad+"', total = '"+total+"', notas = '"+notas+"', image = '"+image+"' WHERE id_quotePreview = "+id_quotePreview;
                            
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