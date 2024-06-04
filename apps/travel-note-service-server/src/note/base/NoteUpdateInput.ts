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
import { IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TripWhereUniqueInput } from "../../trip/base/TripWhereUniqueInput";

@InputType()
class NoteUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => TripWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TripWhereUniqueInput)
  @IsOptional()
  @Field(() => TripWhereUniqueInput, {
    nullable: true,
  })
  trip?: TripWhereUniqueInput | null;
}

export { NoteUpdateInput as NoteUpdateInput };
