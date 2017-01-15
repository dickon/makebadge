
import {Table, Column, PrimaryGeneratedColumn} from "typeorm";

@Table()
export class Badge {
    @PrimaryGeneratedColumn()
    id: number;

}