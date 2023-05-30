import { Field } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { DictionaryOderBy, DepartmentQuery } from "@/types/graphql";
import { PaginationArgs } from "@/common/pagination/pagination.args";

export class QueryDictionaryInput extends PaginationArgs {
  /** 按照哪个字段排序 */
  @Field({ nullable: true })
  @IsOptional()
  orderBy?: DictionaryOderBy;

  /** 查询条件 */
  @Field({ nullable: true })
  @IsOptional()
  query?: DepartmentQuery;
}
