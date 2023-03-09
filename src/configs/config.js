module.exports.Config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST_MYSQL,
    DB_USER: process.env.DB_USER_MYSQL,
    DB_PASS: process.env.DB_PASS_MYSQL,
    DB_DATABASE: process.env.DB_DATABASE_MYSQL,
    SECRET_JWT: process.env.SECRET_JWT || ""
};