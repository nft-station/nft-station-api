import * as dotenv from 'dotenv';

export class AppConfig {
    constructor() {
        dotenv.config();

        // Replace \\n with \n to support multiline strings in AWS
        for (const envName of Object.keys(process.env)) {
            process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        }
    }

    public get APP_CONFIG() {
        return {
            APP: {
                API_REFIX: process.env.API_REFIX,
                PORT: Number(process.env.PORT) || 3000
            },
            NODE: {
                API: process.env.NODE_API,
            },
            DATABASE: {
                HOST: process.env.DB_HOST,
                PORT: process.env.DB_PORT,
                DB: process.env.DB_NAME,
                USERNAME: process.env.DB_USER,
                PASSWORD: process.env.DB_PASSWORD,
            }
        }
    }
}
export const APP_CONFIG = new AppConfig().APP_CONFIG;