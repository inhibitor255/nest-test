import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangePriceTypeSafely1772690429767 implements MigrationInterface {
    name = 'ChangePriceTypeSafely1772690429767'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "product" ALTER COLUMN "price" TYPE double precision USING (
                CASE
                    WHEN "price" IS NULL THEN 0
                    WHEN TRIM("price"::text) ~ '^[-+]?[0-9]+([.][0-9]+)?$' THEN ("price"::text)::double precision
                    ELSE 0
                END
            )`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "product" ALTER COLUMN "price" TYPE integer USING (
                CASE
                    WHEN "price" IS NULL THEN 0
                    WHEN TRIM("price"::text) ~ '^[-+]?[0-9]+$' THEN ("price"::text)::integer
                    ELSE 0
                END
            )`,
        );
    }
}
