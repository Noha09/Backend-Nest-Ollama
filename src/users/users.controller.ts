import { Controller, Get, Post, Body, Param, Logger } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    private readonly logger = new Logger(UsersController.name);

    constructor(private readonly usersService: UsersService) {}

    @Post('/create')
    async createUser(@Body() body: { name: string; email: string; password: string }) {
        return this.usersService.createUser(body.name, body.email, body.password);
    }

    @Get('/all')
    async findAll() {
        return this.usersService.findAll();
    }

    @Get('/get/:id')
    async findOne(@Param('id') id: string) {
        return this.usersService.findOne(parseInt(id, 10));
    }
}
