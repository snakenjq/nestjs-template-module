import { PartialType, InputType } from '@nestjs/graphql';
import { Create__Name__Input } from '.';

@InputType()
export class Update__Name__Input extends PartialType(Create__Name__Input) {}
