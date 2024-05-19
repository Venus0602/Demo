import { expect, type Locator, type Page } from '@playwright/test';
import * as data from "../base/login-test-data.json";

export default class HomePage
{
readonly page: Page;
readonly pim_link: Locator;
readonly add_btn: Locator;



constructor(page:Page)
    

{
    this.page = page;
    this.pim_link=page.getByRole('link', { name: 'PIM' });
    this.add_btn=page.getByRole('button', { name: ' Add' });
    

}


async Pimlink_fnc() {
    await this.pim_link.click();
}

async addbtn_fnc()
{
    await this.add_btn.click();
    
}
}


