/// <reference types="cypress" />

export default class commonUI {

    //locators
    elements = {
        topNavBtn : (txt: string)=> cy.get("#myTopnav").children("a").contains(txt)
    }

    clickTopNavBtn(txt : string){
        this.elements.topNavBtn(txt).click();
    }
}