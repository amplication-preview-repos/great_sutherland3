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
import { LocationCreateNestedManyWithoutTripsInput } from "./LocationCreateNestedManyWithoutTripsInput";
import { NoteCreateNestedManyWithoutTripsInput } from "./NoteCreateNestedManyWithoutTripsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class TripCreateInput {
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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  destination?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => LocationCreateNestedManyWithoutTripsInput,
  })
  @ValidateNested()
  @Type(() => LocationCreateNestedManyWithoutTripsInput)
  @IsOptional()
  @Field(() => LocationCreateNestedManyWithoutTripsInput, {
    nullable: true,
  })
  locations?: LocationCreateNestedManyWithoutTripsInput;

  @ApiProperty({
    required: false,
    type: () => NoteCreateNestedManyWithoutTripsInput,
  })
  @ValidateNested()
  @Type(() => NoteCreateNestedManyWithoutTripsInput)
  @IsOptional()
  @Field(() => NoteCreateNestedManyWithoutTripsInput, {
    nullable: true,
  })
  notes?: NoteCreateNestedManyWithoutTripsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { TripCreateInput as TripCreateInput };
