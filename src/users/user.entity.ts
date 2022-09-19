import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'text', array: true, default: [] })
  roles;
}

@Entity()
export class UserLogin {
  @Column()
  email: string;

  @Column()
  password: string;
}
