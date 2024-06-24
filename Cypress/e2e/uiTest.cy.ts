/// <reference types="cypress" />
import latitudAndLongitudePage from "../pageObjects/latitudAndLongitudePage";
import placesPage from "../pageObjects/placesPage";
import data from "../fixtures/data.json";

describe("UI PoC test" , ()=>{

    beforeEach(()=>{
        cy.clearAllCookies()
        cy.navigate()
    });

    it("search location",()=>{
        latitudAndLongitudePage.typeLocationInput(data.searchData.place);
        latitudAndLongitudePage.clickFindBtn()
        latitudAndLongitudePage.getlatLongText().then((text)=>{
            expect(text).to.contain(data.searchData.latlong)
        });
    });

    it("search a place",()=>{
        placesPage.clickTopNavBtn("Places");
        placesPage.clickPlaceNamebtn("Celtic Park, Glasgow");

        placesPage.getElements().placeTitle("Celtic Park, Glasgow").should("be.visible");

    });
})