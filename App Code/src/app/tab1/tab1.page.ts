import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {  ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Renderer2 } from '@angular/core';
import { IonList } from '@ionic/angular';
import { IonItemSliding } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modals/modal-page/modal-page.page'



import { AppStorageService } from '../services/app-storage.service';
import { GetTransactionsService } from '../services/get-transactions.service';
import { error } from 'console';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  constructor( private appStorageService : AppStorageService,private http: HttpClient,private getTransactionService : GetTransactionsService,private renderer: Renderer2,private modalController: ModalController) {}

  value:any="";

  async setValue(key: string, value: any) {
    await this.appStorageService.set(key, value);
  }

  async setValuethenclear(key1: string, value1: any,key2: string, value2: any) {
    await this.appStorageService.set(key1, value1);
    await this.appStorageService.set(key2, value2);
    this.setupTable()
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      
    }
  }

  async refreshTransactions() {

    
    const thelist = document.querySelector('#transctions') as HTMLIonSelectElement;

       thelist.innerHTML = "";
      
      this.refreshdata()

  }

  async getValue(a : string) {
    this.value = await this.appStorageService.get(a)
    return this.value
  }

  async presentModal(dataofthis) {
    const modal = await this.modalController.create({
      component: ModalPage,
      breakpoints: [0, .50],
      initialBreakpoint: .50,
      cssClass: 'my-custom-modal',
      componentProps: {
        myDataModal : dataofthis
      }
      
    });
    return await modal.present();
  }


  async setupTable() {

    const mySelect4443 = document.querySelector('#transctions') as HTMLIonSelectElement;

    mySelect4443.innerHTML = ""


    var tabledata = await this.getValue("transactions")
    tabledata.sort((a, b) => {
      const dateA = new Date(a[1] + ' ' + a[2]).getTime();
      const dateB = new Date(b[1] + ' ' + b[2]).getTime();
      return dateB - dateA;
    });

    var thedate = tabledata[0][1]
    var sorted = 0

    while (sorted < tabledata.length -2) {

    

    const newGroup = document.createElement('ion-item-group');
    const newDev = document.createElement('ion-item-divider');
    newDev.textContent = tabledata[sorted][1]

    mySelect4443.appendChild(newGroup)
    newGroup.appendChild(newDev)

      while (thedate == tabledata[sorted][1]) {

        const newlabel = document.createElement('ion-label');
        newlabel.textContent = tabledata[sorted][5] 
        newlabel.style.flex = '0 0 70%';
        newGroup.appendChild(newlabel)

        const newlabel2 = document.createElement('ion-label');
        newlabel2.textContent = tabledata[sorted][6] 
        newlabel2.style.flex = '0 0 10%';
        newlabel2.style.position = "absolute"
        newlabel2.style.left = "70%"
        newlabel2.style.textAlign = 'right';
        newlabel2.style.bottom = "0%"
        newGroup.appendChild(newlabel2)

        const newitem = document.createElement('ion-item');
        if (tabledata[sorted][7] == "want") {
          var icon2 = this.renderer.createElement('ion-icon');
            icon2.slot = 'end'; 
            icon2.name = "warning-outline"; 
            icon2.style.position = "absolute"
            icon2.style.right = "5%"
            icon2.style.bottom = "0%"
            newitem.appendChild(icon2);
        }

        if (tabledata[sorted][8] == "Inflation") {
          var icon3 = this.renderer.createElement('ion-icon');
            icon3.slot = 'end'; 
            icon3.name = ""; 
            icon3.style.color = 'red'; 
            newitem.appendChild(icon3);
        }
        else if (tabledata[sorted][8] == "Water") {
          var icon3 = this.renderer.createElement('ion-icon');
            icon3.slot = 'end'; 
            icon3.name = "caret-up"; 
            icon3.style.color = 'green'; 
            newlabel2.appendChild(icon3);
        }
        else if (tabledata[sorted][8] == "Fuel") {
          var icon3 = this.renderer.createElement('ion-icon');
            icon3.slot = 'end'; 
            icon3.name = "caret-up"; 
            icon3.style.color = 'green'; 
            newlabel2.appendChild(icon3);
        }
        else if (tabledata[sorted][8] == "Energy") {
          var icon3 = this.renderer.createElement('ion-icon');
            icon3.slot = 'end'; 
            icon3.name = "caret-up"; 
            icon3.style.color = 'green'; 
            newlabel2.appendChild(icon3);
        }
        else if (tabledata[sorted][8] == "InterestRate") {
          var icon3 = this.renderer.createElement('ion-icon');
            icon3.slot = 'end'; 
            icon3.name = "caret-up"; 
            icon3.style.color = 'green'; 
            newlabel2.appendChild(icon3);
        }
        else  {
          var icon3 = this.renderer.createElement('ion-icon');
            icon3.slot = 'end'; 
            icon3.name = ""; 
            icon3.style.color = ''; 
            newlabel2.appendChild(icon3);
        }

        newitem.appendChild(newlabel)
        newitem.appendChild(newlabel2)



        newitem.addEventListener('click', this.presentModal.bind(this, tabledata[sorted]));
        

        newGroup.appendChild(newitem)

        

        
        var iconnameof = ""

        if (tabledata[sorted][4] == "Bus") {
          iconnameof = "bus-outline"
        }
        else if (tabledata[sorted][4] == "Mortgage") {
          iconnameof = "home-outline"
        }
        else if (tabledata[sorted][4] == "Train") {
          iconnameof = "train-outline"
        }
        else if (tabledata[sorted][4] == "Entertainment") {
          iconnameof = "game-controller-outline"
        }
        else if (tabledata[sorted][4] == "fast-food-outline") {
          iconnameof = "pizza-outline"
        }
        else if (tabledata[sorted][4] == "Groceries") {
          iconnameof = "fish-outline"
        }
        else if (tabledata[sorted][4] == "Charity") {
          iconnameof = "body-outline"
        }
        else if (tabledata[sorted][4] == "Gifts") {
          iconnameof = "gift-outline"
        }
        else if (tabledata[sorted][4] == "Income") {
          iconnameof = "cash-outline"
        }
        else if (tabledata[sorted][4] == "Shopping") {
          iconnameof = "bag-handle-outline"
        }
        else if (tabledata[sorted][4] == "Eating Out") {
          iconnameof = "fast-food-outline"
        }
        else if (tabledata[sorted][4] == "Fuel") {
          iconnameof = "beaker-outline"
        }
        else if (tabledata[sorted][4] == "Energy") {
          iconnameof = "bulb-outline"
        }
        else if (tabledata[sorted][4] == "Water") {
          iconnameof = "water-outline"
        }
        else if (tabledata[sorted][4] == "Rent") {
          iconnameof = "home-outline"
        }
        else if (tabledata[sorted][4] == "Food") {
          iconnameof = "pizza-outline"
        }
        else if (tabledata[sorted][4] == "Holidays") {
          iconnameof = "boat-outline"
        }

        var icon = this.renderer.createElement('ion-icon');
            icon.slot = 'start'; 
            icon.name = iconnameof; 
            newitem.appendChild(icon);

        sorted =  sorted + 1

  
        
       
      }
      
        thedate = tabledata[sorted][1]
      
      
    }

  }


  ionViewDidEnter() {

    setTimeout(async() => {
    var tabledata = await this.getValue("transactions")

      const thelist = document.querySelector('#transctions') as HTMLIonSelectElement;

      if (thelist.innerHTML == "") {

    if ((tabledata == "") || (tabledata == null)) {
      this.refreshdata()
    }
    else {
      this.setupTable()
    }

  }

    })

}

async refreshdata() {
  setTimeout(async() => {
    
  const mySelect4443 = document.querySelector('#transctions') as HTMLIonSelectElement;

    
  var bankapis = await this.getValue("userAPIs")
  var banktransaction: any[] = [];
  const promises = [];
for (let i = 0; i < bankapis.length; i++) {
if (bankapis[i][0] == "bank") {
  type strings = { [key: string]: string };
  const dictionary : strings = {
    "happyholdings" : "https://happyholdings.fun/api/",
    "contentholdings" : "https://contentholdings.fun/api/",
    "sadholdings" : "https://sadholdings.fun/api/"
  }
  var theurl = dictionary[bankapis[i][1]];
  theurl = theurl + "?Person=" + bankapis[i][2] + "&Request=transactions";
  const promise = new Promise<void>((resolve, reject) => {
    this.http.post(theurl.toString(), {}).subscribe(response => {
      banktransaction = banktransaction.concat(response);
      console.log(banktransaction);
      resolve();
    }, error => {
      console.error(error);
      reject();
    });
  });
  promises.push(promise);
}
}
Promise.all(promises).then(() => {
console.log("All data has been retrieved");
console.log(banktransaction)
///////////////////////////////////
const url = 'http://35.246.120.229:5000';
const data = { message: banktransaction };
//const data = { message: [[23,"2023-01-23","19:26:20","Victoria's Secret",-6],[1,"2023-01-17","17:21:39","Guaranteed Rate",-872],[23,"2023-01-23","19:26:20","Victoria's Secret",-6],[23,"2023-01-23","19:26:20","Victoria's Secret",-6]]};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

this.http.post(url, JSON.stringify(data), httpOptions).subscribe(response => {
  const response_list = response as any[];
  console.log(response_list);
  
  //this.setValue("transactions",response_list[0])
  //this.setValue("profile",response_list[1])
  /////////////////////////////////////////////////////////////////////////////////////////
  this.setValuethenclear("transactions",response_list[0],"profile",response_list[1])
  //this.setupTable()
  /////////////////////////////////////////////////////////////////////////////////////////
  

}, error => {
  console.error(error);
});


////////////////////////////////
}).catch(() => {
console.error("Error retrieving data");
});
  //
  //
  
  
},0)
}




}
