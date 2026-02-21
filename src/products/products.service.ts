import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    const {name, price} = createProductDto;
    return `Created ${name} with ${price} MMK.`;
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const { name, price } = updateProductDto;
    return `update product of #${id} to Name: ${name ?? 'unchanged'} and Price: ${price ?? 'unchanged'}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
