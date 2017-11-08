import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-result',
  templateUrl: './github-result.component.html',
  styleUrls: ['./github-result.component.css']
})
export class GithubResultComponent implements OnInit {
  
  @Input() score: number;

  constructor() { }


  ngOnInit() {
  }

}
