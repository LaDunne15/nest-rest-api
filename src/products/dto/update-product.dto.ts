import { ApiProperty } from "@nestjs/swagger"

export class UpdateProductDto {
    @ApiProperty()
    readonly title: string
    @ApiProperty()
    readonly price: number
}