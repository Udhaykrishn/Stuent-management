import { Request, Response } from "express";
import { inject } from "inversify";
import { IStudentService } from "@/services/interface/IStudentService";
import { TYPES } from "@/types/student.types"
import { controller, httpGet, httpPost, httpPut, httpDelete, request, response } from "inversify-express-utils"
import { validateMiddleware } from "@/middleware";
import { createStudent } from "@/dtos";

@controller('/students')
export class StudentController {
    constructor(@inject(TYPES.StudentService) private readonly studentService: IStudentService) {
    }

    @httpPost("/", validateMiddleware(createStudent))
    async createStudent(@request() req: Request, @response() res: Response) {
        const student = await this.studentService.createStudent(req.body)
        return res.status(201).json(student)
    }

    @httpGet("/")
    async getAllStudents(@request() req: Request, @response() res: Response) {
        const students = await this.studentService.getAllStudents();
        return res.json(students)
    }

    @httpGet("/id")
    async getStudentById(@request() req: Request, @response() res: Response) {
        const student = await this.studentService.getStudentById(req.params.id)
        if (student) {
            return res.json(student)
        }
        return res.status(404).json({ message: "user not found" })
    }

    @httpPut("/:id")
    async updateStudent(@request() req: Request, @response() res: Response) {

        const student = await this.studentService.updateStudent(req.params.id, req.body)
        if (student) {
            return res.json(student)
        }

        return res.status(404).json({ message: "User not found" })

    }

    @httpDelete("/:id")
    async deleteStudent(@request() req: Request, @response() res: Response) {
        const student = await this.studentService.deleteStudent(req.params.id);
        if (student) {
            return res.status(204).send()
        }
        return res.status(404).json({ message: "User not found" })
    }

}