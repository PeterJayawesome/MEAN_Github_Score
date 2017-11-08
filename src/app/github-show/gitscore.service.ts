import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class GitscoreService {
  
  tasks = ['drink coffee or tea','build a web app'];
  
  score = 0;

  result = "";

  name = "";

  constructor(private _http: Http) { }


  retrieveTasks(){
  	return this.tasks;
  }

  createTask(task){
  	this.tasks.push(task);
  }

  SearchName(callback){
  	this._http.get('https://api.github.com/users/'+this.name).subscribe(
  		(response)=>{
  			this.result = response.json();
  			this.score = this.result.public_repos+this.result.followers;
  			callback(this.name);
  		},
  		(error)=>{
  			console.log("Error!");
  			console.log(error);
  		}
  	);
  }
}
