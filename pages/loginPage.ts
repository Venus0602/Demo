import { expect, type Locator, type Page } from '@playwright/test';
import * as data from "../base/login-test-data.json";
export default class LoginPage
{
readonly page: Page;
readonly username_textbox: Locator;
readonly password_textbox: Locator;
readonly login_btn: Locator;
readonly logout_btn: Locator;


    constructor(page:Page)
    

{
    this.page = page;
    this.username_textbox=page.getByPlaceholder('Username');
    this.password_textbox=page.getByPlaceholder('Password');
    this.login_btn=page.getByRole('button', { name: 'Login' });
    this.logout_btn=page.locator("//a[normalize-space()='Logout']");

}


async goToLoginUrl()
{
await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

}


async login_fnc(username:string, password:string)
{
await this.username_textbox.fill(data.username);
await this.password_textbox.fill(data.password);
await this.login_btn.click();


}

async logout_fnc()
{
await this.logout_btn.click();

}}


 

    