import { Injectable, Logger } from '@nestjs/common';
import { ContractEntity } from '../entities/contract.entity';
import { ContractService } from '../services/contract.service';
import { APP_CONFIG } from '../share/configurations/app.config';
import { ServiceUtil } from '../share/utils/service.util';

@Injectable()
export class TaskSync {
  private _nodeApis = APP_CONFIG.NODE.API;
  private _logger = new Logger(TaskSync.name);

  constructor(
    private serviceUtil: ServiceUtil,
    private contractService: ContractService
  ) {
    
    if (APP_CONFIG.APP.AUTO_SYNC) {
      setTimeout(async () => {
        await this.handelSyncData();
      }, 1000);
    }

  }

  async handelSyncData() {
    const codeId = 1;
    try {
      const contractsUpsert = new Array<ContractEntity>();
      const wasms = await this.getWasmByCodeId(codeId);
      if (wasms) {
        const contractData = await this.getContracts(codeId);
        if (contractData) {
          contractData.contracts?.forEach((item) => {
            const contractEntity = new ContractEntity();
            contractEntity.codeId = codeId;
            contractEntity.address = String(item);
            contractEntity.status = 'TBD';
            contractEntity.createdBy = 'SYN_JOB';
            contractEntity.updatedBy = 'SYN_JOB';
            contractsUpsert.push(contractEntity);
          });
        }

        if (contractsUpsert.length > 0) {
          this.contractService.upsert(contractsUpsert);
        }
      }
    } catch (error) {
      this._logger.error(`Error handelSyncData method:${error.message}`)
    }

    await this.handelSyncData();
  }

  async getWasmByCodeId(codeId: number) {
    const wasmPara = `cosmwasm/wasm/v1/code/${codeId}`
    const [wasms] = await ([
      this.serviceUtil.getDataAPI(this._nodeApis, wasmPara)
    ]);
    return wasms;
  }

  async getContracts(codeId: number, nextkey?: string) {
    const constractPara = `cosmwasm/wasm/v1/code/${codeId}/contracts`;
    const [constracts] = await ([
      this.serviceUtil.getDataAPI(this._nodeApis, constractPara)
    ]);
    return constracts;
  }
}
