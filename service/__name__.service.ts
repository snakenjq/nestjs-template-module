import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { __Name__ } from "../model";
@Injectable()
export class __Name__Service {
  constructor(
    @InjectRepository(__Name__)
    private readonly __name__Repository: Repository<__Name__>
  ) {}
}
