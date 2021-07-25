import { Employee } from '@src/models/employee.model';
import { IEmployee } from '@src/models/employee.interface';

// eslint-disable-next-line import/prefer-default-export
export class EmployeeService {
  // eslint-disable-next-line class-methods-use-this
  greetings(): string {
    const welcomeMessage = 'Welcome to node typescript setup';
    return welcomeMessage;
  }

  // eslint-disable-next-line class-methods-use-this
  public getEmployees(): Promise<IEmployee[]> {
    return Employee.find({}).exec();
  }

  // eslint-disable-next-line class-methods-use-this
  public getEmployee(id: string): Promise<IEmployee | null> {
    return Employee.findById(id).exec();
  }

  // eslint-disable-next-line class-methods-use-this
  public addEmployee(employee: IEmployee): Promise<IEmployee> {
    const newEmployee = new Employee(employee);
    return newEmployee.save();
  }

  // eslint-disable-next-line class-methods-use-this
  public async updateEmployee(
    id: string,
    employee: IEmployee
  ): Promise<IEmployee> {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      employee
    ).exec();

    if (!updatedEmployee) {
      throw new Error(`Employee with id '${id}' not found`);
    }

    return updatedEmployee;
  }

  // eslint-disable-next-line class-methods-use-this
  public async deleteEmployee(id: string): Promise<IEmployee> {
    const deletedEmployee = await Employee.findByIdAndDelete(id).exec();

    if (!deletedEmployee) {
      throw new Error(`Employee with id '${id}' not found`);
    }

    return deletedEmployee;
  }
}
