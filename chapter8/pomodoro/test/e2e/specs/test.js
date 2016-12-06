module.exports = {
  'default e2e tests': (browser) => {
    //open the browser and check that #app is on the page
    browser.url('http://localhost:8080')
      .waitForElementVisible('#app', 5000);
    //check that toggle-volume icon is not visible
    browser.expect.element('.toggle-volume')
      .to.not.be.visible
    //check that pause button is disabled
    browser.expect.element('[title=pause]')
      .to.have.attribute('disabled')
    //check that stop button is disabled
    browser.expect.element('[title=stop]')
      .to.have.attribute('disabled')
    //check that start button is not disabled
    browser.expect.element('[title=start]')
      .to.not.have.attribute('disabled')
    //click on start button, check that toggle volume button is visible
    browser.click('[title=start]')
      .waitForElementVisible('.toggle-volume', 5000)
    //check that pause button is not disabled
    browser.expect.element('[title=pause]')
      .to.not.have.attribute('disabled')
    //check that stop button is not disabled
    browser.expect.element('[title=stop]')
      .to.not.have.attribute('disabled')
    //check that stop button is disabled
    browser.expect.element('[title=start]')
      .to.have.attribute('disabled')
    browser.end()
  },
  'wait for kitten test': (browser) => {
    browser.url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
    // initially the kitten element is not visible
    browser.expect.element('.well.kittens')
      .to.not.be.visible
    // click on the start button and wait for 7s for kitten element to appear
    browser.click('[title=start]')
      .waitForElementVisible('.well.kittens', 7000)
    // check that the image contains the src element that matches thecatapi string
    browser.expect.element('.well.kittens img')
      .to.have.attribute('src')
      .which.matches(/thecatapi/);
    browser.end()
  }
}
