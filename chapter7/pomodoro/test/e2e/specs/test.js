module.exports = {
  'default e2e tests': (browser) => {
    browser.url('http://localhost:8080').waitForElementVisible('#app', 5000)
    browser.expect.element('.toggle-volume').to.not.be.visible
    browser.expect.element('[title=pause]').to.have.attribute('disabled')
    browser.expect.element('[title=stop]').to.have.attribute('disabled')
    browser.expect.element('[title=start]').to.not.have.attribute('disabled')
    browser.click('[title=start]').waitForElementVisible('.toggle-volume', 5000)
    browser.expect.element('[title=pause]').to.not.have.attribute('disabled')
    browser.expect.element('[title=stop]').to.not.have.attribute('disabled')
    browser.expect.element('[title=start]').to.have.attribute('disabled')
    browser.end()
  },
  'wait for kitten test': (browser) => {
    browser.url('http://localhost:8080').waitForElementVisible('#app', 5000)
    browser.expect.element('.well.expand-transition').to.not.be.visible
    browser.click('[title=start]').waitForElementVisible('.well.expand-transition', 7000)
    browser.expect.element('.well.expand-transition img').to.have.attribute('src')
      .which.matches(/thecatapi/);
    browser.end()
  }
}
