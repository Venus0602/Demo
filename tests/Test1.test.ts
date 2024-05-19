import {test} from "@playwright/test";
import LoginPage from "../pages/loginPage";
import * as data from "../base/login-test-data.json";

test("Login test -positive", async ({page}) => {


    const login =new LoginPage(page);
        await login.goToLoginUrl();
       // await page.waitForTimeout(5000);
        await login.login_fnc("data.username","data.password");
        
        //await page.waitForTimeout(2000);
        //await login.logout_fnc();
    
})
