import { Resolver } from '@nestjs/graphql';

import { __Name__Service } from '../service';

@Resolver()
export class __Name__Resolver {
  constructor(private readonly __name__Service: __Name__Service) {}
}
