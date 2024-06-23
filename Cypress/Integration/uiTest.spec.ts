/// <reference types="cypress" />
import latitudAndLongitudePage from "../pageObjects/latitudAndLongitudePage";
import data from "../fixtures/data.json";

describe("UI PoC test" , ()=>{

    beforeEach(()=>{
        cy.visit("/")
    })

    it("search location",()=>{
        latitudAndLongitudePage.typeLocationInput(data.searchData.place);
        latitudAndLongitudePage.clickFindBtn()
        latitudAndLongitudePage.getlatLongText().then((text)=>{
            expect(text).to.contain(data.searchData.latlong)
        })
    })
})