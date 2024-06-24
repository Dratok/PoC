/// <reference types="cypress" />

class latitudAndLongitudePage{

    //Elements and methods to be used on latitud and longitude page

    //Locators
    elements = {
        latitudAndLogitudeFinderTitle: ()=> cy.get("h1").contains("Latitude and Longitude Finder"),
        placeNameInputField: ()=> cy.get("#place"),
        findButton:()=> cy.get("#btnfind"),
        latLong: ()=> cy.get("#latlngspan")

    }

    //type string on place name input field
    typeLocationInput(location : string){
        this.elements.placeNameInputField().type(location);
    }
    //click on find button in latitud and longitude page
    clickFindBtn(){
        this.elements.findButton().click();
    }
    //return text of latlong text field to be validated
    getlatLongText(){
        return this.elements.latLong().invoke("text");
    }
}

export default new latitudAndLongitudePage();