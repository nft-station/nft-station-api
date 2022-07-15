import { Injectable } from "@nestjs/common";

@Injectable()
export class LaunchpadService {
    constructor() { }

    getPaging(limit: number, offset: number){

        return [];
    }

    getByAddress(address: string){
        return {}
    }
}