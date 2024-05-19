import { expect  }from "@playwright/test";

import {test} from "../base/pomfixtures.ts";
import * as data from "../base/login-test-data.json";
import { getRandomEmployeeDetails } from "../testdata/random.js";


import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import AddEmployeeDetailsPage from "../pages/addEmployePage";// ADDED FIXTURES
//import { Env } from "../frameworkconfig/env.ts";


test("login  test_01", async ({page, loginPage}) =>
    {
//const login =new LoginPage(page);   fixtures got created
        await loginPage.goToLoginUrl();
        //await page.waitForTimeout(5000);
        await loginPage.login_fnc("data.username","data.password");
        
    });


        test("click on Pim link test_02", async ({page,homePage,loginPage}) => 
            {
             //const homepage =new HomePage(page);  fixtures got created
             await loginPage.goToLoginUrl();
             //await page.waitForTimeout(5000);
             await loginPage.login_fnc("data.username","data.password");
            await homePage.Pimlink_fnc();
        await homePage.addbtn_fnc();
        //await page.waitForTimeout(2000);
        //await login.logout_fnc();
        });


        test.only("Add employee details test_03", async ({page, loginPage,homePage,addEmployeespage}) => 
            {
                await loginPage.goToLoginUrl();
             //await page.waitForTimeout(5000);
             await loginPage.login_fnc("data.username","data.password");
            await homePage.Pimlink_fnc();
        await homePage.addbtn_fnc();
           //const addEmployeespage =new AddEmployeeDetailsPage(page);   fixtures got created
        await addEmployeespage.AddEmployeeDetails(getRandomEmployeeDetails());
        await addEmployeespage.savebtn_fnc();
        await page.waitForTimeout(2000);
        })
