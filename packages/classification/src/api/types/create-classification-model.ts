export class CreateClassificationModel {
  name?: string;
  classification?: number;

  constructor(name: string, classification: number) {
    this.name = name;
    this.classification = classification;
  }
}
