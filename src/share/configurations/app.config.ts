import { TypeOrmModuleOptions } from '@nestjs/typeorm';
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
                PORT: Number(process.env.PORT) || 3000,
                AUTO_SYNC: (process.env.AUTO_SYNC == 'true') ? true : false,
            },
            NODE: {
                API: process.env.NODE_API,
            },
            DATASOURCE: {
                HOST: process.env.DB_HOST,
                PORT: process.env.DB_PORT,
                DB: process.env.DB_NAME,
                USERNAME: process.env.DB_USER,
                PASSWORD: process.env.DB_PASSWORD,
            }
        }
    }

    public typeOrmConfig(): any {
        return {
            type: process.env.DB_TYPE,
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT) || 3306,
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            entities: ['dist/**/*.entity.{ts,js}'],
            migrations: ['dist/migrations/*.{ts,js}'],
            migrationsRun: true,
            synchronize: false,
            ssl: false,
            extra: {
                ssl: {
                    rejectUnauthorized: false,
                }
            }
        }
    }
}
export const APP_CONFIG = new AppConfig().APP_CONFIG;