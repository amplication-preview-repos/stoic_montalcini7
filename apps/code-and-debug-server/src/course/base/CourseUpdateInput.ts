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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { InstructorWhereUniqueInput } from "../../instructor/base/InstructorWhereUniqueInput";
import { Type } from "class-transformer";
import { LessonUpdateManyWithoutCoursesInput } from "./LessonUpdateManyWithoutCoursesInput";

@InputType()
class CourseUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => InstructorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InstructorWhereUniqueInput)
  @IsOptional()
  @Field(() => InstructorWhereUniqueInput, {
    nullable: true,
  })
  instructor?: InstructorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => LessonUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => LessonUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => LessonUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  lessons?: LessonUpdateManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { CourseUpdateInput as CourseUpdateInput };
