import { test as baseTest} from '@playwright/test';
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import AddEmployeeDetailsPage from "../pages/addEmployePage";



type pages={
loginPage:LoginPage;
homePage:HomePage;
addEmployeespage:AddEmployeeDetailsPage;
}


const testPages=baseTest.extend<pages>
({


loginPage: async ({ page },use) => {

  await use(new LoginPage(page));
},
homePage: async ({ page },use) => {

  await use(new HomePage(page));
},

addEmployeespage: async ({ page },use) => {

  await use(new AddEmployeeDetailsPage(page));
},


})

export const test=testPages;






