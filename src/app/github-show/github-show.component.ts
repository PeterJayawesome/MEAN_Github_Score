import { Component, OnInit } from '@angular/core';
import { GitscoreService } from './gitscore.service';
@Component({
  selector: 'app-github-show',
  templateUrl: './github-show.component.html',
  styleUrls: ['./github-show.component.css']
})
export class GithubShowComponent implements OnInit {
  
  score:number;

  constructor(private _taskService: GitscoreService) {
  	this.score = this._taskService.score;
  }

  ngOnInit() {
  }

  githubSearch(name){
  	console.log(name);
  	this._taskService.name = name;
  	this._taskService.SearchName((name)=>{this.score = this._taskService.score});
  }

}
