import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  tutorials?:Tutorial[];
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(){
    this.tutorialService.getAll()
      .subscribe(
        data=> {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(){
    this.retrieveTutorials();
    this.currentTutorial=undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number){
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(){
    this.tutorialService.deleteAll()
      .subscribe(
        (response: any)=>{
          console.log(response);
          this.refreshList();
        },
        (error: any)=>{
          console.log(error);
        });
  }

  searchTitle(){
    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data=>{
          this.tutorials=data;
          console.log(data);
        },
        error=>{
          console.log(error);
        });
  }
    
  

}
