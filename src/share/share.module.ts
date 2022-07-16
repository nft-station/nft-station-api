import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CollectiblesController } from "../controllers/collectibles.controller";
import { DashboardController } from "../controllers/dashboard.controller";
import { LaunchpadController } from "../controllers/launchpad.controller";
import { CollectiblesEntity } from "../entities/collectibles.entity";
import { ContractEntity } from "../entities/contract.entity";
import { MetadataEntity } from "../entities/metadata.entity";
import { CollectiblesRepository } from "../repositories/collectibles.repository";
import { ContractRepository } from "../repositories/contract.repository";
import { CollectiblesService } from "../services/collectibles.service";
import { ContractService } from "../services/contract.service";
import { DashboardService } from "../services/dashboard.service";
import { LaunchpadService } from "../services/launchpad.service";
import { TaskSync } from "../syncs/task.sync";
import { ServiceUtil } from "./utils/service.util";

const repositories = [
    // CollectiblesRepository,
    // ContractRepository
];

const services = [
    DashboardService,
    LaunchpadService,
    // CollectiblesService,
    ContractService,
    // TaskSync, 
    ServiceUtil
];

const controllers = [
    DashboardController,
    CollectiblesController,
    LaunchpadController
];

const entities = [
    // CollectiblesEntity,
    // MetadataEntity,
    // ContractEntity
];


@Module({
    imports: [
        HttpModule,
        // TypeOrmModule.forFeature([...entities])
    ],
    controllers: [...controllers],
    providers: [...services, ...repositories],
    exports: [],
})
export class SharedModule { }