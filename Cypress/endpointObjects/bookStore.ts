import { method } from "cypress/types/bluebird";

class bookStore{

    endPoints = {

        getBooks: {
            method: "GET",
            url: "https://demoqa.com/BookStore/v1/Books"
        },
        getBooksByISBN: {
            method: "GET",
            url: (isbn : string)=> `https://demoqa.com/BookStore/v1/Book?ISBN=${isbn}`
        }
    };

    getBookList(){
        return cy.request({
            method: this.endPoints.getBooks.method,
            url: this.endPoints.getBooks.url
        });
    }

    getBookByISBN(isbn : string){
        return cy.request({
            method: this.endPoints.getBooksByISBN.method,
            url: this.endPoints.getBooksByISBN.url(isbn)
        });
    }
}

export default new bookStore();