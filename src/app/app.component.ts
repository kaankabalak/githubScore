import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  user = {
    username: '',
    score: 0,
    isExists: null
  }
  title = 'app';

  constructor(private _httpService: HttpService){}

  getTasks(){
    this._httpService.retrieveUser(this.user.username)
    .then( data => { this.user.score = data.public_repos + data.followers;
                     console.log(this.user.score); 
                     this.user.isExists = true;  
                   })
    .catch( err => { console.log('user not found'); 
                    this.user.isExists = false;  
                   })
  }
}
