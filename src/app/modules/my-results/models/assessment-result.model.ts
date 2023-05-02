export interface AssessmentResultModel {
  id: string;
  name: string;
  dateOfLatestImaging: Date;
  nextAssessmentDate: Date;
  choronologicalAge: number;
  biologicalAge: number;
}
