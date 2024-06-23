/// <reference types="cypress" />

class latitudAndLongitudePage{

    //Locators
    elements = {
        latitudAndLogitudeFinderTitle: ()=> cy.get("h1").contains("Latitude and Longitude Finder"),
        placeNameInputField: ()=> cy.get("#place"),
        findButton:()=> cy.get("#btnfind"),
        latLong: ()=> cy.get("#latlngspan")

    }

    typeLocationInput(location : string){
        this.elements.placeNameInputField().type(location);
    }
    clickFindBtn(){
        this.elements.findButton().click();
    }
    getlatLongText(){
        return this.elements.latLong().invoke("text");
    }
}

export default new latitudAndLongitudePage();