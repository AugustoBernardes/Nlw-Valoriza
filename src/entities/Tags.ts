import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Expose } from "class-transformer"
import { v4 as uuid } from "uuid"

@Entity("tags")
export class Tags {
    @PrimaryColumn()
    readonly id:string; 

    @Column()
    name:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn() 
    updated_at:Date;

    @Expose({name: "custom_name"})
    custom_name():string{
    return `#${this.name}`
    }
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}
