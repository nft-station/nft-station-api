import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DashboardService } from "../services/dashboard.service";
import { CONTROLLER_CONSTANTS } from "../share/constants/api.const";

@Controller(CONTROLLER_CONSTANTS.DASHBOARD.NAME)
@ApiTags(CONTROLLER_CONSTANTS.DASHBOARD.API_TAG)
export class DashboardController{
    constructor(private dashboardService: DashboardService){}

    @Get(CONTROLLER_CONSTANTS.DASHBOARD.METHODS.BALANCES)
    async getBalances(@Param('address') address: string, @Param('pagekey') pagekey: string){
        return await this.dashboardService.getBalances(address, pagekey);
    }
}