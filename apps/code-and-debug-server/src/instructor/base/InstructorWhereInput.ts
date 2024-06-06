/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourseListRelationFilter } from "../../course/base/CourseListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LiveSessionListRelationFilter } from "../../liveSession/base/LiveSessionListRelationFilter";

@InputType()
class InstructorWhereInput {
  @ApiProperty({
    required: false,
    type: () => CourseListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CourseListRelationFilter)
  @IsOptional()
  @Field(() => CourseListRelationFilter, {
    nullable: true,
  })
  courses?: CourseListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => LiveSessionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LiveSessionListRelationFilter)
  @IsOptional()
  @Field(() => LiveSessionListRelationFilter, {
    nullable: true,
  })
  liveSessions?: LiveSessionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;
}

export { InstructorWhereInput as InstructorWhereInput };