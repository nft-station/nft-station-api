import { PKAutoIncrementEnity } from './base.entity';
import { Column } from 'typeorm';

export class ContractEntity extends PKAutoIncrementEnity {
  @Column({ name: 'code_id', length: 255 })
  codeId: string;

  @Column({ name: 'address', length: 255 })
  address: string;

  @Column({ name: 'status', length: 50 })
  status: string;
}
