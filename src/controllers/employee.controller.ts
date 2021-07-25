import Router, { Request, Response } from 'express';
import { EmployeeService } from '@src/services/employee.service';

// eslint-disable-next-line import/prefer-default-export
export class EmployeeController {
  public router = Router();

  // Inject employee service to be used by this controller class
  constructor(private employeeService: EmployeeService) {
    this.setRoutes();
  }

  setRoutes(): void {
    // this.router.get('/', (_: Request, res: Response) => {
    //   const welcomeMessage = this.employeeService.greetings();
    //   res.send(welcomeMessage);
    // });

    this.router.route('/').get(this.getAllEmployees).post(this.createEmployee);
    this.router
      .route('/:id')
      .get(this.getSingleEmployee)
      .patch(this.updateEmployee)
      .delete(this.deletedEmployee);
  }

  private getAllEmployees = async (req: Request, res: Response) => {
    try {
      const employees = await this.employeeService.getEmployees();
      res.status(200).json({
        status: 'success',
        results: employees.length,
        data: {
          employees,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  };

  private createEmployee = async (req: Request, res: Response) => {
    try {
      const employee = await this.employeeService.addEmployee(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          employee,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  };

  private getSingleEmployee = async (req: Request, res: Response) => {
    try {
      const employee = await this.employeeService.getEmployee(req.params.id);
      res.status(200).json({
        status: 'success',
        data: {
          employee,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  };

  private updateEmployee = async (req: Request, res: Response) => {
    try {
      const updatedEmployee = await this.employeeService.updateEmployee(
        req.params.id,
        req.body
      );
      res.status(201).json({
        status: 'success',
        data: {
          updatedEmployee,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  };

  private deletedEmployee = async (req: Request, res: Response) => {
    try {
      await this.employeeService.deleteEmployee(req.params.id);
      res.status(200).json({
        status: 'success',
        data: null,
      });
    } catch (err) {
      res.status(500).json({
        status: 'fail',
        message: err.message,
      });
    }
  };
}
