import { HighlightsService } from './../../services/highlights.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})

export class HighlightsComponent implements OnInit, OnDestroy {

  public info = {
    totalBeckers: 0,
    fundedProjects: 0,
    liveProjects: 0,
  };
  activateSubscription: Subscription;
  today: Date;

  constructor(private highlightSerivce: HighlightsService) { }

  ngOnInit() {
    this.today = new Date();
    this.activateSubscription = this.highlightSerivce.getInfo().subscribe(
      (_info: any) => {
        this.info = _info;
      }
    );
  }

  ngOnDestroy(): void {
    this.activateSubscription.unsubscribe();
  }

  onAddProject(): void {
    this.highlightSerivce.addFundedProjects();
  }
}
