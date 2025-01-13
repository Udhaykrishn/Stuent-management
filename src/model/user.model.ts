import { Schema, model } from "mongoose";
import { IStudent } from '../interface/student.interface';

const studentSchema = new Schema<IStudent>({
    name: { type: String, required: true },
    age: { type: Number, required: true }
})

export const Student = model<IStudent>("Student", studentSchema)