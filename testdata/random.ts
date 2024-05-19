import { faker } from "@faker-js/faker";
import { EmployeeDetails } from "./orangehrminterfaces";

export function getRandomEmployeeDetails(): EmployeeDetails
{
 return {

    firstName :faker.person.firstName(), 
    middleName : faker.person.middleName(),
     lastName :faker.person.lastName(),
    employeeID: faker.number.int({ min: 100, max: 500000}).toString(),

}

}