import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import {
  __Name__Controller,
  __Name__Resolver,
  __Name__Service,
  __Name__,
} from ".";

@Module({
  imports: [TypeOrmModule.forFeature([__Name__])],
  providers: [__Name__Service, __Name__Resolver],
  controllers: [__Name__Controller],
})
export class __Name__Module {}
