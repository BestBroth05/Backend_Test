const express = require('express');
const router = express.Router();
const sql  = require('mssql');

router.post('/post', (req, res) =>
{
    let name = req.body.name;
    let email = req.body.email;
    let rfc = req.body.rfc;
    let contact = req.body.contact;
    let phone = req.body.phone;
    let lada = req.body.lada;
    let country = req.body.country;
    let state = req.body.state;
    let city = req.body.city;
    let cp = req.body.cp;
    let street = req.body.street;
    let logo = req.body.logo;
    
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
            var dataBody = ["'"+name+"'","'"+rfc+"'","'"+email+"'","'"+contact+"'","'"+phone+"'","'"+lada+"'","'"+country+"'","'"+state+"'","'"+city+"'","'"+cp+"'","'"+street+"'","'"+logo+"'"];
            var QueryCmd = "INSERT INTO Customers (name, rfc, email, contact, phone, lada, country, state, city, cp, street, logo) VALUES ("+dataBody+")";
                
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
            let QueryCmd = "SELECT id_customer, name, email, rfc, contact, phone, lada, country, state, city, cp, street, logo FROM Customers";
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
                    var QueryCmd = "DELETE FROM Customers WHERE id_customer = "+id_customer;
                        
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
                let QueryCmd = "SELECT id_customer, name, email, rfc, contact, phone, lada, country, state, city, cp, street, logo FROM Customers WHERE id_customer = "+id_customer;
                            
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
                let id_customer = req.body.id_customer;
                let name = req.body.name;
                let email = req.body.email;
                let rfc = req.body.rfc;
                let contact = req.body.contact;
                let phone = req.body.phone;
                let lada = req.body.lada;
                let country = req.body.country;
                let state = req.body.state;
                let city = req.body.city;
                let cp = req.body.cp;
                let street = req.body.street;
                let logo = req.body.logo;
                
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
                        var QueryCmd = "UPDATE Customers SET name = '"+name+"', email = '"+email+"', rfc = '"+rfc+"', contact = '"+contact+"', phone = '"+phone+"', lada = '"+lada+"', country = '"+country+"', state = '"+state+"', city = '"+city+"', cp = '"+cp+"', street = '"+street+"', logo = '"+logo+"' WHERE id_customer = "+id_customer;
                            
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