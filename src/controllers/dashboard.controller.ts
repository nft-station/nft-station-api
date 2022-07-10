import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DashboardSerivice } from "../services/dashboard.service";
import { CONTROLLER_CONSTANTS } from "../share/constants/api.const";

@Controller(CONTROLLER_CONSTANTS.DASHBOARD.NAME)
@ApiTags(CONTROLLER_CONSTANTS.DASHBOARD.API_TAG)
export class DashboardController{
    constructor(private dashboardSerivice: DashboardSerivice){

    }

    @Get(CONTROLLER_CONSTANTS.DASHBOARD.METHODS.BALANCES)
    async getBalances(@Param('address') address: string, @Param('pagekey') pagekey: string){
        return await this.dashboardSerivice.getBalances(address, pagekey);
    }
}