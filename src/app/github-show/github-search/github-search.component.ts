import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  @Output() githubSearch = new EventEmitter();
  
  name:string = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
  	this.githubSearch.emit(this.name);
  	this.name = "";
  }

}
