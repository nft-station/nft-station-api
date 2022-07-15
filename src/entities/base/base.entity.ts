import { Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/**
 * BaseEntity
 */
export class BaseEntity {
    @Column({
        type: 'varchar',
        name: 'created_by',
    })
    createdBy: string;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
    })
    createdAt: Date;

    @Column({
        type: 'varchar',
        name: 'updated_by',
    })
    updatedBy: string;

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
    })
    updatedAt: Date;
}

/**
 * PKStringEnity
 */
export class PKStringEnity extends BaseEntity {
    @PrimaryColumn()
    id: string;
}

/**
 * PKAutoIncrementEnity
 */
export class PKAutoIncrementEnity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
}

/**
 * PKAUuidEnity
 */
export class PKAUuidEnity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}