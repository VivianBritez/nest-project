import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from "./entities/brand.entity";
import { v4 as uuid } from "uuid";
@Injectable()
export class BrandService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'toyota',
      createdAt : new Date()
    }
  ]

  create(createBrandDto: CreateBrandDto) {
    const { name} = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt : new Date()
    }
    this.brands.push(brand);
    return brand;

  }

  findAll() {
    return `This action returns all brand`;
  }

  findOne(id: string) {

    const brand = this.brands.find( brand  => brand.id === id);
    if(!brand) 
      throw new NotFoundException(`Brand with ${id} not found`)
    return brand;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
