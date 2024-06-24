/// <reference types="cypress" />

export default class commonUI {

    //add layer of abstraccion for common ui components in order to reuse code

    //locators
    elements = {
        topNavBtn : (txt: string)=> cy.get("#myTopnav").children("a").contains(txt)
    }

    //click on selected topnav button 
    clickTopNavBtn(txt : string){
        this.elements.topNavBtn(txt).click();
    }
}