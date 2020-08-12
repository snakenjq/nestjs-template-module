import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class __Name__ {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
}
