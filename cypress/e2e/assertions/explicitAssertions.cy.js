/// <reference types="cypress"/>
it('EXplicit assertions', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    // expect('text').to.eq('text')

    // expect(cy.get('.assertion-table tr').eq(3)).to.have.class('succes') //not working

    cy.get('.assertion-table tr').eq(3).then(element => {
        // cy.wrap(element).click();     //повертає обгортку елемента для джейквері
    
    expect(element).to.have.class('success');
    expect(element).to.have.attr('class');

    expect(element.attr('class')).to.eq('success');
    expect(element.attr('class')).to.eql('success'); //строго   
    expect(element.attr('class')).to.eqls('success'); //строго
    expect(element.attr('class')).to.equal('success');    
    expect(element.attr('class')).to.equals('success');    
})

//     const obj = {
//         key: 'Dima',
//         keyObj: {
//             key2: '1'
//         }
//     }
    
//     const obj2 = {
//     key: 'Dima',
//     keyObj: {
//         key2: '1'
//     }
// }

// expect(obj).to.eql(obj2)
// expect(obj).to.eqls(obj2)

// expect(obj).to.eq(obj2)
// expect(obj).to.equal(obj2)
// expect(obj).to.equals(obj2)

cy.get('.assertion-table tr td').eq(3).then(tableCell => {
  expect(tableCell).to.have.text('Column content');
  expect(tableCell).to.contain('Column content');
  expect(tableCell).to.contain(' content'); // пошук по частині тексту
  expect(tableCell).to.have.html('Column content');

  expect(tableCell.text()).to.include('Column content');
  expect(tableCell.text()).to.include(' content');

  expect(tableCell.text()).to.not.contain('qweqwe');

})

cy.get('.assertion-table tr td').eq(3).then( tableCell => {
    expect(tableCell).to.have.text('Column content');
    expect(tableCell).to.contain('Column content');
    expect(tableCell).to.contain(' content'); // пошук по частині тексту
    expect(tableCell).to.have.html('Column content');
    
    expect(tableCell.text()).to.include('Column content');
    expect(tableCell.text()).to.include(' content'); // пошук по частині тексту

    expect(tableCell).to.not.contain('qweqweqwe qweqew');
  })


  cy.get('.assertion-table tr th').eq(5).then( tableCell => {
    expect(tableCell).to.contain('3');
    expect(parseFloat(tableCell.text())).to.be.greaterThan(2);
  })


  cy.visit('http://localhost:8080/commands/querying');

  cy.get('#inputName').type('qweqwe').then( inputField => {
    expect(inputField).to.have.value('qweqwe');
  })

  cy.visit('http://localhost:8080/commands/traversal');
  cy.get('.traversal-disabled .btn').eq(0).then( disabledButton => {
    expect(disabledButton).to.be.disabled;
    expect(disabledButton).to.exist;
  })

})




