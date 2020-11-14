import { registerUrl } from "../config";
import Generator from '../Generator';

export default class RegisterPage {
  //@ts-ignore
  private page;
  private generatorEmail;
  //@ts-ignore
    constructor(page) {
      this.page = page
      this.generatorEmail = new Generator();
    }
  
    async navigateToRegister() {
        await this.page.goto(registerUrl);
        await this.page.waitForTimeout(3000)
      }

    async typeEmail() {
      await this.page.waitForXPath("//form/div/input[1]");
      const emailInput = await this.page.$x("//form/div/input[1]");
      const newEmail:number = await this.generatorEmail.generatorEmail();
      await emailInput[0].type(`test${newEmail}@test.pl`);
    }

    async typeFirstName() {
      await this.page.waitForXPath("//form/div/input[2]");
      const nameInput = await this.page.$x("//form/div/input[2]");
      await nameInput[0].type("Rafał");
    }

    async typeLastName() {
      await this.page.waitForXPath("//form/div/input[3]");
      const lastInput = await this.page.$x("//form/div/input[3]");
      await lastInput[0].type("Podraza");
    }

    async typePassword() {
      await this.page.waitForXPath("//form/div/input[4]");
      const passwordInput = await this.page.$x("//form/div/input[4]");
      await passwordInput[0].type("kotek123@");
    }

    async submitBtn() {
      await this.page.waitForXPath("//button[contains(text(),'Sign Up')]");
      const btn = await this.page.$x("//button[contains(text(),'Sign Up')]");
      await btn[0].click();
      await this.page.waitForTimeout(3500)
    }

    async logoutBtnIsVisible() {
      await this.page.waitForXPath("//button[contains(text(),'Wyloguj')]");
      const btn:any = await this.page.$x("//button[contains(text(),'Wyloguj')]");
      return btn;
    }
    
  }



