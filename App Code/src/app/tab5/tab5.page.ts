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

import { AppStorageService } from '../services/app-storage.service';




@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule],
})
export class Tab5Page {
  constructor(private http: HttpClient,private elRef: ElementRef,private toastController: ToastController, private appStorageService : AppStorageService,public navCtrl: NavController,private renderer: Renderer2) {}

  @ViewChild(IonModal) modal: IonModal ;

  

  value:any="";
  
  

  message = '';
  name: string | any;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }


  async setValue(key: string, value: any) {
    await this.appStorageService.set(key, value);
  }

  async getValue() {
    this.value = await this.appStorageService.get("userAPIs")
    return this.value
  }

  async getValue2(a : string) {
    this.value = await this.appStorageService.get(a)
    return this.value
  }

  async removeValue() {
    await this.appStorageService.remove("country)")
  }

  async clearStorage()
  {
    await this.appStorageService.clear()
  }
  
  async changeKeyStore(a : any,b : any,c : any) {
     const oldStorage = await this.getValue();
      let listofLists: [string, string, string][] = [];

      const newEntry: [string, string, string] = [a,b,c,];

      if (oldStorage !== null) {
        listofLists = oldStorage;
      listofLists.push(newEntry);
      await this.setValue("userAPIs", listofLists);
      }
      else {
        const newEntrythis: [[string, string, string]] = [[a,b,c,]];
       await this.setValue("userAPIs", newEntrythis);
      }
      
      
  }


  async getKeyStorage() {
    const oldStorage = await this.getValue();
     let listofLists: [string, string, string][] = [];


     if (oldStorage !== null) {
       listofLists = oldStorage;
        return listofLists
     }
     else {
       return null

     }
     
 }

 async deleteKeyStore(a : any,b : any,c : any) {
  const oldStorage = await this.getValue();

   const newEntry: [string, string, string] = [a,b,c,];

   if (oldStorage !== null) {
    const newList = oldStorage.filter(item => item[0] !== newEntry[0] || item[1] !== newEntry[1] || item[2] !== newEntry[2]);
    console.log("new list is: " + newList)
   this.setValue("userAPIs", newList);
   }
   else {
     
   }

   
}



  confirm() {
    const mySelectcheck1 = document.querySelector('#accounttype') as HTMLSelectElement;
    const mySelectcheck2 = document.querySelector('#company') as HTMLSelectElement;
    const mySelectcheck3 = document.querySelector('#apikey') as HTMLSelectElement;

    /*
    console.log(mySelectcheck1?.value)
    console.log(mySelectcheck2?.value)
    console.log(mySelectcheck3?.value)
    */
    
    if ((mySelectcheck1?.value) &&(mySelectcheck2?.value )&&(mySelectcheck3?.value )) {
      


      this.changeKeyStore(mySelectcheck1.value,mySelectcheck2.value,mySelectcheck3.value);
      this.getValue()

      this.modal.dismiss(null, 'cancel');

      

      //////////////////////////////////////////////////////////////////////////////////
      const mySelect = document.querySelector('#accountsList') as HTMLIonSelectElement;
        const lislide = this.renderer.createElement('ion-item-sliding');
        const li = this.renderer.createElement('ion-item');
        //const text = this.renderer.createText("hi");

        const itemContent = this.renderer.createElement('div');
        itemContent.style.display = 'flex'; // set display property to flex
        itemContent.style.alignItems = 'center'; // center the content vertically
        itemContent.style.justifyContent = 'center'; // center the content horizontally
        itemContent.style.width = '100%'; // set the width to 100% to take up the full width of the item

        const label = this.renderer.createElement('ion-label');
        if (mySelectcheck2.value == "contentholdings") {
        label.innerText = "Content Holdings";
        const icon = this.renderer.createElement('ion-icon');
            icon.slot = ''; 
            icon.name = 'wallet-outline'; 
            li.appendChild(icon);
            //////////////////////////////////////////////////
            const icon2 = this.renderer.createElement('ion-icon');
            icon2.slot = 'end'; 
            icon2.name = 'reorder-three-outline'; 
            li.appendChild(icon2);
        }
        else if (mySelectcheck2.value == "happyholdings") {
          label.innerText = "Happy Holdings";
          const icon = this.renderer.createElement('ion-icon');
            icon.slot = ''; 
            icon.name = 'wallet-outline'; 
            li.appendChild(icon);
            //////////////////////////////////////////////////
            const icon2 = this.renderer.createElement('ion-icon');
            icon2.slot = 'end'; 
            icon2.name = 'reorder-three-outline'; 
            li.appendChild(icon2);
          }
        else if (mySelectcheck2.value == "happystocks") {
          label.innerText = "Happy Stocks";
          const icon = this.renderer.createElement('ion-icon');
            icon.slot = ''; 
            icon.name = 'stats-chart-outline'; 
            li.appendChild(icon);
            //////////////////////////////////////////////////
            const icon2 = this.renderer.createElement('ion-icon');
            icon2.slot = 'end'; 
            icon2.name = 'reorder-three-outline'; 
            li.appendChild(icon2);
          }
          else if (mySelectcheck2.value == "sadholdings") {
            label.innerText = "Sad Holdings";
            const icon = this.renderer.createElement('ion-icon');
            icon.slot = ''; 
            icon.name = 'wallet-outline'; 
            li.appendChild(icon);
            //////////////////////////////////////////////////
            const icon2 = this.renderer.createElement('ion-icon');
            icon2.slot = 'end'; 
            icon2.name = 'reorder-three-outline'; 
            li.appendChild(icon2);
            }

            

          
        itemContent.appendChild(label);
        
        li.appendChild(itemContent);
        

        const deleteButton = this.renderer.createElement('ion-item-options');
        deleteButton.side = 'end';
        const deleteAction = this.renderer.createElement('ion-item-option');
        deleteAction.color = 'danger';
        deleteAction.innerText = 'Delete';
        deleteAction.addEventListener('click', () => {
          var theValue = [mySelectcheck1.value,mySelectcheck2.value,mySelectcheck3.value]

          lislide.remove();

          console.log()
          this.deleteKeyStore(theValue[0],theValue[1],theValue[2]);

        });

        deleteButton.appendChild(deleteAction);
        
        //this.renderer.appendChild(li, text);
        this.renderer.appendChild(lislide, li);
        this.renderer.appendChild(lislide, deleteButton);
        mySelect.appendChild(lislide);
      //////////////////////////////////////////////////////////////////////////////////


      
      console.log("hi")
     }
    else {
      this.presentToast()
    }
    
  
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      
    }
  }
  

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Fields Empty',
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  

  handleChange(ev) {
    console.log(ev.target.value);
    const mySelect = document.querySelector('#company') as HTMLSelectElement;
    mySelect.innerHTML = "";
    if (ev.target.value == "bank") {


      const newOption1 = document.createElement('ion-select-option');
      newOption1.textContent = 'Happy Holdings';
      newOption1.value = 'happyholdings';

      const newOption2 = document.createElement('ion-select-option');
      newOption2.textContent = 'Content Holdings';
      newOption2.value = 'contentholdings';

      const newOption3 = document.createElement('ion-select-option');
      newOption3.textContent = 'Sad Holdings';
      newOption3.value = 'sadholdings';

      mySelect.appendChild(newOption1);
      mySelect.appendChild(newOption2);
      mySelect.appendChild(newOption3);

    }

    if (ev.target.value == "stock") {


      const newOptionStock = document.createElement('ion-select-option');
      newOptionStock.textContent = 'Happy Stocks';
      newOptionStock.value = 'happystocks';

      mySelect.appendChild(newOptionStock);

      



    }

  }

  ionViewDidEnter() {
    const mySelect444 = document.querySelector('#accountsList') as HTMLIonSelectElement;
    if (mySelect444.innerHTML == "") {

    
    
    setTimeout(async() => {
    const storeAccounts =  await this.getKeyStorage()
    if (storeAccounts == null) {

    }
    else {
      for  (let i = 0; i < storeAccounts.length; i++) {

        const mySelect = document.querySelector('#accountsList') as HTMLIonSelectElement;
        const lislide = this.renderer.createElement('ion-item-sliding');
        const li = this.renderer.createElement('ion-item');
        //const text = this.renderer.createText("hi");

        const itemContent = this.renderer.createElement('div');
        itemContent.style.display = 'flex'; // set display property to flex
        itemContent.style.alignItems = 'center'; // center the content vertically
        itemContent.style.justifyContent = 'center'; // center the content horizontally
        itemContent.style.width = '100%'; // set the width to 100% to take up the full width of the item

        const label = this.renderer.createElement('ion-label');
        if (storeAccounts[i][1] == "contentholdings") {
        label.innerText = "Content Holdings";
        const icon = this.renderer.createElement('ion-icon');
            icon.slot = ''; 
            icon.name = 'wallet-outline'; 
            li.appendChild(icon);
            //////////////////////////////////////////////////
            const icon2 = this.renderer.createElement('ion-icon');
            icon2.slot = 'end'; 
            icon2.name = 'reorder-three-outline'; 
            li.appendChild(icon2);
        }
        else if (storeAccounts[i][1] == "happyholdings") {
          label.innerText = "Happy Holdings";
          const icon = this.renderer.createElement('ion-icon');
            icon.slot = ''; 
            icon.name = 'wallet-outline'; 
            li.appendChild(icon);
            //////////////////////////////////////////////////
            const icon2 = this.renderer.createElement('ion-icon');
            icon2.slot = 'end'; 
            icon2.name = 'reorder-three-outline'; 
            li.appendChild(icon2);
          }
        else if (storeAccounts[i][1] == "happystocks") {
          label.innerText = "Happy Stocks";
          const icon = this.renderer.createElement('ion-icon');
            icon.slot = ''; 
            icon.name = 'stats-chart-outline'; 
            li.appendChild(icon);
            //////////////////////////////////////////////////
            const icon2 = this.renderer.createElement('ion-icon');
            icon2.slot = 'end'; 
            icon2.name = 'reorder-three-outline'; 
            li.appendChild(icon2);
          }
          else if (storeAccounts[i][1] == "sadholdings") {
            label.innerText = "Sad Holdings";
            const icon = this.renderer.createElement('ion-icon');
            icon.slot = ''; 
            icon.name = 'wallet-outline'; 
            li.appendChild(icon);
            //////////////////////////////////////////////////
            const icon2 = this.renderer.createElement('ion-icon');
            icon2.slot = 'end'; 
            icon2.name = 'reorder-three-outline'; 
            li.appendChild(icon2);
            }

            

          
        itemContent.appendChild(label);
        
        li.appendChild(itemContent);
        

        const deleteButton = this.renderer.createElement('ion-item-options');
        deleteButton.side = 'end';
        const deleteAction = this.renderer.createElement('ion-item-option');
        deleteAction.color = 'danger';
        deleteAction.innerText = 'Delete';
        deleteAction.addEventListener('click', () => {
          var theValue = [storeAccounts[i][0],storeAccounts[i][1],storeAccounts[i][2]]

          lislide.remove();

          console.log()
          this.deleteKeyStore(theValue[0],theValue[1],theValue[2]);
        });

        deleteButton.appendChild(deleteAction);
        
        //this.renderer.appendChild(li, text);
        this.renderer.appendChild(lislide, li);
        this.renderer.appendChild(lislide, deleteButton);
        mySelect.appendChild(lislide);
    }
    }


  }, 0);
}
  

}


//

//


}

////////////////////////////////////////




