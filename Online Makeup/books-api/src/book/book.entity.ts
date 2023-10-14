import { Entity, Column, Generated, PrimaryGeneratedColumn, BeforeInsert} from 'typeorm';

@Entity("book")
export class BookEntity{
@PrimaryGeneratedColumn()
id: number;
@Column()
title: string;
@Column()
author: string;
@Column()
published: string;
@Column() // database column
@Generated('uuid') // automatically generated using the UUID strategy
code: string;

 }