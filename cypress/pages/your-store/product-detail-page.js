class ProductDetailPage {
  elements = {
    productName: () => cy.get('div#content h1'),
    productPrice: () => cy.get('div#content li>h2'),
    productQuantity: () => cy.get('#input-quantity'), 
    addToCartBtn: () => cy.get('button#button-cart'),
    alertMessage: () => cy.get('.alert'),
    cartBtn: () => cy.get('.btn-inverse'),
    goToCartList: () => cy.get('[href="http://opencart.abstracta.us:80/index.php?route=checkout/cart"] > strong')

  };

  typeQuantity(quantity){
      this.elements.productQuantity().clear()
      this.elements.productQuantity().type(quantity)
  }

  clickAddToCartBtn(){
    this.elements.addToCartBtn().click()
  }

  clickCartBtn(){
    this.elements.cartBtn().click()
  }

  clickGoToCartList(){
    this.elements.goToCartList().click()
  }
}



export default new ProductDetailPage();

