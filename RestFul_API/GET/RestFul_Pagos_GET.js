
const express = require('express');
const router = express.Router();
const sql  = require('mssql');

router.get('/', (req, res) =>
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
            let QueryCmd = "SELECT id_pago, id_empleado, fecha, cantidad FROM Pagos";
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

module.exports = router;

