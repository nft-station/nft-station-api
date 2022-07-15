import { Column, Entity, Index, ManyToOne, OneToOne } from "typeorm";
import { PKAutoIncrementEnity } from "./base/base.entity";
import { CollectiblesEntity } from "./collectibles.entity";

@Entity('metadata')
export class MetadataEntity extends PKAutoIncrementEnity {

    @OneToOne(() => CollectiblesEntity, (collectibles) => collectibles.id, { eager: false, lazy: true })
    collectibles: string;

    @Column({name: 'name', type:'varchar', length: 255})
    name: string;

    @Column({name: 'description', type:'varchar', length: 1500})
    description: string;

    @Column({name: 'image', type:'varchar', length: 255})
    image: string;


}