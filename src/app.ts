import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { EmployeeController } from '@src/controllers/employee.controller';
import { EmployeeService } from '@src/services/employee.service';
import { MongoURL } from '@src/utils/constants.config';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setExpressConfig();
    this.setControllers();
    this.setMongoConfig();
  }

  private setExpressConfig(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  // eslint-disable-next-line class-methods-use-this
  private setMongoConfig(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(MongoURL, {
      useNewUrlParser: true,
    });
  }

  public setControllers(): void {
    // create an instance of Employee Controller class
    const employeeController = new EmployeeController(new EmployeeService());
    this.app.use('/employee', employeeController.router);
  }
}

export default new App().app;
