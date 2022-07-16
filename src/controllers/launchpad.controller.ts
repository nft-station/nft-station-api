import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LaunchpadService } from "../services/launchpad.service";
import { CONTROLLER_CONSTANTS } from "../share/constants/api.const";

@Controller(CONTROLLER_CONSTANTS.LAUNCHPAD.NAME)
@ApiTags(CONTROLLER_CONSTANTS.LAUNCHPAD.API_TAG)
export class LaunchpadController {
    constructor(private launchpadService: LaunchpadService) { }

    // @Get(CONTROLLER_CONSTANTS.LAUNCHPAD.METHODS.GET_BY_ADDRESS)
    // async getByAddress(@Param('address') address: string) {
    //     return await this.launchpadService.getByAddress(address)
    // }

    // @Get(CONTROLLER_CONSTANTS.LAUNCHPAD.METHODS.GET_PAGING)
    // async getPaging(@Param('limit') limit: number, @Param('offset') offset: number) {
    //     return await this.launchpadService.getPaging(limit, offset);
    // }
}