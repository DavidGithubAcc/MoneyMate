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


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,FormsModule,CommonModule],
})
export class Tab3Page {
  constructor(private http: HttpClient,private appStorageService : AppStorageService,private renderer: Renderer2) {}

  selectedContent: string = 'content1';


value : any;




  async getValue(a : string) {
    this.value = await this.appStorageService.get(a)
    return this.value
  }
  
  async ionViewDidEnter() {


    
    
    const thelist = document.querySelector('#listcat') as HTMLIonSelectElement;
    try {
    if (thelist.innerHTML == "") {

      
      this.loadtables() 
      
    }

  } catch(error) {

  }

  }

  segmentChanged() {
    console.log('Selected segment changed to: ');
    this.loadtables()
    // Perform any additional logic here
  }


  async loadtables() {

    setTimeout(async() => {

      const canvasElement = document.getElementById('acquisitions') as HTMLCanvasElement;

      // Check if a chart with the same ID already exists
      const existingChart = Chart.getChart(canvasElement);
      if (existingChart) {
        // If a chart exists, destroy it before creating a new chart
        existingChart.destroy();
      }
      

      var thedata = await this.getValue("profile")
      var categorydata = []
      var categorydatanumbers = []
      for (let i = 0; i < thedata.length; i++) {
        if (categorydata.includes(thedata[i][0])) {
          const theindex = categorydata.indexOf(thedata[i][0])
          categorydatanumbers[theindex] = categorydatanumbers[theindex] + thedata[i][3]
        }
        else {
          categorydata.push(thedata[i][0])
          categorydatanumbers.push(thedata[i][3])
        }
      }
      console.log(categorydata)
      console.log(categorydatanumbers)
    /////////////////////////////////////////////////////////////
      var categorydatasubcat = []
      var categorydatanumberssubcat = []
      for (let i = 0; i < thedata.length; i++) {
        if (categorydatasubcat.includes(thedata[i][1])) {
          const theindex = categorydatasubcat.indexOf(thedata[i][1])
          categorydatanumberssubcat[theindex] = categorydatanumberssubcat[theindex] + thedata[i][3]
        }
        else {
          categorydatasubcat.push(thedata[i][1])
          categorydatanumberssubcat.push(thedata[i][3])
        }
      }
      console.log(categorydatasubcat)
      console.log(categorydatanumberssubcat)
    ///////////////////////////////////////////////////////////////////////
      var categorydatawant = []
      var categorydatanumberswant = []
      for (let i = 0; i < thedata.length; i++) {
        if (categorydatawant.includes(thedata[i][2])) {
          const theindex = categorydatawant.indexOf(thedata[i][2])
          categorydatanumberswant[theindex] = categorydatanumberswant[theindex] + thedata[i][3]
        }
        else {
          categorydatawant.push(thedata[i][2])
          categorydatanumberswant.push(thedata[i][3])
        }
      }
      console.log(categorydatawant)
      console.log(categorydatanumberswant)
    
      const thecolors : string[] = ["red","purple","green","yellow","blue","orange","brown","pink","gray"]

  
      const listcat = document.getElementById('listcat') ;
      const listcat2 = document.getElementById('listsubcat') ;
      const listcat3 = document.getElementById('listwant') ;

    
      
    
    console.log(backgroundColornew)


    if (this.selectedContent == "content1") {

      var pieChartData: number[][] = categorydatanumbers;
      var pieChartLabels: string[] = categorydata;
      var pieChartType: string = 'doughnut';
      var backgroundColornew = []
    
      for (let i = 0; i < categorydatanumbers.length; i++) {
      //const randomIndex = Math.floor(Math.random() * thecolors.length)
      //backgroundColornew.push(thecolors[randomIndex])
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      backgroundColornew.push(`rgb(${r}, ${g}, ${b})`)
    
    }
     
      const ctx = document.getElementById('acquisitions') as HTMLCanvasElement;
      const chart2 = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: pieChartLabels,
          datasets: [
            {
              label: 'My First Dataset',
              data: pieChartData,
              backgroundColor: 
              backgroundColornew
              ,
              hoverOffset: 4,
            },
          ],
        },
      });


//




for (let i = 0; i < categorydatanumbers.length; i++) {

  var catof = document.createElement('ion-item');

var catoflabel = document.createElement('ion-label');

catoflabel.textContent = "Category"
var catoflabel2 = document.createElement('ion-label');
catoflabel2.textContent= categorydata[i]

var catoflabel3 = document.createElement('ion-label');
catoflabel3.textContent = categorydatanumbers[i]

catof.appendChild(catoflabel)
catof.appendChild(catoflabel2)
catof.appendChild(catoflabel3)
listcat.appendChild(catof)

}
//


    }

    
    if (this.selectedContent == "content2") {

      var pieChartData: number[][] = categorydatanumberssubcat;
      var pieChartLabels: string[] = categorydatasubcat;
      var pieChartType: string = 'doughnut';
      var backgroundColornew = []
    
      for (let i = 0; i < categorydatanumbers.length; i++) {
      //const randomIndex = Math.floor(Math.random() * thecolors.length)
      //backgroundColornew.push(thecolors[randomIndex])
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      backgroundColornew.push(`rgb(${r}, ${g}, ${b})`)
    
    }

    const ctx3 = document.getElementById('acquisitions2') as HTMLCanvasElement;
    const chart3 = new Chart(ctx3, {
      type: "doughnut",
      data: {
        labels: pieChartLabels,
        datasets: [
          {
            label: 'My First Dataset',
            data: pieChartData,
            backgroundColor: 
            backgroundColornew
            ,
            hoverOffset: 4,
          },
        ],
      },
    });

    



for (let i = 0; i < categorydatanumberssubcat.length; i++) {

  var catof = document.createElement('ion-item');

var catoflabel = document.createElement('ion-label');

catoflabel.textContent = "Category"
var catoflabel2 = document.createElement('ion-label');
catoflabel2.textContent= categorydatasubcat[i]

var catoflabel3 = document.createElement('ion-label');
catoflabel3.textContent = categorydatanumberssubcat[i]

catof.appendChild(catoflabel)
catof.appendChild(catoflabel2)
catof.appendChild(catoflabel3)
listcat2.appendChild(catof)

}
    
  }

  if (this.selectedContent == "content3") {

    var pieChartData: number[][] = categorydatanumberswant;
      var pieChartLabels: string[] = categorydatawant;
      var pieChartType: string = 'doughnut';
      var backgroundColornew = []
    
      for (let i = 0; i < categorydatanumbers.length; i++) {
      //const randomIndex = Math.floor(Math.random() * thecolors.length)
      //backgroundColornew.push(thecolors[randomIndex])
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      backgroundColornew.push(`rgb(${r}, ${g}, ${b})`)
    
    }
    const ctx4 = document.getElementById('acquisitions3') as HTMLCanvasElement;
    const chart4 = new Chart(ctx4, {
      type: "doughnut",
      data: {
        labels: pieChartLabels,
        datasets: [
          {
            label: 'My First Dataset',
            data: pieChartData,
            backgroundColor: 
            backgroundColornew
            ,
            hoverOffset: 4,
          },
        ],
      },
    });

    for (let i = 0; i < categorydatanumberswant.length; i++) {

      var catof = document.createElement('ion-item');
    
    var catoflabel = document.createElement('ion-label');
    
    catoflabel.textContent = "Category"
    var catoflabel2 = document.createElement('ion-label');
    catoflabel2.textContent= categorydatawant[i]
    
    var catoflabel3 = document.createElement('ion-label');
    catoflabel3.textContent = categorydatanumberswant[i]
    
    catof.appendChild(catoflabel)
    catof.appendChild(catoflabel2)
    catof.appendChild(catoflabel3)
    listcat3.appendChild(catof)
    
    }
    
    
    
  }
    
    
    
    },0);
    
  }




}
