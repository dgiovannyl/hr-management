import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class BackendService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const colors = [
      { id: 1, name: 'black' },
      { id: 2, name: 'blue' },
      { id: 3, name: 'green' },
      { id: 4, name: 'pink' },
      { id: 5, name: 'red' },
      { id: 6, name: 'white' },
      { id: 7, name: 'yellow' }
    ];
    const employees = [
      {
        id: 1,
        name: 'Leonardo Perez',
        company: 'Company 1',
        age: 33,
        birthday: new Date('October 13, 1979 23:13:00'),
        projectId: 1
      },
      {
        id: 2,
        name: 'Jonathan Domínguez',
        company: 'Company 1',
        age: 30,
        birthday: new Date('December 1, 1994 11:13:00'),
        projectId: 1
      },
      {
        id: 3,
        name: 'Sebastian Valencia',
        company: 'Company 3',
        age: 27,
        birthday: new Date('July 25, 1996 22:13:00'),
        projectId: 3
      },
      {
        id: 4,
        name: 'Diego Rios',
        company: 'Company 2',
        age: 30,
        birthday: new Date('December 5, 1994 10:13:00'),
        projectId: 5
      },
      {
        id: 5,
        name: 'Fabian Buitrago',
        company: 'Company 2',
        age: 30,
        birthday: new Date('March 14, 1930 15:13:00'),
        projectId: 6
      }
    ];

    const projects = [
      { id: 1, name: 'Project 1', teamSize: 2, customerName: 'TCC' },
      { id: 2, name: 'Project 2', teamSize: 0, customerName: 'MSI' },
      { id: 3, name: 'Project 3', teamSize: 1, customerName: 'Brainshark' },
      { id: 4, name: 'Project 4', teamSize: 0, customerName: 'IMS' },
      { id: 5, name: 'Project 5', teamSize: 1, customerName: 'Apex' },
      { id: 6, name: 'Project 6', teamSize: 1, customerName: 'Apex' }
    ];

    return { colors, employees, projects };
  }
}
