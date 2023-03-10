// const { Pool } = require('pg')
const { Config } = require("../configs/config");
const { Psql } = require("../db/psql-service");


class PsqlLoader {
    static init () {

        // create mySQl pool
        Psql.init({
            host: Config.DB_HOST_PSQL,
            user: Config.DB_USER_PSQL,
            password: Config.DB_PASS_PSQL,
            database: Config.DB_DATABASE_PSQL,
            dateStrings: ['DATE', 'DATETIME']
        });

        // verify connection
        Psql.checkConnection();
        console.log("Connect to PSql");
    }
}

module.exports = { PsqlLoader };