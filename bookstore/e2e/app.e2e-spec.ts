import { AppPage } from './app.po';

describe('bookstore App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });
  it('should display a title', () => {
    expect(page.getTitleText())
      .toEqual('Bookstore');
  });
  it('should display a books list', () => {
    expect(page.getCatalogRowsCount())
      .toBeGreaterThan(10);
    const author = page.getTextOnFirstCatalogRow('.catalog-author');
    expect(author).toContain('Alain');
  });

  it('should buy a book', () => {
    page.clickOnFirstCatalogRow('app-buy-button button');
    // page.clickOnFirstCatalogRow('.catalog-buy-button button');
    expect(page.getCartRowsCount()).toEqual(1);
    const author = page.getTextOnFirstCartRow('.cart-author');
    expect(author).toContain('Alain');
    const quantity = page.getQuantityOnFirstCartRow();
    expect(quantity).toEqual(1);
    const amount1 = page.getTextOnFirstCartRow('.cart-amount');
    expect(amount1).toEqual('10,90 €');
    page.setQuantityOnFirstCartRow(10);
    const amount10 = page.getTextOnFirstCartRow('.cart-amount');
    expect(amount10).toEqual('109,00 €');
  });

});
