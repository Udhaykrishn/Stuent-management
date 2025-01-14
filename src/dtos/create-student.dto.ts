import { IStudent } from "@/interface/student.interface";
import { IsNumber, MinLength, IsString, IsNotEmpty } from "class-validator"


export class createStudent implements IStudent {
    @IsString()
    @MinLength(3)
    name!: string;

    @IsNumber()
    @IsNotEmpty()
    age!: number;
}