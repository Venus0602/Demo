import {test} from "@playwright/test";
import * as data from "../base/login-test-data.json";


import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";

test("Click pim link", async ({page}) => {





    const login =new LoginPage(page);
        await login.goToLoginUrl();
        //await page.waitForTimeout(5000);
        await login.login_fnc("data.username","data.password");
        
    const homepage =new HomePage(page);
        await homepage.Pimlink_fnc();
        await homepage.addbtn_fnc();
        //await page.waitForTimeout(2000);
        //await login.logout_fnc();
    
})
