import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { __values } from 'tslib';
import { IonSelect } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { AppStorageService } from '../services/app-storage.service';
import { GetTransactionsService } from '../services/get-transactions.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-correctwrongpage',
  templateUrl: './correctwrongpage.page.html',
  styleUrls: ['./correctwrongpage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CorrectwrongpagePage implements OnInit {
  value: any;

  constructor(private navParams: NavParams,private renderer: Renderer2,private modalController: ModalController,private appStorageService : AppStorageService,private http: HttpClient) { }

  
  @ViewChild('categorySelect') categorySelect: IonSelect;
  @ViewChild('subselect') subselect: IonSelect;
  @ViewChild('wantselect') wantselect: IonSelect;
  @ViewChild('indexselect') indexselect: IonSelect;
  @ViewChild('suggestion') suggestion: IonSelect;

  async setValue(key: string, value: any) {
    await this.appStorageService.set(key, value);
  }

  async getValue(a : string) {
    this.value = await this.appStorageService.get(a)
    return this.value
  }


  async updatestore(a: any, b: any) {
    var stored = await this.getValue("transactions");
    var index = stored.findIndex((item) => item.id === a.id);
    if (index !== -1) {
      var updatedArray = [
        ...stored.slice(0, index),
        b,
        ...stored.slice(index + 1),
      ];
      await this.setValue("transactions", updatedArray);
      console.log("success");
    }

    var thestring = ""

      for (let i = 1; i < b.length; i++) {
        thestring = thestring +"  " +b[i]
      }
      
const apiUrl = 'http://35.246.120.229:5000/miscategorisation';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const payload = new URLSearchParams();
payload.set('message', thestring);

this.http.post(apiUrl, payload.toString(), httpOptions).subscribe(
  (response) => {
    console.log('POST request successful', response);
    this.modalController.dismiss();
    location.reload()
  },
  (error) => {
    console.error('POST request error', error);
    this.modalController.dismiss();
    location.reload()
  }
);
  //

    
  }
  

  ngOnInit() {


    const suggested = this.navParams.get('mySuggested');
    console.log(suggested);

    const confirmbutton = document.getElementById("confirm")

    confirmbutton.addEventListener('click', () => {
      
      var suggestionwrapper = Object.assign([], suggested);
      suggestionwrapper[3] = this.categorySelect.value
      suggestionwrapper[4] = this.subselect.value
      suggestionwrapper[7] = this.wantselect.value
      suggestionwrapper[8] = this.indexselect.value
      suggestionwrapper[9] = this.suggestion.value
 
      

      /////
      

      ///////

      this.updatestore(suggested,suggestionwrapper)
      
      //this.modalController.dismiss();
      
    });

    const cancelbutton = document.getElementById("cancel")

    cancelbutton.addEventListener('click', () => {
      

      this.modalController.dismiss();
    });
      

    

    for (let i = 0; i < 4; i++) {

      const newSelectOption = this.renderer.createElement('ion-select-option');
      
      

      if (i == 0) {
        const optionText = this.renderer.createText(suggested[3]+ " (Original)");
      this.renderer.appendChild(newSelectOption, optionText);
        this.renderer.setAttribute(newSelectOption, 'value', suggested[3]);
        const CategorySelect = this.renderer.selectRootElement('#Category');
        this.renderer.appendChild(CategorySelect, newSelectOption);
        CategorySelect.value = suggested[3];
      }
      else if (i == 1) {
        const optionText = this.renderer.createText(suggested[4]+ " (Original)");
      this.renderer.appendChild(newSelectOption, optionText);
        this.renderer.setAttribute(newSelectOption, 'value', suggested[4]);
        const CategorySelect = this.renderer.selectRootElement('#SubCategory');
        this.renderer.appendChild(CategorySelect, newSelectOption);
        CategorySelect.value = suggested[4];
      }
      else if (i == 2) {
        const optionText = this.renderer.createText(suggested[7]+ " (Original)");
      this.renderer.appendChild(newSelectOption, optionText);
        this.renderer.setAttribute(newSelectOption, 'value', suggested[7]);
        const CategorySelect = this.renderer.selectRootElement('#WantVsNeed');
        this.renderer.appendChild(CategorySelect, newSelectOption);
        CategorySelect.value = suggested[7];
        
      }
      else {
        const optionText = this.renderer.createText(suggested[8]+ " (Original)");
      this.renderer.appendChild(newSelectOption, optionText);
        this.renderer.setAttribute(newSelectOption, 'value', suggested[8]);
        const CategorySelect = this.renderer.selectRootElement('#Index');
        this.renderer.appendChild(CategorySelect, newSelectOption);
        CategorySelect.value = suggested[8];
      }
      
}



const newSelectOptionsec = this.renderer.selectRootElement('#Suggestion');
if (suggested[9] != "null") {
newSelectOptionsec.value = suggested[9];
  }
  else {
    newSelectOptionsec.value = "";
  }



 


  var categories = ["Expenses","Bills","Transport","Entertainment","Groceries","Charity","Gifts","Eating Out", "Income","Shopping","Holidays"]
  var subcats = ["Bus","Mortgage","Rent","Fuel","Train","Holidays","Entertainment","Groceries","Gifts","Eating Out","Income","Charity","Water","Energy","Food"]
  var wantorneed = ["want","need"]
  var indexis = ["Inflation","InterestRate","Water","Fuel","Energy"]

  const index1 = categories.indexOf(suggested[3])
  const index2 = subcats.indexOf(suggested[4])
  const index3 = wantorneed.indexOf(suggested[7])
  const index4 = indexis.indexOf(suggested[8])

if (index1 != -1) {
  console.log("hi")
  console.log(categories)
  categories.splice(index1, 1)
  console.log(categories)
}
if (index2 != -1) {
  subcats.splice(index2, 1)
}
if (index3 != -1) {
  wantorneed.splice(index3, 1)
}
if (index4 != -1) {
  indexis.splice(index4, 1)
}

for (let i = 0; i < categories.length; i++) {
  const newSelectOption1 = this.renderer.createElement('ion-select-option');
        const optionText1 = this.renderer.createText(categories[i]);
      this.renderer.appendChild(newSelectOption1, optionText1);
       this.renderer.setAttribute(newSelectOption1, 'value', categories[i]);
       // const CategorySelect = this.renderer.selectRootElement('#Category');
        const CategorySelect = document.querySelector('#Category');
        this.renderer.appendChild(CategorySelect, newSelectOption1);
}

for (let i = 0; i < subcats.length; i++) {
  const newSelectOption1 = this.renderer.createElement('ion-select-option');
        const optionText1 = this.renderer.createText(subcats[i]);
      this.renderer.appendChild(newSelectOption1, optionText1);
       this.renderer.setAttribute(newSelectOption1, 'value', subcats[i]);
       // const CategorySelect = this.renderer.selectRootElement('#Category');
        const CategorySelect = document.querySelector('#SubCategory');
        this.renderer.appendChild(CategorySelect, newSelectOption1);
}

for (let i = 0; i < wantorneed.length; i++) {
  const newSelectOption1 = this.renderer.createElement('ion-select-option');
        const optionText1 = this.renderer.createText(wantorneed[i]);
      this.renderer.appendChild(newSelectOption1, optionText1);
       this.renderer.setAttribute(newSelectOption1, 'value', wantorneed[i]);
       // const CategorySelect = this.renderer.selectRootElement('#Category');
        const CategorySelect = document.querySelector('#WantVsNeed');
        this.renderer.appendChild(CategorySelect, newSelectOption1);
}

for (let i = 0; i < indexis.length; i++) {
  const newSelectOption1 = this.renderer.createElement('ion-select-option');
        const optionText1 = this.renderer.createText(indexis[i]);
      this.renderer.appendChild(newSelectOption1, optionText1);
       this.renderer.setAttribute(newSelectOption1, 'value', indexis[i]);
       // const CategorySelect = this.renderer.selectRootElement('#Category');
        const CategorySelect = document.querySelector('#Index');
        this.renderer.appendChild(CategorySelect, newSelectOption1);
}

  


  }

}
