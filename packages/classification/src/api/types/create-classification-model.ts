export class CreateClassificationModel {
  name?: string;
  classification?: number | string;

  constructor(name: string, classification: string | number) {
    this.name = name;
    this.classification = Number(classification);
  }
}
