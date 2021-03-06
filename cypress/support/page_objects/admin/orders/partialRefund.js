
export class PartialRefundPageFunctions {

    enterPartialRefundDetails() {
        //cy.get('#Message').type("Automation Test: Cancel OrderNumber")  //Will replace 'OrderNumber' with a variable
        //cy.get('#Message').type("Automation Test: Cancel"+ OrderNumber)  //Will replace 'OrderNumber' with a variable
        cy.get("#refundOrigin").select(['Buyer Initiated']).should('have.value', '2')
        cy.get("#refundReason").select('Product - Inventory Issue').should('have.value', 'Product - Inventory Issue')
        cy.get('#inventoryChanges').select('Adjust Inventory').should('have.value', 'True')
        //cy.get('#RefundProducts_0__AddToInventoryQuantity').type('1') //replace with a variable
        cy.get('[data-val-numericcompare-otherproperty="MaxRefundAmt"]').type('.01') //replace with a variable
        //cy.get('#ShippingRefundAmt').type('.01') //replace with a variable
        
    }

    clickPartialRefundButton() {
        cy.get('[value="Give Refund"]').click()
    }

}

export const PartialRefundPage = new PartialRefundPageFunctions ()



export class VerifyPartialRefundItems {

    verifyPartialRefundNote() {
        cy.get('.nNote-container').then(($systemNote) => {
        const systemNote = $systemNote.text()
        expect(systemNote).to.contain('Partial Refund Processed.')
      })
    }

    verifyPartialRefundButton() {
        cy.get('.widget-content .mUser').eq(1).then(($button) => {     //will be the 2nd button for the seller view
        const button = $button.text().trim()
        expect(button).to.contain('Partial Refund')
        })
    }

}

export const VerifyPartialRefund = new VerifyPartialRefundItems ()