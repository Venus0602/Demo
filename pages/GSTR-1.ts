import {type Page, type Locator } from '@playwright/test'



export default class GSTR

{
    //readonly page: Page;
 
constructor(public page: Page) {
        this.page = page;
    }

        async menuButton()
        {
            await this.page.locator('button').filter({ hasText: 'menu' }).click();
}

async returnButton()
        {
            await this.page.locator('span').filter({ hasText: 'Returnskeyboard_arrow_right' }).locator('i').nth(1).click();
}




async GSTRoption()
        {
            await this.page.locator('a').filter({ hasText: /^GSTR-1$/ }).click();
        }}