import { Controller, Get, Post, Body, Res, Req, Param, Delete, Put} from '@nestjs/common';
import  { CreateItemDto } from './DTO/create.item.dto';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
    //Not Next way
    // @Get()
    //     findAll( @Req() req:Request, @Res() res:Response):Response
    //     {
    //         console.log(req.url);
    //         return res.send('find all items');
    //     }

     @Get()
        findAll():string
        {
            return 'find all items';
        }

    @Get(':id')
        findOne(@Param('id') id):string
        {
            return `Item  ${id}`;
        }
  
    @Post()
        createItem(@Body() createItemDto:CreateItemDto){

            return `Name:${createItemDto.name} 
            Description:${createItemDto.description} 
            Qty:${createItemDto.qty}`;
        }


    @Delete(':id')
        deleteItem(@Param('id') id):string{
            return `Delete item ${id}`;
        }


    @Put(':id')
        updateItem(@Param('id') id, @Body() createItemDto:CreateItemDto):string{

            return `Update item ${id}
            Name:${createItemDto.name}
            Qty:${createItemDto.qty}`;
        }
    }
