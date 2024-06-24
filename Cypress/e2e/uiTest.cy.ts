/// <reference types="cypress" />
import latitudAndLongitudePage from "../pageObjects/latitudAndLongitudePage";
import placesPage from "../pageObjects/placesPage";
import data from "../fixtures/data.json";

describe("UI PoC test" , ()=>{

    beforeEach(()=>{
        cy.clearAllCookies()
        cy.navigate()
    });

    //seach location with spacific place

    it("search location",()=>{
        latitudAndLongitudePage.typeLocationInput(data.searchData.place);
        latitudAndLongitudePage.clickFindBtn();
        latitudAndLongitudePage.getlatLongText().then((text)=>{
            expect(text).to.contain(data.searchData.latlong)
        });
    });

    //search a place and validate correct information about place

    it("search a place",()=>{
        placesPage.clickTopNavBtn("Places");
        placesPage.clickPlaceNamebtn(data.placeData.placeName);

        placesPage.getElements().placeTitle(data.placeData.placeName).should("be.visible");

    });
})