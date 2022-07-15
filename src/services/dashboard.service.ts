import { Injectable, Logger } from "@nestjs/common";
import { APP_CONFIG } from "../share/configurations/app.config";
import { ServiceUtil } from "../share/utils/service.util";

@Injectable()
export class DashboardService {
    private nodeApis = APP_CONFIG.NODE.API;
    public _logger = new Logger(DashboardService.name);

    constructor(private serviceUtil: ServiceUtil) {

    }


    /**
     * Get balance info from node
     * @param address 
     * @param nextKey 
     * @returns 
     */
    public async getBalances(address: string, pagekey?: string) {
        try {
            let paramsBalance = `cosmos/bank/v1beta1/balances/${address}`;
            if (pagekey) {
                paramsBalance += `?pagination.key=${pagekey} `
            }
            const [balances] = await Promise.all([
                this.serviceUtil.getDataAPI(this.nodeApis, paramsBalance),
            ])
            return balances;
        }catch(error){
            this._logger.error(`Call getBalances method has error: ${error.message}`);
            throw error;
        }
    }
}