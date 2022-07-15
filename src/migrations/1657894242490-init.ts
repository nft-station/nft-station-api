import { MigrationInterface, QueryRunner } from "typeorm";

export class init1657894242490 implements MigrationInterface {
    name = 'init1657894242490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "metadata" ("created_by" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" character varying(1500) NOT NULL, "image" character varying(255) NOT NULL, CONSTRAINT "PK_56b22355e89941b9792c04ab176" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "collectibles" ("created_by" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" character varying NOT NULL, "address" character varying(255) NOT NULL, "tokenName" character varying(255) NOT NULL, "tokenSymbol" character varying(255) NOT NULL, "logoUri" character varying(255) NOT NULL, "uri" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, "description" character varying(1500) NOT NULL, "imageUri" character varying(255) NOT NULL, CONSTRAINT "PK_d3773dc16aab8b4ab8dba5eb123" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "token" ("created_by" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" character varying NOT NULL, "owner" character varying(255) NOT NULL, "contract_id" integer NOT NULL, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contract" ("created_by" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "code_id" integer NOT NULL, "address" character varying(255) NOT NULL, "status" character varying(50) NOT NULL, CONSTRAINT "PK_f382f9496f4a282f0f10d804e79" PRIMARY KEY ("code_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contract"`);
        await queryRunner.query(`DROP TABLE "token"`);
        await queryRunner.query(`DROP TABLE "collectibles"`);
        await queryRunner.query(`DROP TABLE "metadata"`);
    }

}
