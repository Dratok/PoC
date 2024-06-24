/// <reference types="cypress" />

import commonUI from "./commonUI";

class placesPage extends commonUI{

    //Elements and methods to be used on Places page

    //Locators
    elements = {
        ...this.elements,
        placeName : (txt : string)=> cy.get("a").contains(txt),
        placeTitle : (txt : string)=> cy.get("h1").contains(txt)
    }

    //click on selected button on the places list
    clickPlaceNamebtn(txt : string){
        this.elements.placeName(txt).click();
    }
    // return locators elements list in order to be validated as needed
    getElements() {
        return this.elements;
    }
    
}

export default new placesPage();