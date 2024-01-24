class CheckoutCartPage{
  elements = {
    alertProductsMarkedMessage: () => cy.get('#checkout-cart > div.alert.alert-danger.alert-dismissible'),
    itemsQuantity: () => cy.get(':nth-child(4) > .input-group > .form-control'),
    unitPrice: () => cy.get('.table-responsive > .table > tbody > tr > :nth-child(5)'),
    total: () => cy.get('tbody > tr > :nth-child(6)')

  }


}

export default new CheckoutCartPage();

