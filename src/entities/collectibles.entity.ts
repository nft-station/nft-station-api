import { Column, Entity, OneToOne } from "typeorm";
import { PKStringEnity } from "./base/base.entity";
import { MetadataEntity } from "./metadata.entity";

@Entity('collectibles')
export class CollectiblesEntity extends PKStringEnity{

    @Column({name: 'address', type:'varchar', length: 255})
    address: string;

    @Column({name: 'tokenName', type:'varchar', length: 255})
    tokenName: string;

    @Column({name: 'tokenSymbol', type:'varchar', length: 255})
    tokenSymbol: string;

    @Column({name: 'logoUri', type:'varchar', length: 255})
    logoUri: string;

    @Column({name: 'uri', type:'varchar', length: 255})
    uri?: any;

    @Column({name: 'name', type:'varchar', length: 255})
    name: string;

    @Column({name: 'description', type:'varchar', length: 1500})
    description: string;

    @Column({name: 'imageUri', type:'varchar', length: 255})
    imageUri: string;

    @OneToOne(() => MetadataEntity, (metadata) => metadata.collectibles)
    metadata: MetadataEntity;
}