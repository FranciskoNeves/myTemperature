import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.scss']
})
export class ThermometerComponent {

  @Input() minTemperature: number = 0;
  @Input() maxTemperature: number = 100;
  @Input() targetTemperature: number = 0;
  

  calculateRotation(){
    if(this.targetTemperature >= this.maxTemperature){
      return {
        transform: 'rotate(' + 225 + 'deg)'
      }
    } else{
      return {
        transform: 'rotate(' +  (((this.targetTemperature-this.minTemperature) * 270)/(this.maxTemperature - this.minTemperature) -45)  + 'deg)'
      }
    }
  }

}
