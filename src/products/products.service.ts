import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = this.productsRepository.create(createProductDto);
    return await this.productsRepository.save(product);
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: number) {
    const user = await this.productsRepository.findOneBy({id});
    if (!user) {
      console.error(`Product with id ${id} not found`);
    }
    return user;
  }

  async update (id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.preload(
      {
        id:id,
        ...updateProductDto
      }
    )

    if (!product) {
      return console.error(`Product with id ${id} not found`);
    }

    return await this.productsRepository.save(product);

  }

  async remove(id: number) {
    const product = await this.productsRepository.findOneBy({id : id})
    if (!product) {
      return console.error(`Product with id ${id} not found`);
    }

    return await this.productsRepository.remove(product);
  }
}
