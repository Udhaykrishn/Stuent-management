import { IStudent } from '@/interface/student.interface';
import { IStudentService } from './interface/IStudentService';
import { injectable, inject } from 'inversify';
import { TYPES } from '@/types/student.types';
import { IStudentRepository } from '@/repository/interface/student.interface.repository';

@injectable()
export class StudentSerivce implements IStudentService {
    constructor(@inject(TYPES.StudentRepository) private readonly studentRepo: IStudentRepository) {

    }
    async createStudent(student: IStudent): Promise<IStudent> {
     
        return await this.studentRepo.create(student)
    }

    async getAllStudents(): Promise<IStudent[]> {
        return this.studentRepo.findAll()
    }

    getStudentById(id: string): Promise<IStudent | null> {
        return this.studentRepo.findById(id)
    }

    updateStudent(id: string, student: IStudent): Promise<IStudent | null> {
        return this.studentRepo.update(id, student)
    }

    async deleteStudent(id: string): Promise<boolean | null> {
        return this.studentRepo.delete(id)
    }

}