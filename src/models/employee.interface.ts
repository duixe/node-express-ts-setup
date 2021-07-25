import { Document } from 'mongoose';

export interface IEmployee extends Document {
  firstName: string;
  lastName: string;
  department: string;
  position: string;
  phoneNumber: string;
  email: string;
}
