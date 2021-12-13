export class Person {
  nameOfCategory: string;
  dateCreated: string;
  status: string;
  action: string;

  constructor(
    nameOfCategory: string,
    dateCreated: string,
    status: 'true',
    action: 'false'
  ) {
    this.nameOfCategory = nameOfCategory;
    this.dateCreated = dateCreated;
    this.status = status;
    this.action = action;
  }
}

export const personsData: Person[] = [
  new Person('person 1', ' 11 / 11 / 2021', 'true', 'false'),
  new Person('person 2', '12 / 11 / 2021', 'true', 'false'),
  new Person('person 3', '13 / 11 / 2021', 'true', 'false'),
  new Person('person 4', '14 / 11 / 2021', 'true', 'false'),
  new Person('person 5', '15 / 11 / 2021', 'true', 'false'),
  new Person('person 6', '16 / 11 / 2021', 'true', 'false'),
  new Person('person 7', '17 / 11 / 2021', 'true', 'false'),
  new Person('person 8', '18 / 11 / 2021', 'true', 'false'),
  new Person('person 9', '19 / 11 / 2021', 'true', 'false'),
  new Person('person 10', '20 / 11 / 2021', 'true', 'false'),
];
