import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.UsersService.findAll();
  }

  @Post()
  create(@Body() user: Partial<User>) {
    return this.UsersService.create(user);
  }
}
