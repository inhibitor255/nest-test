import { IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @Type(() => Number)
  @IsInt()
  readonly price: number;
}
