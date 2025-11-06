import { $, $$, browser, expect } from '@wdio/globals';


describe("Demo Tests,", function () {

  it("My first test", async() => {
    browser.url('https://google.com')

    await $('[name="q"]').setValue('WebdriverIO')
  
    // browser.keys('Enter')
    // this is new commit
    // browser.pause(20000)

  });
});
