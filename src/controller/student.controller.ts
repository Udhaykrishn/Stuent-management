import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IStudentService } from "@/services/interface/IStudentService";
import { TYPES } from "@/types/student.types"

@injectable()
export abstract class StudentController {
    constructor(@inject(TYPES.StudentService) private readonly studentService: IStudentService) {
    }

    async createStudent(req: Request, res: Response) {
        try {
            const student = await this.studentService.createStudent(req.body)
            return res.status(201).json(student)
        } catch (error) {
            return res.status(500).json({ error: "Failed to create student" })
        }
    }

    async getAllStudents(req: Request, res: Response) {
        try {
            const students = await this.studentService.getAllStudents();
            return res.status(200).json(students)
        } catch (error) {
            return res.status(500).json({ error: "Students not found" })
        }
    }

    async getStudentById(req: Request, res: Response) {
        try {
            const student = await this.studentService.getStudentById(req.params.id)
            return res.status(200).json(student)
        } catch (error) {
            return res.status(500).json({ error: "Student not found" })
        }
    }

    async updateStudent(req:Request,res:Response){
        try {
            
        } catch (error) {
            
        }
    }
}