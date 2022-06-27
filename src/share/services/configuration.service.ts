import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
class ConfigurationService {
    constructor(
        private configService: ConfigService
    ) {

    }

    public get APP_CONFIG() {
        return {
            APPLICATION: {
                API_REFIX: this.configService.get<string>('API_REFIX'),
                PORT: this.configService.get<number>('PORT')
            },
            MYSQL:{
                DB_HOST: this.configService.get<string>('DB_HOST'),
                DB_PORT: this.configService.get<number>('DB_PORT'),
                DB_NAME: this.configService.get<string>('DB_NAME'),
                DB_USER: this.configService.get<string>('DB_USER'),
                DB_PASSWORD: this.configService.get<string>('PORT')
            },
            AURA_NETWORK:{
                
            }
        }
    }
}
