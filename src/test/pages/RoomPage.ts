import { registerUrl } from "../config";
import Generator from '../Generator';

export default class RoomPage {
  //@ts-ignore
  private page;
  private generatorEmail;
  //@ts-ignore
    constructor(page) {
      this.page = page
      this.generatorEmail = new Generator();
    }
  

    async clickonAddRoomBtn() {
      await this.page.waitForXPath("//button[contains(text(),'Dodaj Pokój')]");
      const btn = await this.page.$x("//button[contains(text(),'Dodaj Pokój')]");
      await btn[0].click();
      await this.page.waitForTimeout(1700);
    }

    async typeNameRoom() {
        await this.page.waitForXPath("//form/input[1]");
        const input = await this.page.$x("//form/input[1]");
        const surFix:number = await this.generatorEmail.generatorEmail();
        await input[0].type(`Room${surFix}`);
        await this.page.waitForTimeout(400);
    }

    async clickOnAddBtnInModal() {
        await this.page.waitForXPath("//form/button");
        const btn = await this.page.$x("//form/button")
        await btn[0].click();
    }

  }



