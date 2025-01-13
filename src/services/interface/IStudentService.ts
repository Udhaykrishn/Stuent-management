import { IStudent } from "@/interface/student.interface";

export interface IStudentService {
    createStudent(student: IStudent): Promise<IStudent>;
    getStudentById(id: string): Promise<IStudent | null>
    getAllStudents(): Promise<IStudent[]>
    updateStudent(id: string, student: IStudent): Promise<IStudent | null>
    deleteStudent(id: string): Promise<boolean | null>
}