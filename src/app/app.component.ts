import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public Data : string = ""

  public displayLength()
  {
    const inputElement = document.getElementById('input') as HTMLInputElement
    this.Data = inputElement.value;
  }
}
