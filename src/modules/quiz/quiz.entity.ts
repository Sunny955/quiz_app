import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('quizes')
export class Quiz extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The quiz unique identifier'
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    title: string;

    @Column({
        type: 'text',
    })
    desc: string;

    @Column({
        type: 'boolean',
        default: 1
    })
    isActivate: boolean;
}