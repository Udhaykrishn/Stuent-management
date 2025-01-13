import { IStudent } from "@/interface/student.interface";
import { IsNumber, MinLength, IsEmpty, IsString } from "class-validator"


export class createStudent implements IStudent {
    @IsString()
    @MinLength(3)
    name!: string;

    @IsNumber()
    @IsEmpty()
    age!: number;

    @IsNumber()
    @IsEmpty()
    _id!: string;
}