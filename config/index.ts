export const port =  process.env.PORT || 3000;
export const host = process.env.HOST || 'localhost';
export const protocol = process.env.PROTOCOL || 'http';
export const basePath = process.env.BASE_PATH || '/api/v1';

export const dbHost = process.env.DB_HOST || "";
export const dbPort = process.env.DB_PORT || 27017;
export const dbName = process.env.DB_NAME || "";
export const dbOptions = {
    user:   process.env.DB_USER || "",
    pass:   process.env.DB_PASS || "",
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
};
export const dbTablePrefix = process.env.DB_TABLE_PREFIX || "";
