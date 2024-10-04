const express = require('express');
const router = express.Router();
const sql  = require('mssql');

router.post('/post', (req, res) =>
{
//ID's
    let id_customer = req.body.id_customer;
    let id_percentages = req.body.id_percentages;
//General percentages
    let iva = req.body.iva;
    let isr = req.body.isr;
//General Data
    let date = req.body.date;
    let customerName = req.body.customerName;
    let quoteNumber = req.body.quoteNumber;
    let proyectName = req.body.proyectName;
    let requestedByName = req.body.requestedByName;
    let requestedByEmail = req.body.requestedByEmail;
    let attentionTo = req.body.attentionTo;
//Information
    let quantity = req.body.quantity;
    let dollarSell = req.body.dollarSell;
    let dollarBuy = req.body.dollarBuy;
    let deliverTimeInfo = req.body.deliverTimeInfo;
    let currency = req.body.currency;
    let conIva = req.body.conIva;
//Components
    let excelName = req.body.excelName;
    let componentsMPN = req.body.componentsMPN;
    let componentsAvailables = req.body.componentsAvailables;
    let componentsDeliverTime = req.body.componentsDeliverTime;
    let componentsAJPercentage = req.body.componentsAJPercentage;
    let digikeyAJPercentage = req.body.digikeyAJPercentage;
    let dhlCostComponents = req.body.dhlCostComponents;
    let componentsMauserCost = req.body.componentsMauserCost;
    let componentsIva = req.body.componentsIva;
    let componentsAJ = req.body.componentsAJ;
    let totalComponentsUSD = req.body.totalComponentsUSD;
    let totalComponentsMXN = req.body.totalComponentsMXN;
    let perComponentMXN = req.body.perComponentMXN;
//PCB's
    let PCBName = req.body.PCBName;
    let PCBLayers = req.body.PCBLayers;
    let PCBSize = req.body.PCBSize;
    let PCBImage = req.body.PCBImage;
    let PCBColor = req.body.PCBColor;
    let PCBDeliveryTime = req.body.PCBDeliveryTime;
    let PCBdhlCost = req.body.PCBdhlCost;
    let PCBAJPercentage = req.body.PCBAJPercentage;
    let PCBReleasePercentage = req.body.PCBReleasePercentage;
    let PCBPurchase = req.body.PCBPurchase;
    let PCBShipment = req.body.PCBShipment;
    let PCBTax = req.body.PCBTax;
    let PCBRelease = req.body.PCBRelease;
    let PCBAJ = req.body.PCBAJ;
    let PCBTotalUSD = req.body.PCBTotalUSD;
    let PCBTotalMXN = req.body.PCBTotalMXN;
    let PCBPerMXN = req.body.PCBPerMXN;
//Assemblies
    let assemblyLayers = req.body.assemblyLayers;
    let assemblyMPN = req.body.assemblyMPN;
    let assemblySMT = req.body.assemblySMT;
    let assemblyTH = req.body.assemblyTH;
    let assemblyDeliverTime = req.body.assemblyDeliverTime;
    let assemblyAJPercentage = req.body.assemblyAJPercentage;
    let assemblyCost = req.body.assemblyCost;
    let assemblyTax = req.body.assemblyTax;
    let assemblyAJ = req.body.assemblyAJ;
    let assemblyDhlCost = req.body.assemblyDhlCost;
    let assemblyTotalMXN = req.body.assemblyTotalMXN;
    let assemblyPerMXN = req.body.assemblyPerMXN;
    
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
            var dataBody = ["'"+id_customer+"'","'"+id_percentages+"'","'"+iva+"'","'"+isr+"'","'"+date+"'","'"+customerName+"'","'"+quoteNumber+"'","'"+proyectName+"'","'"+requestedByName+"'","'"+requestedByEmail+"'","'"+attentionTo+"'","'"+quantity+"'","'"+dollarSell+"'","'"+dollarBuy+"'","'"+deliverTimeInfo+"'","'"+currency+"'","'"+conIva+"'","'"+excelName+"'","'"+componentsMPN+"'","'"+componentsAvailables+"'","'"+componentsDeliverTime+"'","'"+componentsAJPercentage+"'","'"+digikeyAJPercentage+"'","'"+dhlCostComponents+"'","'"+componentsMauserCost+"'","'"+componentsIva+"'","'"+componentsAJ+"'","'"+totalComponentsUSD+"'","'"+totalComponentsMXN+"'","'"+perComponentMXN+"'","'"+PCBName+"'","'"+PCBLayers+"'","'"+PCBSize+"'","'"+PCBImage+"'","'"+PCBColor+"'","'"+PCBDeliveryTime+"'","'"+PCBdhlCost+"'","'"+PCBAJPercentage+"'","'"+PCBReleasePercentage+"'","'"+PCBPurchase+"'","'"+PCBShipment+"'","'"+PCBTax+"'","'"+PCBRelease+"'","'"+PCBAJ+"'","'"+PCBTotalUSD+"'","'"+PCBTotalMXN+"'","'"+PCBPerMXN+"'","'"+assemblyLayers+"'","'"+assemblyMPN+"'","'"+assemblySMT+"'","'"+assemblyTH+"'","'"+assemblyDeliverTime+"'","'"+assemblyAJPercentage+"'","'"+assemblyCost+"'","'"+assemblyTax+"'","'"+assemblyAJ+"'","'"+assemblyDhlCost+"'","'"+assemblyTotalMXN+"'","'"+assemblyPerMXN+"'"];
            var QueryCmd = "INSERT INTO Quotes (id_customer, id_percentages, iva, isr, date, customerName, quoteNumber, proyectName, requestedByName, requestedByEmail, attentionTo, quantity, dollarSell, dollarBuy, deliverTimeInfo, currency, conIva, excelName, componentsMPN, componentsAvailables, componentsDeliverTime, componentsAJPercentage, digikeyAJPercentage, dhlCostComponents, componentsMauserCost, componentsIva, componentsAJ, totalComponentsUSD, totalComponentsMXN, perComponentMXN, PCBName, PCBLayers, PCBSize, PCBImage, PCBColor, PCBDeliveryTime, PCBdhlCost, PCBAJPercentage, PCBReleasePercentage, PCBPurchase, PCBShipment, PCBTax, PCBRelease, PCBAJ, PCBTotalUSD, PCBTotalMXN, PCBPerMXN, assemblyLayers, assemblyMPN, assemblySMT, assemblyTH, assemblyDeliverTime, assemblyAJPercentage, assemblyCost, assemblyTax, assemblyAJ, assemblyDhlCost, assemblyTotalMXN, assemblyPerMXN) VALUES ("+dataBody+")";
                
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
            let QueryCmd = "SELECT id_quote, id_customer, id_percentages, iva, isr, date, customerName, quoteNumber, proyectName, requestedByName, requestedByEmail, attentionTo, quantity, dollarSell, dollarBuy, deliverTimeInfo, currency, conIva, excelName, componentsMPN, componentsAvailables, componentsDeliverTime, componentsAJPercentage, digikeyAJPercentage, dhlCostComponents, componentsMauserCost, componentsIva, componentsAJ, totalComponentsUSD, totalComponentsMXN, perComponentMXN, PCBName, PCBLayers, PCBSize, PCBImage, PCBColor, PCBDeliveryTime, PCBdhlCost, PCBAJPercentage, PCBReleasePercentage, PCBPurchase, PCBShipment, PCBTax, PCBRelease, PCBAJ, PCBTotalUSD, PCBTotalMXN, PCBPerMXN, assemblyLayers, assemblyMPN, assemblySMT, assemblyTH, assemblyDeliverTime, assemblyAJPercentage, assemblyCost, assemblyTax, assemblyAJ, assemblyDhlCost, assemblyTotalMXN, assemblyPerMXN FROM Quotes";
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
                    var QueryCmd = "DELETE FROM Quotes WHERE id_quote = "+id_quote;
                        
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
                var dataBody = "'"+id_quote+"'";
                let QueryCmd = "SELECT id_quote, id_customer, id_percentages, iva, isr, date, customerName, quoteNumber, proyectName, requestedByName, requestedByEmail, attentionTo, quantity, dollarSell, dollarBuy, deliverTimeInfo, currency, conIva, excelName, componentsMPN, componentsAvailables, componentsDeliverTime, componentsAJPercentage, digikeyAJPercentage, dhlCostComponents, componentsMauserCost, componentsIva, componentsAJ, totalComponentsUSD, totalComponentsMXN, perComponentMXN, PCBName, PCBLayers, PCBSize, PCBImage, PCBColor, PCBDeliveryTime, PCBAJPercentage, PCBReleasePercentage, PCBPurchase, PCBShipment, PCBTax, PCBRelease, PCBAJ, PCBTotalUSD, PCBTotalMXN, PCBPerMXN, assemblyLayers, assemblyMPN, assemblySMT, assemblyTH, assemblyDeliverTime, assemblyAJPercentage, assemblyCost, assemblyTax, assemblyAJ, assemblyDhlCost, assemblyTotalMXN, assemblyPerMXN FROM Quotes WHERE id_quote = "+dataBody+"";
                            
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
                    var dataBody = "'"+id_customer+"'";
                let QueryCmd = "SELECT id_quote, id_customer, id_percentages, iva, isr, date, customerName, quoteNumber, proyectName, requestedByName, requestedByEmail, attentionTo, quantity, dollarSell, dollarBuy, deliverTimeInfo, currency, conIva, excelName, componentsMPN, componentsAvailables, componentsDeliverTime, componentsAJPercentage, digikeyAJPercentage, dhlCostComponents, componentsMauserCost, componentsIva, componentsAJ, totalComponentsUSD, totalComponentsMXN, perComponentMXN, PCBName, PCBLayers, PCBSize, PCBImage, PCBColor, PCBDeliveryTime, PCBdhlCost, PCBAJPercentage, PCBReleasePercentage, PCBPurchase, PCBShipment, PCBTax, PCBRelease, PCBAJ, PCBTotalUSD, PCBTotalMXN, PCBPerMXN, assemblyLayers, assemblyMPN, assemblySMT, assemblyTH, assemblyDeliverTime, assemblyAJPercentage, assemblyCost, assemblyTax, assemblyAJ, assemblyDhlCost, assemblyTotalMXN, assemblyPerMXN FROM Quotes WHERE id_customer = "+dataBody+"";
                                
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
    //ID's
    let id_quote = req.body.id_quote;
    let id_customer = req.body.id_customer;
    let id_percentages = req.body.id_percentages;
//General percentages
    let iva = req.body.iva;
    let isr = req.body.isr;
//General Data
    let date = req.body.date;
    let customerName = req.body.customerName;
    let quoteNumber = req.body.quoteNumber;
    let proyectName = req.body.proyectName;
    let requestedByName = req.body.requestedByName;
    let requestedByEmail = req.body.requestedByEmail;
    let attentionTo = req.body.attentionTo;
//Information
    let quantity = req.body.quantity;
    let dollarSell = req.body.dollarSell;
    let dollarBuy = req.body.dollarBuy;
    let deliverTimeInfo = req.body.deliverTimeInfo;
    let currency = req.body.currency;
    let conIva = req.body.conIva;
//Components
    let excelName = req.body.excelName;
    let componentsMPN = req.body.componentsMPN;
    let componentsAvailables = req.body.componentsAvailables;
    let componentsDeliverTime = req.body.componentsDeliverTime;
    let componentsAJPercentage = req.body.componentsAJPercentage;
    let digikeyAJPercentage = req.body.digikeyAJPercentage;
    let dhlCostComponents = req.body.dhlCostComponents;
    let componentsMauserCost = req.body.componentsMauserCost;
    let componentsIva = req.body.componentsIva;
    let componentsAJ = req.body.componentsAJ;
    let totalComponentsUSD = req.body.totalComponentsUSD;
    let totalComponentsMXN = req.body.totalComponentsMXN;
    let perComponentMXN = req.body.perComponentMXN;
//PCB's
    let PCBName = req.body.PCBName;
    let PCBLayers = req.body.PCBLayers;
    let PCBSize = req.body.PCBSize;
    let PCBImage = req.body.PCBImage;
    let PCBColor = req.body.PCBColor;
    let PCBDeliveryTime = req.body.PCBDeliveryTime;
    let PCBdhlCost = req.body.PCBdhlCost;
    let PCBAJPercentage = req.body.PCBAJPercentage;
    let PCBReleasePercentage = req.body.PCBReleasePercentage;
    let PCBPurchase = req.body.PCBPurchase;
    let PCBShipment = req.body.PCBShipment;
    let PCBTax = req.body.PCBTax;
    let PCBRelease = req.body.PCBRelease;
    let PCBAJ = req.body.PCBAJ;
    let PCBTotalUSD = req.body.PCBTotalUSD;
    let PCBTotalMXN = req.body.PCBTotalMXN;
    let PCBPerMXN = req.body.PCBPerMXN;
//Assemblies
    let assemblyLayers = req.body.assemblyLayers;
    let assemblyMPN = req.body.assemblyMPN;
    let assemblySMT = req.body.assemblySMT;
    let assemblyTH = req.body.assemblyTH;
    let assemblyDeliverTime = req.body.assemblyDeliverTime;
    let assemblyAJPercentage = req.body.assemblyAJPercentage;
    let assemblyCost = req.body.assemblyCost;
    let assemblyTax = req.body.assemblyTax;
    let assemblyAJ = req.body.assemblyAJ;
    let assemblyDhlCost = req.body.assemblyDhlCost;
    let assemblyTotalMXN = req.body.assemblyTotalMXN;
    let assemblyPerMXN = req.body.assemblyPerMXN;
                
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
                        var QueryCmd = "UPDATE Quotes SET id_customer = '"+id_customer+"', id_percentages = '"+id_percentages+"', iva = '"+iva+"', isr = '"+isr+"', date = '"+date+"', customerName = '"+customerName+"', quoteNumber = '"+quoteNumber+"', proyectName = '"+proyectName+"', requestedByName = '"+requestedByName+"', requestedByEmail = '"+requestedByEmail+"', attentionTo = '"+attentionTo+"', quantity = '"+quantity+"', dollarSell = '"+dollarSell+"', dollarBuy = '"+dollarBuy+"', deliverTimeInfo = '"+deliverTimeInfo+"', currency = '"+currency+"', conIva = '"+conIva+"', excelName = '"+excelName+"', componentsMPN = '"+componentsMPN+"', componentsAvailables = '"+componentsAvailables+"', componentsDeliverTime = '"+componentsDeliverTime+"', componentsAJPercentage = '"+componentsAJPercentage+"', digikeyAJPercentage = '"+digikeyAJPercentage+"', dhlCostComponents = '"+dhlCostComponents+"', componentsMauserCost = '"+componentsMauserCost+"', componentsIva = '"+componentsIva+"', componentsAJ = '"+componentsAJ+"', totalComponentsUSD = '"+totalComponentsUSD+"', totalComponentsMXN = '"+totalComponentsMXN+"', perComponentMXN = '"+perComponentMXN+"', PCBName = '"+PCBName+"', PCBLayers = '"+PCBLayers+"', PCBSize = '"+PCBSize+"', PCBImage = '"+PCBImage+"', PCBColor = '"+PCBColor+"', PCBDeliveryTime = '"+PCBDeliveryTime+"', PCBdhlCost = '"+PCBdhlCost+"', PCBAJPercentage = '"+PCBAJPercentage+"', PCBReleasePercentage = '"+PCBReleasePercentage+"', PCBPurchase = '"+PCBPurchase+"', PCBShipment = '"+PCBShipment+"', PCBTax = '"+PCBTax+"', PCBRelease = '"+PCBRelease+"', PCBAJ = '"+PCBAJ+"', PCBTotalUSD = '"+PCBTotalUSD+"', PCBTotalMXN = '"+PCBTotalMXN+"', PCBPerMXN = '"+PCBPerMXN+"', assemblyLayers = '"+assemblyLayers+"', assemblyMPN = '"+assemblyMPN+"', assemblySMT = '"+assemblySMT+"', assemblyTH = '"+assemblyTH+"', assemblyDeliverTime = '"+assemblyDeliverTime+"', assemblyAJPercentage = '"+assemblyAJPercentage+"', assemblyCost = '"+assemblyCost+"', assemblyTax = '"+assemblyTax+"', assemblyAJ = '"+assemblyAJ+"', assemblyDhlCost = '"+assemblyDhlCost+"', assemblyTotalMXN = '"+assemblyTotalMXN+"', assemblyPerMXN = '"+assemblyPerMXN+"' WHERE id_quote = "+id_quote;
                            
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