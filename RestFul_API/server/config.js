const dotenv = require ('dotenv');
const sql = require('mssql')

dotenv.config();

const
{
    SQL_SERVER,
    SQL_DATABASE,
    SQL_USER,
    SQL_PASSWORD
} = process.env;

module.exports = 
{
    server: SQL_SERVER,
    database: SQL_DATABASE,
    user: SQL_USER,
    password: SQL_PASSWORD,
    setTimeout: 500000,
    requestTimeout: 500000, //Send big files, dont forget expand the memory of the sql db
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 500000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true,
        setTimeout: 500000
    }
};