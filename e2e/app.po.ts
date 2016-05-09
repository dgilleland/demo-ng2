export class DemoNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('demo-ng2-app h1')).getText();
  }
}
