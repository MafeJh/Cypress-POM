class HomePage {
  elements = {
    searchInput: () => cy.get('#search'),
    searchBtn: () => cy.get('button[type="button"] > i.fa-search')
  }

  typeItemForSearch(item) {
    this.elements.searchInput().type(item)
  }

  clickSearch(){
    this.elements.searchBtn().click()
  }
}

export default new HomePage();
