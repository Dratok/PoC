/// <reference types="cypress" />

import bookStore from "../endpointObjects/bookStore";
import apiData from "../fixtures/apiData.json"

describe("API Tests",()=>{
    
    it("validate books list",()=>{
        bookStore.getBookList().then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.books).to.have.length.greaterThan(0);
        });
    });

    Cypress._.each(apiData.bookISBNandTitle,(data)=>{
        it("search book by ISBN",()=>{
            bookStore.getBookByISBN(data.isbn).then((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body.isbn).to.eq(data.isbn);
                expect(response.body.title).to.eq(data.title);
            });
        });
    });

})