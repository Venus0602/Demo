
import { expect, type Locator, type Page } from '@playwright/test';
import LoginPage from './loginPage';
import HomePage from './homePage';
import { text } from 'stream/consumers';
import { EmployeeDetails } from '../testdata/orangehrminterfaces';
export default class AddEmployeeDetailsPage

{

readonly firstname_textbox: Locator;
readonly middlename_textbox: Locator;
readonly lastname_textbox: Locator;
readonly empid_textbox: Locator;
readonly save_btn: Locator;
readonly success_message:Locator;


constructor(page:Page)
    

{

this.firstname_textbox=page.getByPlaceholder('First Name');
    this.middlename_textbox=page.getByPlaceholder('Middle Name');
    this.lastname_textbox=page.getByPlaceholder('Last Name');
    this.empid_textbox=page.locator('form').getByRole('textbox').nth(4);
    this.save_btn=page.locator("xpath=//button[@type='submit']");
    this.success_message=page.getByText("text=/Successfully Saved/i")
  }
  


async AddEmployeeDetails(employeedetails:EmployeeDetails)

{
    await this.firstname_textbox.fill(employeedetails.firstName);
    await this.middlename_textbox.fill(employeedetails.middleName);
    await this.lastname_textbox.fill(employeedetails.lastName);
    await this.empid_textbox.fill(employeedetails.employeeID);





}
  async savebtn_fnc()
  {
await this.save_btn.click();

  }


}
