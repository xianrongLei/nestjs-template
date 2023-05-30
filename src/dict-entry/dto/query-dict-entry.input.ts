import { Field } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { DictEntryOderBy, DictEntryQuery } from "@/types/graphql";
import { PaginationArgs } from "@/common/pagination/pagination.args";

export class QueryDictEntryInput extends PaginationArgs {
  /** 按照哪个字段排序 */
  @Field({ nullable: true })
  @IsOptional()
  orderBy?: DictEntryOderBy;
  /** 查询条件 */
  @Field({ nullable: true })
  @IsOptional()
  query?: DictEntryQuery;
}
