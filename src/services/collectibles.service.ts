import { Injectable } from "@nestjs/common";
import { CollectiblesEntity } from "../entities/collectibles.entity";
import { CollectiblesRepository } from "../repositories/collectibles.repository";

@Injectable()
export class CollectiblesService {
    constructor(private collectiblesRepos: CollectiblesRepository) { }

    getByAddress(address: string): Promise<CollectiblesEntity[]> {
        return this.collectiblesRepos.getByCondition({
            where: { address }
        });
    }
}