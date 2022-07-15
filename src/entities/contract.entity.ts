import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base/base.entity';

@Entity('contract')
export class ContractEntity extends BaseEntity {
  @PrimaryColumn({ name: 'code_id' })
  codeId: number;

  @Column({ name: 'address', type: 'varchar', length: 255 })
  address: string;

  @Column({ name: 'status', type: 'varchar', length: 50 })
  status: string;
}
