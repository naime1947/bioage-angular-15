export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfLatestImaging: Date;
  nextAssessmentDate: Date;
  choronologicalAge: number;
  biologicalAge: number;
  refNo: string;
  phone: string;
  country: string;
}
