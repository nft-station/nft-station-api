import { Injectable } from "@nestjs/common";
import { ContractEntity } from "../entities/contract.entity";
import { ContractRepository } from "../repositories/contract.repository";

@Injectable()
export class ContractService {
    constructor(private contractRepos: ContractRepository) { }

    public async create(entity: ContractEntity) {
        return await this.contractRepos.create(entity);
    }

    public async upsert(entities: ContractEntity[]) {
        return await this.contractRepos.upsert(entities, ['codeId']);
    }
}