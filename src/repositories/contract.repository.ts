import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ContractEntity } from "../entities/contract.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class ContractRepository extends BaseRepository<ContractEntity>{
    constructor(
        @InjectRepository(ContractEntity)
        private readonly repos: Repository<ContractEntity>
    ) {
        super(repos);
    }
}