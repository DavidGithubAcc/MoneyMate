import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AppStorageService } from '../services/app-storage.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import Chart from 'chart.js/auto';
import { Renderer2 } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import {  ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,FormsModule,CommonModule,]
})
export class Tab2Page {



  constructor(private location: Location,private http: HttpClient,private appStorageService : AppStorageService,private renderer: Renderer2) {}

  value: any;
  selectedOption = 'Assets';
  public selectedSegment = 'Assets';


  @ViewChild(IonModal) modal: IonModal ;

  addAsset() {

  }

  handleChange(ev) {
   

  }
 
  
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      
    }
  }


cancel() {
    this.modal.dismiss(null, 'cancel');
  }



  async confirm() {

    const mySelectcheckname = await document.getElementById('assetname') as HTMLInputElement;
    const mySelectcheckvalue =  await document.querySelector('#assetvalue')as HTMLInputElement;

    console.log(mySelectcheckname?.value)
    console.log(mySelectcheckvalue?.value)

    if ((mySelectcheckname?.value) &&(mySelectcheckvalue?.value )) {



      await this.changeKeyStore(mySelectcheckname.value.toString(),mySelectcheckvalue.value.toString())

    this.modal.dismiss(null, 'cancel');

      await console.log(this.getValue("addedassets"))

      this.location.replaceState(this.location.path());
    window.location.reload();

  
    }

  }


  async changeKeyStore(a : any,b : any) {
    const oldStorage = await this.getValue("addedassets");
     let listofLists: [string, string][] = [];

     const newEntry: [string, string] = [a,b,];

     if (oldStorage !== null) {
       listofLists = oldStorage;
     listofLists.push(newEntry);
     await this.setValue("addedassets", listofLists);
     }
     else {
       const newEntrythis: [[string, string]] = [[a,b]];
      await this.setValue("addedassets", newEntrythis);
     }
     
     
 }



  

  async getValue(a : string) {
    this.value = await this.appStorageService.get(a)
    return this.value
  }

  async setValue(key: string, value: any) {
    await this.appStorageService.set(key, value);
  }


  segmentChanged(event) {
    console.log(event.detail.value);
    // Perform action based on selected value
    
  }

  async startup() {
    setTimeout(async() => {

      
     
      
      var bankapis = await this.getValue("userAPIs")
      //console.log(bankapis)
      var balences: any[] = [];
      var interests: any[] = [];
      var stocks: any[] = [];
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
      theurl = theurl + "?Person=" + bankapis[i][2] + "&Request=balence";
      const promise = new Promise<void>((resolve, reject) => {
        this.http.post(theurl.toString(), {}).subscribe(response => {
          //response.push("hi")
        //balences = balences.concat(response );
          //balences =  balences.concat(response );
          //balences[i].push(bankapis[i][1])
          const hobbiesArray: any = response.valueOf();
          console.log("hib" + hobbiesArray[0])
          var newitemfor = [hobbiesArray[0],bankapis[i][1]]
    
          balences.push(newitemfor)
  
          console.log(  balences)
          
          resolve();
        }, error => {
          console.error(error);
          reject();
        });
      });
      promises.push(promise);
  
      //
    
      var theurl = dictionary[bankapis[i][1]];
      theurl = theurl + "?Person=" + bankapis[i][2] + "&Request=interest";
      const promiseinterest = new Promise<void>((resolve, reject) => {
        this.http.post(theurl.toString(), {}).subscribe(response => {
          interests = interests.concat(response);
          //console.log(interests);
          resolve();
        }, error => {
          console.error(error);
          reject();
        });
      });
      promises.push(promiseinterest);
      //
    }
  }
  
  for (let i = 0; i < bankapis.length; i++) {
    if (bankapis[i][0] == "stock") {
      type strings = { [key: string]: string };
      const dictionary : strings = {
        "happystocks" : "https://happystocks.fun/api/",
      }
      var theurl = dictionary[bankapis[i][1]];
      theurl = theurl + "?Person=" + bankapis[i][2];
      const promise = new Promise<void>((resolve, reject) => {
        this.http.post(theurl.toString(), {}).subscribe(response => {
          stocks = stocks.concat(response);
          //console.log("HHHHHHHHHHHHHHHHHHH")
          //console.log("stocks" + stocks);
          resolve();
        }, error => {
          console.error(error);
          reject();
        });
      });
      promises.push(promise);
  
      //
    }
      
  }
  
  
  
  Promise.all(promises).then(() => {
  //console.log("hhh" + balences)
    this.setValue("stocks",stocks)
    this.setValue("balences",balences)
    //this.setValue("interests",interests)
  //console.log("hellow")
    this.getValue("stocks")
    this.getValue("balences")
    this.getValue("interests")
    
  });
    
  var stock : any=  await this.getValue("stocks")
    var balence : any= await this.getValue("balences")
    console.log( + balence[0] )
  
    var stocktotal = 0
    var balencetotal = 0
     
    for (let i = 0; i < stock.length ; i++) {
      stocktotal = stocktotal + stock[i][2] * stock[i][3]
    }
  
    for (let i = 0; i < balence.length ; i++) {
      balencetotal = balencetotal + balence[i][0][1]
    }
  
    //console.log("hey")
    //console.log(stocktotal)
    //console.log(balencetotal)
  
    /////
   
    /////
  
  
  //
  var pieChartData: number[] = []
    var pieChartLabels: string[] = []
    var pieChartType: string = 'doughnut';

    if (stocktotal > 0) {
      pieChartData.push(stocktotal)
      pieChartLabels.push("Stocks")
    }
    if (balencetotal > 0) {
      pieChartData.push(balencetotal)
      pieChartLabels.push("Bank")
      
    }
  
  
  
   
  const mySelect4443 = await document.querySelector('#assetlist');
  //const mySelect4443 = document.querySelector('#assetlist') as HTMLIonSelectElement;
  
  const newDevgroup = document.createElement('ion-item-group');
  
  const newDevdivider = document.createElement('ion-item-divider');
  
  const newDevdivitextis = document.createElement('ion-item-label');
  newDevdivitextis.textContent = "Bank Balences:"
  
  const newDevdivitextisbalence = document.createElement('ion-item-label');
  newDevdivitextisbalence.textContent = balencetotal.toString()
  //
  
  //
  this.renderer.appendChild(newDevdivider, newDevdivitextis);
  this.renderer.appendChild(newDevdivider, newDevdivitextisbalence);
  this.renderer.appendChild(newDevgroup, newDevdivider);
  
  
  ////////////////////////////
  
  console.log("hh" + balence.length)
  
  
  for (let i = 0; i < balence.length ; i++) {
  
  const newDev = document.createElement('ion-item');
  
  const newDevdivitext = document.createElement('ion-label');
  newDevdivitext.textContent = balence[i][1]
  
  const newDevdivitextbal = document.createElement('ion-label');
  newDevdivitextbal.textContent = balence[i][0][1]
  
  this.renderer.appendChild(newDev, newDevdivitext);
  this.renderer.appendChild(newDev, newDevdivitextbal);
  this.renderer.appendChild(newDevgroup, newDev);
  
  }
  
  
  
  ///////////////////////////
  
  const stockgroup = document.createElement('ion-item-group');
  
  const stockdev = document.createElement('ion-item-divider');
  
  const stockdevtext = document.createElement('ion-label');
  stockdevtext.textContent = stocktotal.toString()
  
  
  const stockdevtotal = document.createElement('ion-label');
  stockdevtotal.textContent = "Stocks:"
  
  const theitem = document.createElement('ion-item');
  
  const header = document.createElement('ion-select');
  header.setAttribute("placeholder","Select Stock")
  
  
  
  for (let i = 0; i < stock.length ; i++) {
    const headerlabel = document.createElement('ion-select-option');
  headerlabel.value = i
  //headerlabel.setAttribute("value", "hi")
  headerlabel.textContent = stock[i][1] + " Price: " + stock[i][3] + " Quantity: "+ stock[i][2]+ " Total: " + stock[i][3] * stock[i][2]
  
  
  
  this.renderer.appendChild(header, headerlabel);
  }
  
  console.log("HAAAAPPENIN")
  
  
  this.renderer.appendChild(theitem, header);
  
  
  this.renderer.appendChild(stockdev, stockdevtotal);
  
  this.renderer.appendChild(stockdev, stockdevtext);
  
  this.renderer.appendChild(stockgroup, stockdev);
  
  this.renderer.appendChild(stockgroup, theitem);
  
  ///////////////////////////////
  this.renderer.appendChild(mySelect4443, newDevgroup);
  
  this.renderer.appendChild(mySelect4443, stockgroup);
  
  const canvasElement = document.getElementById('acquisitionsa') as HTMLCanvasElement;
  
  // Check if a chart with the same ID already exists
  const existingChart = Chart.getChart(canvasElement);
  if (existingChart) {
    // If a chart exists, destroy it before creating a new chart
    existingChart.destroy();
  }



  var storedassetsis = await this.getValue("addedassets")

 

  if (storedassetsis ?? false) {
    if (storedassetsis != "") {

      for (let i = 0; i < storedassetsis.length; i++) {
        pieChartData.push(parseInt(storedassetsis[i][1]))
        pieChartLabels.push(storedassetsis[i][0])
      }


    }
  }

  

  
  var backgroundcolornew = []
  
  for (let i = 0; i < pieChartData.length; i++) {
    //const randomIndex = Math.floor(Math.random() * thecolors.length)
    //backgroundColornew.push(thecolors[randomIndex])
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    backgroundcolornew.push(`rgb(${r}, ${g}, ${b})`)
  
  }
  
  
  
  const ctx = document.getElementById('acquisitionsa') as HTMLCanvasElement;
  const chart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: pieChartLabels,
    datasets: [
      {
        label: 'My First Dataset',
        data: pieChartData,
        backgroundColor: backgroundcolornew,
        hoverOffset: 4,
      },
    ],
  },
  });
  
    
    },0)
  
  }



  ionViewDidEnter() {
   
    const thelist = document.querySelector('#assetlist') as HTMLIonSelectElement;

      if (thelist.innerHTML == "") {
    this.startup()    
      }
}


}

