import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CollectiblesEntity } from "../entities/collectibles.entity";
import { BaseRepository } from "./base/base.repository";

@Injectable()
export class CollectiblesRepository extends BaseRepository<CollectiblesEntity>{
    constructor(
        @InjectRepository(CollectiblesEntity)
        private readonly repos: Repository<CollectiblesEntity>
    ) {
        super(repos);
    }
}