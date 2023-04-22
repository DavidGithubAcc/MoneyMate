import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab4Page {
  constructor(private http: HttpClient) {}










ionViewDidEnter() {

  this.http.get<any[][]>('https://moneymate.tech/').subscribe(
    data => {
      console.log(data); // this will log the array of arrays to the console

      
      const thelist = document.getElementById('newlist')
      //theitem.setAttribute("class", "flex-container");

      if (thelist.innerHTML == "") {

      for (var i = 0; i < data.length; i++) {

        var theitem = document.createElement('ion-item')
      
        var theimgthumb = document.createElement('ion-thumbnail')
        theimgthumb.setAttribute("slot","start")
      
        var theimg = document.createElement('img')
        theimg.setAttribute("src",data[i][2])
      
        var thediv = document.createElement('div')
        thediv.style.display = 'flex';
        thediv.style.flexDirection = 'column';
      
        var theheader = document.createElement('ion-label')
theheader.innerHTML = '<a href="' + data[i][3] + '">' + data[i][0] + '</a>';
theheader.setAttribute("slot","end")
theheader.style.textDecoration = "underline";
        

        
      
        var thetext = document.createElement('ion-label')
        thetext.textContent = data[i][1]
        thetext.style.marginTop = '5px';
        thetext.style.display = '-webkit-box'; /* set the display to a box layout */
        thetext.style.webkitBoxOrient = 'vertical';
thetext.style.webkitLineClamp = '3'; /* set the maximum number of lines to 3 */
thetext.style.overflow = 'hidden'; 
thetext.style.minHeight = "150%"

      
        thediv.appendChild(theheader)
        thediv.appendChild(thetext)
      
        theimgthumb.appendChild(theimg)
      
        theitem.appendChild(theimgthumb)
        theitem.appendChild(thediv)

       

        //theitem.innerHTML = '<a href="https://google.com">Click here</a> to go to example.com';

        thelist.appendChild(theitem)
      



      }


    }




    },
    error => {
      console.log(error); // this will log any errors to the console
    }
  );





}

async presentlink(a) {
console.log(a)

}



}
