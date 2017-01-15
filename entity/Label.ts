import {Table, Column, PrimaryGeneratedColumn} from "typeorm";


@Table()
export class Label {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    text: string;
}