import { IStudent } from "@/interface/student.interface";
import { IsNumber, MinLength, IsString, IsEmpty, IsEmail, IsPhoneNumber, IsNotEmpty } from "class-validator"


export class createStudent implements IStudent {
    @IsString()
    @MinLength(3)
    name!: string;

    @IsNumber()
    @IsNotEmpty()
    age!: number;

    @IsString()
    @IsNotEmpty()
    status!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsPhoneNumber('IN', { message: "Invalid Indian phone number" })
    @IsNotEmpty()
    phone!: string;
}