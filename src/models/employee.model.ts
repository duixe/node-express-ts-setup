import { model, Schema } from 'mongoose';
import { IEmployee } from '@src/models/employee.interface';

const EmployeeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'first Name field is required'],
    },
    lastName: { type: String, required: [true, 'last Name field is required'] },
    department: {
      type: String,
      required: [true, 'department field is required'],
    },
    position: {
      type: String,
      required: [true, 'position Name field is required'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'phone number field is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'email field is required'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// eslint-disable-next-line import/prefer-default-export
export const Employee = model<IEmployee>('Employee', EmployeeSchema);
