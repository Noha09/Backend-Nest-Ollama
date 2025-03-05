import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);
    
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}
    
    async createUser(name: string, email: string, password: string) {
        const user = this.usersRepository.create({ name, email, password });
        return this.usersRepository.save(user);
    }
    
    async findAll() {
        return this.usersRepository.find();
    }

    async findOne(id: number) {
        return this.usersRepository.findOne({ where: { id } });
    }
}
