import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn({ name: 'id_user' })
    id: number;

    @Column({ name: 'nombre' })
    name: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ unique: true, name: 'correo' })
    email: string;
}
