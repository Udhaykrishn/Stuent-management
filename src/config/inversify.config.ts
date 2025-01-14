import { Container } from "inversify";
import { TYPES } from "@/types/student.types"
import { IStudentRepository, StudentRepository } from '@/repository';
import { IStudentService, StudentSerivce } from "@/services";
import { StudentController } from "@/controller";

const container = new Container();

container.bind<IStudentRepository>(TYPES.StudentRepository).to(StudentRepository);
container.bind<IStudentService>(TYPES.StudentService).to(StudentSerivce)
container.bind<StudentController>(TYPES.StudentController).to(StudentController)

export default container