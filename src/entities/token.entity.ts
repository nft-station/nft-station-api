import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { PKStringEnity } from "./base/base.entity";
@Entity('token')
export class TokenEntity extends PKStringEnity {

    @Column({ name: 'owner', length: 255 })
    owner: string;

    @Column({ name: 'contract_id' })
    contractId: number;
}