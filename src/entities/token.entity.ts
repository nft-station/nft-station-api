import { BaseEntity, Column, PrimaryColumn } from "typeorm";

export class TokenEntity extends BaseEntity {

   @PrimaryColumn("token_id")
    tokenId: string;

    @Column({ name: 'owner', length: 255 })
    owner: string;

    @Column({ name: 'contract_id'})
    contractId: number;
}