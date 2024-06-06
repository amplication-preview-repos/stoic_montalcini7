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
import { CourseUpdateManyWithoutInstructorsInput } from "./CourseUpdateManyWithoutInstructorsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { LiveSessionUpdateManyWithoutInstructorsInput } from "./LiveSessionUpdateManyWithoutInstructorsInput";

@InputType()
class InstructorUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CourseUpdateManyWithoutInstructorsInput,
  })
  @ValidateNested()
  @Type(() => CourseUpdateManyWithoutInstructorsInput)
  @IsOptional()
  @Field(() => CourseUpdateManyWithoutInstructorsInput, {
    nullable: true,
  })
  courses?: CourseUpdateManyWithoutInstructorsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => LiveSessionUpdateManyWithoutInstructorsInput,
  })
  @ValidateNested()
  @Type(() => LiveSessionUpdateManyWithoutInstructorsInput)
  @IsOptional()
  @Field(() => LiveSessionUpdateManyWithoutInstructorsInput, {
    nullable: true,
  })
  liveSessions?: LiveSessionUpdateManyWithoutInstructorsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { InstructorUpdateInput as InstructorUpdateInput };
