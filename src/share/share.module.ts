import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { DashboardController } from "../controllers/dashboard.controller";
import { DashboardSerivice } from "../services/dashboard.service";
import { ServiceUtil } from "./utils/service.util";

const repositories = [

];

const services = [
    DashboardSerivice,
    ServiceUtil
];

const controllers = [
    DashboardController
];

const entities = [

];


@Module({
    imports: [
        HttpModule

        //   TypeOrmModule.forFeature([...entities])
    ],
    controllers: [...controllers],
    providers: [...services, ...repositories],
    exports: [],
})
export class SharedModule { }