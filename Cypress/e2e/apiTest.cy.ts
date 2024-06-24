/// <reference types="cypress" />

import bookStore from "../endpointObjects/bookStore";
import apiData from "../fixtures/apiData.json"

describe("API Tests",()=>{
    
    //validate books list from api response.

    it("validate books list",()=>{
        bookStore.getBookList().then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.books).to.have.length.greaterThan(0);
        });
    });

    //validate search book api response by status code, isbn(id) and book title. Test script use parametrization

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