module.exports.Config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || '15.206.56.7',
    DB_USER: process.env.DB_USER || 'rndshared',
    DB_PASS: process.env.DB_PASS || 'PY9BwpFHHJnMehxd',
    DB_DATABASE: process.env.DB_DATABASE || 'rndshared',
    SECRET_JWT: process.env.SECRET_JWT || "",
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || "SENDGRID_API_KEY",
    SENDGRID_SENDER: process.env.SENDGRID_SENDER || "FROM_EMAIL"
};