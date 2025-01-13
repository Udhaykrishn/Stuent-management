import { injectable } from "inversify"
import { IStudentRepository } from "@/repository/interface/student.interface.repository";
import { Student } from "@/model/user.model";
import { IStudent } from '../interface/student.interface';

@injectable()
export class StudentRepository implements IStudentRepository {

  async create(student: IStudent): Promise<IStudent> {
    return await Student.create(student)
  }

  async delete(id: string): Promise<boolean | null> {
    return await Student.findByIdAndDelete(id)
  }
  async findAll(): Promise<IStudent[]> {
    return await Student.find({})
  }
  async findById(id: string): Promise<IStudent | null> {
    return await Student.findById(id)
  }
  async update(id: string, data: Partial<IStudent>): Promise<IStudent | null> {
    return await Student.findByIdAndUpdate(id, data, { new: true })
  }
}