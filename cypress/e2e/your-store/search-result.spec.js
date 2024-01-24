/// <reference types="Cypress" />

import HomePage from '../../pages/your-store/home-page';
import ProductDetailPage from '../../pages/your-store/product-detail-page';
import SearchResultPage from '../../pages/your-store/search-result-page';
import CheckoutCartPage from '../../pages/your-store/checkout-cart-page';


describe('Search Result Page', () => {

  beforeEach(() => {
    cy.visit('http://opencart.abstracta.us/')
  });

  it(`should search for an "iphone" and add it to the cart`, () => {
    const searchItem = 'iphone';
    HomePage.typeItemForSearch(searchItem);
    HomePage.clickSearch();

    SearchResultPage.elements.title().should('have.text', `Search - ${searchItem}`);
    SearchResultPage.clickOnIphoneItemName();

    ProductDetailPage.elements.productName().should('have.text', 'iPhone')
    ProductDetailPage.elements.productPrice().should('have.text', '$123.20')
    ProductDetailPage.typeQuantity(2)
    ProductDetailPage.clickAddToCartBtn()
    //ProductDetailPage.elements.alertMessage().should('exist')
    
    //console.log( ProductDetailPage.elements.alertMessage())
    //cy.log( ProductDetailPage.elements.alertMessage())
    //cy.wait(5000)
    //ProductDetailPage.elements.alertMessage().should('have.text', 'Success: You have added iPhone to your shopping cart!×')
    ProductDetailPage.clickCartBtn()

    ProductDetailPage.clickGoToCartList()
    CheckoutCartPage.elements.alertProductsMarkedMessage().contains(' Products marked with *** are not available in the desired quantity or not in stock! ')
    //CheckoutCartPage.elements.itemsQuantity().should().contains('x 2')
    CheckoutCartPage.elements.unitPrice().should().contains('$123.20')
    CheckoutCartPage.elements.total().should().contains('$246.40')
  });
  
});