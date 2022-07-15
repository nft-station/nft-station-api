import { Logger } from '@nestjs/common';
import { FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';

export class BaseRepository<T>{
    public _logger = new Logger(BaseRepository.name);
    private _repos: Repository<T>;
    constructor(repos: Repository<T>) {
        this._repos = repos;
    }

    /**
     * getAll
     * @returns 
     */
    getAll(options?: FindManyOptions<T>): Promise<T[]> {
        return this._repos.find({
            ...options
        });
    }


    /**
     * getByCondition
     * @param condition 
     * @param order 
     * @returns 
     */
    getByCondition(condition: FindManyOptions<T>): Promise<T[]> {
        return this._repos.find({
            ...condition
        });
    }

    /**
     * getById
     * @param id 
     * @returns 
     */
    getById(id: any) {
        return this._repos.findOne(id);
    }

    /**
     * getById
     * @param options 
     * @returns 
     */
    getOne(options?: FindOptionsWhere<T>) {
        return this._repos.findOneBy(options);
    }

    /**
     * count
     * @param options 
     * @returns 
     */
    count(options?: FindManyOptions<T>) {
        return this._repos.count();
    }


    /**
     * create
     * @param entity 
     * @returns 
     */
    create(entity: T) {
        return this._repos.insert(entity);
    }

    /**
     * createMany
     * @param entities 
     * @returns 
     */
    createMany(entities: T[]) {
        return this._repos.save(entities);
    }

    /**
    * update
    * @param entity 
    * @returns 
    */
    update(entity: T) {
        return this._repos.save([entity]);
    }


    /**
     * updateMany
     * @param entities 
     * @returns 
     */
    updateMany(entities: T[]) {
        return this._repos.save(entities);
    }

    upsert(entities: T[], conflictPathsOrOptions: string[]) {
        return this._repos.upsert(entities, conflictPathsOrOptions);
    }

    /**
     * delete
     * @param options
     * @returns 
     */
    delete(options?: any) {
        return this._repos.delete(options);
    }
} 