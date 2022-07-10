import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ServiceUtil {
    constructor(
        private httpService: HttpService) {

    }

    /**
     * getDataAPI
     * @param api 
     * @param params 
     * @param ctx 
     * @returns 
     */
    async getDataAPI(api, params) {
        try {
            const data = await lastValueFrom(this.httpService.get(api + params)).then(
                (rs) => rs.data,
            );
            return data;

        } catch (err) {
            throw err;
        }
    }
}