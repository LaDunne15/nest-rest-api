import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './products.servise';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductService){}

    @Get()
    //@Redirect('https://google.com',301)
    getAll(): Promise<Product[]> {
        return this.productsService.getAll();
    }

    @Get(":id")
    getOne(@Param('id') id: string): Promise<Product>{
        return this.productsService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-control', 'none')
    create (@Body() createProductDto: CreateProductDto): Promise<Product>{
        return this.productsService.create(createProductDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string): Promise<Product>{
        return this.productsService.remove(id);
    }

    @Put(":id")
    update(@Body() updateProductDTO: UpdateProductDto,@Param('id')id: string): Promise<Product>{
        return this.productsService.update(id,updateProductDTO);
    }
}
