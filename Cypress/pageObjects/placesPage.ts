/// <reference types="cypress" />

import commonUI from "./commonUI";

class placesPage extends commonUI{

    elements = {
        ...this.elements,
        placeName : (txt : string)=> cy.get("a").contains(txt),
        placeTitle : (txt : string)=> cy.get("h1").contains(txt)
    }

    clickPlaceNamebtn(txt : string){
        this.elements.placeName(txt).click();
    }

    validatePlaceTitletxt(txt : string){
        this.elements.placeTitle(txt).should("be.visible");
    }

    getElements() {
        return this.elements;
    }
    
}

export default new placesPage();