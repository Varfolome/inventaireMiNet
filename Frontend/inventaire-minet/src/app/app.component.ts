import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventaire-minet';
}

/*const API_URL = "";
const form = document.getElementById('test-form');

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  const FormData data = new FormData(form);
  const content = data.get('test');
  const req = {
    content
  };

fetch(API_URL, {
  method: 'POST',
  body: JSON.stringify(req),
  headers: {
    'content-type' : 'application/json'
  }
});
});
*/
