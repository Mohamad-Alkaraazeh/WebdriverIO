// describe("My first recording", () => {
//   it("tests My first recording", async () => {
//     await browser.setWindowSize(896, 776)
//     await browser.url("https://the-internet.herokuapp.com/login")
//     await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
//     await browser.$("#username").click()
//     await browser.performActions([{
//       type: 'key',
//       id: 'keyboard',
//       actions: [{ type: 'keyDown', value: '' }]
//     }])
//     await browser.performActions([{
//       type: 'key',
//       id: 'keyboard',
//       actions: [{ type: 'keyUp', value: '' }]
//     }])
//     await browser.$("#username").setValue("tomsmith")
//     await browser.$("#password").click()
//     await browser.performActions([{
//       type: 'key',
//       id: 'keyboard',
//       actions: [{ type: 'keyDown', value: '' }]
//     }])
//     await browser.performActions([{
//       type: 'key',
//       id: 'keyboard',
//       actions: [{ type: 'keyUp', value: '' }]
//     }])
//     await browser.$("#password").setValue("SuperSecretPassword!")
//     await browser.$("//*[@id=\"login\"]/button/i").click()
//     await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
//     await browser.$("pierce/#content a").click()
//     await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
//   });
// });
