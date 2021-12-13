import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { personsData } from './person';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  persons$: BehaviorSubject<Person[]>;
  persons: Array<Person> = [];

  constructor() {
    this.persons$ = new BehaviorSubject<Person[]>([]);
    this.persons = personsData;
  }

  getAll() {
    this.persons$.next(this.persons);
  }

  add(person: Person) {
    this.persons.push(person);
  }

  edit(person: Person) {
    let modPerson: any;
    modPerson = this.persons.find(
      (p) => p.nameOfCategory == person.nameOfCategory
    );
    modPerson.firstName = person.dateCreated;
    modPerson.age = person.status;
    modPerson.job = person.action;
    this.persons$.next(this.persons);
  }

  remove(nameOfCategory: string) {
    this.persons = this.persons.filter((p) => {
      return p.nameOfCategory != nameOfCategory;
    });

    this.persons$.next(this.persons);
  }
}
