import {browser, By, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(By.css('app-root h1'))
      .getText();
  }

  getCatalogRows() {
    return element.all(By.css('.catalog-row'));
  }
  getCatalogRowsCount() {
    return this.getCatalogRows().count();
  }
  getOnFirstCatalogRow(cssSelector: string) {
    return this.getCatalogRows()
      .first()
      .element(By.css(cssSelector));
  }
  getTextOnFirstCatalogRow(cssSelector: string) {
    return this.getOnFirstCatalogRow(cssSelector)
      .getText();
  }
  clickOnFirstCatalogRow(cssSelector: string) {
    return this.getOnFirstCatalogRow(cssSelector)
      .click();
  }

  getCartRows() {
    return element.all(By.css('.cart-row'));
  }
  getCartRowsCount() {
    return this.getCartRows().count();
  }
  getOnFirstCartRow(cssSelector: string) {
    return this.getCartRows()
      .first()
      .element(By.css(cssSelector));
  }
  getTextOnFirstCartRow(cssSelector: string) {
    return this.getOnFirstCartRow(cssSelector)
      .getText();
  }
  getQuantityOnFirstCartRow() {
    return this.getOnFirstCartRow('.cart-quantity input')
      .getAttribute('value')
      .then(textValue => +textValue);
  }
  setQuantityOnFirstCartRow(quantity: number) {
    const input = this.getOnFirstCartRow('.cart-quantity input');
    input.clear();
    input.sendKeys(quantity);
  }
  clickOnFirstCartRow(cssSelector: string) {
    return this.getOnFirstCartRow(cssSelector)
      .click();
  }

}
