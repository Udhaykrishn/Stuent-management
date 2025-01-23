import { IStudent } from '@/interface/student.interface';

export interface IStudentRepository {
    create: (data: IStudent) => Promise<IStudent>
    findAll(): Promise<IStudent[]>
    findById(id: string): Promise<IStudent | null>
    update(id: string, data: Partial<IStudent>): Promise<IStudent | null>
    delete(id: string): Promise<boolean | null>
    findByEmail(email: string): Promise<IStudent | null>
}

