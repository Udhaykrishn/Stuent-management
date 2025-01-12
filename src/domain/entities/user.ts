import { IsString, IsNumber, MinLength, MaxLength, IsNotEmpty } from "class-validator";

export class StudentDto {
    @IsString()
    @IsNotEmpty({ message: "Name should not be empty" })
    @MinLength(4, { message: "Name must be at least 4 characters long" })
    @MaxLength(50, { message: "Name must not exceed 50 characters" })
    name!: string;

    @IsNumber()
    @IsNotEmpty({ message: "Age should not be empty" })
    age!: number;
}
