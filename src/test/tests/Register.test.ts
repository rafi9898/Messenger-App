import { expect } from 'chai'
import { step } from 'mocha-steps'

import Page from '../builder'
import RegisterPage from '../pages/RegisterPage';
import RoomPage from '../pages/RoomPage';
import { dashboardUrl } from '../config';

describe('Register Page Automation Test', () => {
  let page:any;
  let registerPage:RegisterPage
  let roomPage:RoomPage;

  before(async () => {
    page = await Page.build('Desktop')
    registerPage =  new RegisterPage(page)
    roomPage = new RoomPage(page);
  })

  after(async () => {
    await page.close()
  })

  step('Should type correct value in fields and register', async () => {
    await registerPage.navigateToRegister();
    await registerPage.typeEmail();
    await registerPage.typeFirstName();
    await registerPage.typeLastName();
    await registerPage.typePassword();
  })

  step("Should click on sign up button and verify success register procced", async () => {
    await registerPage.submitBtn();
  })

  step("Verify dashboard page after register", async () => {
    expect(page.url()).to.be.equal(dashboardUrl);
    await registerPage.logoutBtnIsVisible();
  })

  step("Should add new room", async () => {
    await roomPage.clickonAddRoomBtn();
    await roomPage.typeNameRoom();
    await roomPage.clickOnAddBtnInModal();
  })


})
