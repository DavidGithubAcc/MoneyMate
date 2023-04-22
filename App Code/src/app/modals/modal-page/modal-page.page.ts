import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Renderer2 } from '@angular/core';
import { stringify } from 'querystring';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ViewChild } from '@angular/core';
import { CorrectwrongpagePage } from 'src/app/correctwrongpage/correctwrongpage.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ModalPage implements OnInit {

  constructor(private navParams: NavParams,private renderer: Renderer2,private modalController: ModalController) { 

    
  }
 
  async openModal(suggestedfixed) {
    const modal = await this.modalController.create({
      component: CorrectwrongpagePage,
      breakpoints: [0, .5],
      initialBreakpoint: .5,
      componentProps: {
        mySuggested : suggestedfixed
      }
    });
    return await modal.present();
  }
 

  
  ngOnInit() {

    const myDataModal = this.navParams.get('myDataModal');
    console.log(myDataModal);


    //
    var iconnameof = ""

    if (myDataModal[4] == "Bus") {
      iconnameof = "bus-outline"
    }
    else if (myDataModal[4] == "Mortgage") {
      iconnameof = "home-outline"
    }
    else if (myDataModal[4] == "Train") {
      iconnameof = "train-outline"
    }
    else if (myDataModal[4] == "Entertainment") {
      iconnameof = "game-controller-outline"
    }
    else if (myDataModal[4] == "fast-food-outline") {
      iconnameof = "pizza-outline"
    }
    else if (myDataModal[4] == "Groceries") {
      iconnameof = "fish-outline"
    }
    else if (myDataModal[4] == "Charity") {
      iconnameof = "body-outline"
    }
    else if (myDataModal[4] == "Gifts") {
      iconnameof = "gift-outline"
    }
    else if (myDataModal[4] == "Income") {
      iconnameof = "cash-outline"
    }
    else if (myDataModal[4] == "Shopping") {
      iconnameof = "bag-handle-outline"
    }
    else if (myDataModal[4] == "Eating Out") {
      iconnameof = "fast-food-outline"
    }
    else if (myDataModal[4] == "Fuel") {
      iconnameof = "beaker-outline"
    }
    else if (myDataModal[4] == "Energy") {
      iconnameof = "bulb-outline"
    }
    else if (myDataModal[4] == "Water") {
      iconnameof = "water-outline"
    }
    else if (myDataModal[4] == "Rent") {
      iconnameof = "home-outline"
    }
    else if (myDataModal[4] == "Food") {
      iconnameof = "pizza-outline"
    }
    //

    const mySelect44432 = this.renderer.selectRootElement('#modalcontent');
    

    const icon6 = this.renderer.createElement('ion-title');
const textNode = this.renderer.createText(myDataModal[5]);
icon6.style.fontSize = "175%";
this.renderer.appendChild(icon6, textNode);
this.renderer.setAttribute(icon6, 'flex', '0 0 50%');




const icon5 = this.renderer.createElement('ion-icon');
    this.renderer.setAttribute(icon5, 'slot', 'start');
    this.renderer.setAttribute(icon5, 'name', iconnameof);
    this.renderer.setStyle(icon5, 'position', 'absolute');
    this.renderer.setStyle(icon5, 'left', '5%');
    this.renderer.setStyle(icon5, 'font-size', '24px');


    this.renderer.appendChild(mySelect44432, icon5);
    this.renderer.appendChild(mySelect44432, icon6);
    
    const title10 = this.renderer.createElement('ion-label');
    const textNode10 = this.renderer.createText(myDataModal[2]);
    this.renderer.appendChild(title10, textNode10);
    this.renderer.setStyle(title10, 'position', 'absolute');
this.renderer.setStyle(title10, 'right', '5%');
this.renderer.setStyle(title10, 'top', '35%');

this.renderer.appendChild(mySelect44432, title10);



  const innerContent = document.querySelector('#innercontent');
  const titlediv = this.renderer.createElement('ion-div');
  const title11 = this.renderer.createElement('ion-label');
  const textNode11 = this.renderer.createText(myDataModal[6]);
  this.renderer.appendChild(title11, textNode11);
  this.renderer.setStyle(title11, 'position', 'absolute');
  this.renderer.setStyle(title11, 'left', '45%');
this.renderer.setStyle(title11, 'top', '2%');
this.renderer.setStyle(title11, 'font-size', '150%');


  //this.renderer.appendChild(innerContent, title11);
  this.renderer.appendChild(titlediv, title11);
  this.renderer.appendChild(innerContent, titlediv);





  const list = this.renderer.createElement('ion-list');
const subcat = this.renderer.createElement('ion-item');
const cat = this.renderer.createElement('ion-item');

const catheader = this.renderer.createElement('ion-label');
this.renderer.setStyle(catheader, 'margin', '0px');
const catHeaderText = this.renderer.createText("Category");
this.renderer.appendChild(catheader, catHeaderText);

const catText = this.renderer.createElement('ion-title');
const catTextText = this.renderer.createText(myDataModal[3]);
this.renderer.appendChild(catText, catTextText);

this.renderer.setStyle(catheader, 'position', 'absolute');
this.renderer.setStyle(catheader, 'left', '0%');
this.renderer.setStyle(catheader, 'top', '2%');

this.renderer.setStyle(catText, 'position', 'absolute');
this.renderer.setStyle(catText, 'left', '0%');
this.renderer.setStyle(catText, 'top', '10%');
this.renderer.setStyle(catText, 'font-size', '150%');

//
const catheader1 = this.renderer.createElement('ion-label');
this.renderer.setStyle(catheader1, 'margin', '0px');
const catHeaderText1 = this.renderer.createText("SubCategory");
this.renderer.appendChild(catheader1, catHeaderText1);

const catText1 = this.renderer.createElement('ion-title');
const catTextText1 = this.renderer.createText(myDataModal[4]);
this.renderer.appendChild(catText1, catTextText1);

this.renderer.setStyle(catheader1, 'position', 'absolute');
this.renderer.setStyle(catheader1, 'left', '0%');
this.renderer.setStyle(catheader1, 'top', '2%');

this.renderer.setStyle(catText1, 'position', 'absolute');
this.renderer.setStyle(catText1, 'left', '0%');
this.renderer.setStyle(catText1, 'top', '10%');
this.renderer.setStyle(catText1, 'font-size', '150%');
//



this.renderer.appendChild(subcat, catheader1);
this.renderer.appendChild(subcat, catText1);

this.renderer.appendChild(cat, catheader);
this.renderer.appendChild(cat, catText);

this.renderer.appendChild(list, cat);
this.renderer.appendChild(list, subcat);

/////////////////////////////////

if (myDataModal[8] != "null" ) {

  const indexprice = this.renderer.createElement('ion-item');

const indexpriceheader = this.renderer.createElement('ion-label');
this.renderer.setStyle(indexpriceheader, 'margin', '0px');
const indexpricetext= this.renderer.createText("Index");
this.renderer.appendChild(indexpriceheader, indexpricetext);
const indexothertext = this.renderer.createElement('ion-title');
const indexothetextext = this.renderer.createText(myDataModal[8]);
this.renderer.appendChild(indexothertext, indexothetextext);
this.renderer.setStyle(indexpriceheader, 'position', 'absolute');
this.renderer.setStyle(indexpriceheader, 'left', '0%');
this.renderer.setStyle(indexpriceheader, 'top', '2%');
this.renderer.setStyle(indexothertext, 'position', 'absolute');
this.renderer.setStyle(indexothertext, 'left', '0%');
this.renderer.setStyle(indexothertext, 'top', '10%');
this.renderer.setStyle(indexothertext, 'font-size', '150%');
this.renderer.appendChild(indexprice, indexpriceheader);
this.renderer.appendChild(indexprice, indexothertext);
this.renderer.appendChild(list, indexprice);

/////////////////////////////////////////////////
///////////////////////////////////////////////

var iconnameofindex = ""
var percentchangeindex = 0
var colorofcaret = ""

if (myDataModal[8] == "Inflation") {
  iconnameofindex = "caret-down"
  percentchangeindex = 1.5
  colorofcaret = "red"
 
}
else if (myDataModal[8] == "Water") {
  iconnameofindex = "caret-up"
  percentchangeindex = 1.5
  colorofcaret = "green"
}
else if (myDataModal[8] == "Fuel") {
  iconnameofindex = "caret-up"
  percentchangeindex = 2.5
  colorofcaret = "green"
}
else if (myDataModal[8] == "Energy") {
  iconnameofindex = "caret-up"
  percentchangeindex = 1.75
  colorofcaret = "green"
}
else if (myDataModal[8] == "InterestRate") {
  iconnameofindex = "caret-up"
  percentchangeindex = 1.0
  colorofcaret = "green"
}
else  {
  iconnameofindex = ""
  percentchangeindex = 0
}

var icon3 = this.renderer.createElement('ion-icon');
icon3.slot = 'end'; 
    icon3.name = iconnameofindex; 
    icon3.style.color = colorofcaret;

    this.renderer.setStyle(icon3, 'position', 'absolute');
this.renderer.setStyle(icon3, 'right', '15%');
indexprice.appendChild(icon3);


  const indexpriceheadertotal = this.renderer.createElement('ion-label');
this.renderer.setStyle(indexpriceheadertotal, 'margin', '0px');
const indexpricetexttotaltext= this.renderer.createText((percentchangeindex).toString());
this.renderer.appendChild(indexpriceheadertotal, indexpricetexttotaltext);
this.renderer.setStyle(indexpriceheadertotal, 'position', 'absolute');
this.renderer.setStyle(indexpriceheadertotal, 'right', '7%');
//this.renderer.setStyle(indexpriceheadertotal, 'top', '2%');


this.renderer.appendChild(indexprice, indexpriceheadertotal);


////////////////////////////////////////////////
///////////////////////////////////////////////


}



////////////////////////////////////////////////







var iconnamefeed = ""
var suggestion = ""

if (myDataModal[7] == "want") {

  iconnamefeed = "warning-outline"
  if (myDataModal[9] != "null") {
    suggestion = myDataModal[9]

  }
  else {
    suggestion = "Flaged as nonessential purchase"
  }
  
}
else {
  iconnamefeed = "checkmark-circle-outline"
  suggestion = "Good Purchase Choice"
}
 
  const subcatwarningnew = this.renderer.createElement('ion-item');


  const catTextnew = this.renderer.createElement('ion-label');
  catTextnew.setAttribute("class", "ion-text-wrap");
  this.renderer.setStyle(catTextnew, 'font-size', '100%');
  this.renderer.setStyle(catTextnew, 'padding-left', '10%');
  this.renderer.setStyle(catTextnew, 'text-align', 'center');
  catTextnew.textContent = suggestion;
  this.renderer.appendChild(subcatwarningnew, catTextnew);

  //const catTextnew = this.renderer.createElement('ion-label');
  //const catTextTextnew = this.renderer.createText(suggestion);
  //this.renderer.appendChild(catTextnew, catTextTextnew);
  
  //this.renderer.setStyle(catTextnew, 'padding', '0 0 0' );
  //this.renderer.setStyle(catTextnew, 'position', 'absolute');
  //this.renderer.setStyle(catTextnew, 'left', '1%');
  //this.renderer.setStyle(catTextnew, 'top', '10%');
  //this.renderer.setStyle(catTextnew, 'font-size', '150%');

  const ifwarningicon = this.renderer.createElement('ion-icon');
    this.renderer.setAttribute(ifwarningicon, 'slot', 'start');
    this.renderer.setAttribute(ifwarningicon, 'name', iconnamefeed);
    this.renderer.setStyle(ifwarningicon, 'position', 'absolute');
    this.renderer.setStyle(ifwarningicon, 'left', '5%');
    this.renderer.setStyle(ifwarningicon, 'font-size', '24px');
  
    this.renderer.appendChild(subcatwarningnew, ifwarningicon);
  //this.renderer.appendChild(subcatwarningnew, catTextnew);
  this.renderer.appendChild(list, subcatwarningnew);
  
  

this.renderer.setStyle(list, 'position', 'relative');
this.renderer.setStyle(list, 'top', '8%');
this.renderer.setStyle(list, 'left', '-3%');



this.renderer.appendChild(innerContent, list);

const containerfixSuggestedButton = this.renderer.createElement('div');
this.renderer.setStyle(containerfixSuggestedButton, 'display', 'flex');
this.renderer.setStyle(containerfixSuggestedButton, 'justify-content', 'center');
this.renderer.setStyle(containerfixSuggestedButton, 'align-items', 'center');



const fixSuggestedButton = this.renderer.createElement('ion-button');
    const buttonText = this.renderer.createText('Fix Suggested');
    this.renderer.appendChild(fixSuggestedButton, buttonText);
    this.renderer.setAttribute(fixSuggestedButton, 'color', 'primary');
    fixSuggestedButton.id = 'invisiblediv';
    this.renderer.setStyle(fixSuggestedButton, 'position', 'absolute');
    this.renderer.setStyle(fixSuggestedButton, 'top', '35%');
    //this.renderer.setStyle(fixSuggestedButton, 'left', '33%');

    fixSuggestedButton.addEventListener('click', this.openModal.bind(this, myDataModal));

  


    this.renderer.appendChild(containerfixSuggestedButton, fixSuggestedButton);
  this.renderer.appendChild(innerContent, containerfixSuggestedButton);
  

  }

  
  

}