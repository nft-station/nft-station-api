import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CollectiblesService } from "../services/collectibles.service";
import { CONTROLLER_CONSTANTS } from "../share/constants/api.const";

@Controller(CONTROLLER_CONSTANTS.COLLECTIBLES.NAME)
@ApiTags(CONTROLLER_CONSTANTS.COLLECTIBLES.API_TAG)
export class CollectiblesController{
    constructor(private collectiblesService: CollectiblesService){

    }
    @Get(CONTROLLER_CONSTANTS.COLLECTIBLES.METHODS.GET_BY_ADDRESS)
    async getByAddress(@Param('address') address: string){
        return await this.collectiblesService.getByAddress(address)
    }
}