export class CreateClassificationModel {
  name?: string;
  classification?: number | string;

  constructor(name: string, classification: string) {
    this.name = name;
    this.classification = parseInt(classification, 10);
  }
}
