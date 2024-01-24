class SearchResultPage {
  elements = {
    title: () => cy.get('div#content > h1'),
    iphoneItemName: () => cy.get('div.caption>h4>a'),
  };

  clickOnIphoneItemName() {
    this.elements.iphoneItemName().click();
  }
}

export default new SearchResultPage();
