import { DataSource } from "typeorm";
import { APP_CONFIG } from "./app.config";
import * as dotenv from 'dotenv';
dotenv.config();

const typeormConfig = new DataSource({
    type: `postgres`,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: ['./src/entities/**/*.entity.{ts,js}'],
    migrations: ['./src/migrations/'],
    migrationsRun: true,
    synchronize: true,
    migrationsTableName: 'migrations',
    ssl: {
        rejectUnauthorized: false
    }
    
})
export default typeormConfig;