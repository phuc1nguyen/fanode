import { faker } from '@faker-js/faker';
import jobTitles from '../src/constants/jobTitles.js';
import offices from '../src/constants/offices.js';
import getRandomElement from '../src/utilities/randomElement.js';

export const employees = Array.from({ length: 5 }, function (element, index) {
  return {
    employeeNumber: index + 1,
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    extension: 'x123',
    email: faker.internet.email(),
    officeCode: getRandomElement(offices, 'officeCode'),
    reportsTo: 1,
    jobTitle: getRandomElement(jobTitles, 'jobTitle'),
  };
});

export const customers = Array.from({ length: 10 }, function () {
  return {
    customerNumber: faker.datatype.number(),
    customerName: faker.company.name(),
    contactLastName: faker.name.lastName(),
    contactFirstName: faker.name.firstName(),
    phone: faker.phone.number('+84 9## ### ###'),
    addressLine1: faker.address.streetAddress(),
    addressLine2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    postalCode: faker.address.zipCode(),
    country: 'Vietnam',
    salesRepEmployeeNumber: faker.datatype.number({ min: 1, max: 5 }), // link to random employee
    creditLimit: faker.datatype.number({ min: 2000, max: 10000 }),
  };
});

export const users = Array.from({ length: 5 }, function (element, index) {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password,
    employeeNumber: index + 1,
  };
});

export const singleEmployee = {
  employeeNumber: 6,
  lastName: faker.name.lastName(),
  firstName: faker.name.firstName(),
  extension: 'x123',
  email: faker.internet.email(),
  officeCode: getRandomElement(offices, 'officeCode'),
  reportsTo: 1,
  jobTitle: getRandomElement(jobTitles, 'jobTitle'),
};

export const singleCustomer = {
  customerNumber: faker.datatype.number(),
  customerName: faker.company.name(),
  contactLastName: faker.name.lastName(),
  contactFirstName: faker.name.firstName(),
  phone: faker.phone.number('+84 9## ### ###'),
  addressLine1: faker.address.streetAddress(),
  addressLine2: faker.address.secondaryAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  postalCode: faker.address.zipCode(),
  country: 'Vietnam',
  salesRepEmployeeNumber: faker.datatype.number({ min: 1, max: 6 }),
  creditLimit: faker.datatype.number({ min: 2000, max: 10000 }),
};
