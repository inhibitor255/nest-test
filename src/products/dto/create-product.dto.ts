import { IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  readonly price: number | null;
}
