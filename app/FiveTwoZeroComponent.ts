/**
 * Created by deronlee on 5/20/16.
 */
import {Component, Input, OnChanges, ViewChild} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Content} from './content.interface';
import {GameService, SoundService} from './services';

@Component({
    selector: 'five-two-zero',
    template: `
  <div class='five-two-zero' *ngIf="content">
    <div class="row content-header">
      <div class="col-md-5">
        <span class="content-name">{{content.position}}</span>
        &nbsp;
      </div>
      <div class="col-md-7">
      </div>
    </div>

    <div class="row content-content">
      <div class="col-md-12" style="height: 15%">
        <a *ngIf="content.audioUrl" class="btn btn-default btn-sm" (click)='play()'><i class="fa fa-play"></i></a>
        <div>
          <span>{{ content.content }}</span>

          <span style="font-style: italic" *ngIf="content.contentNode">/ {{content.contentNode}}</span>
        </div>

      </div>
      <div class="col-md-12" style="height: 10px"> </div>
      <div class="col-md-4">
        <button class="btn btn-primary" style="border: none" (click)="previousContent()">Prev</button>
        <button class="btn btn-primary" style="border: none" (click)="nextContent()">Next</button>
      </div>
      <div class="col-md-12" style="height: 10px"></div>
      <div class="col-md-12">
        <img class="img-responsive" *ngIf="content.imageUrl !=''" [src]="content.imageUrl"/>
      </div>
    </div>
    
    
    
  </div>
  `,
    directives: [CORE_DIRECTIVES]
})
export class FiveTwoZeroComponent implements OnChanges {
    @Input('content') content:Content;
    private delay = 500;
    private videoWidth = 320;
    private videoHeight = 240;

    constructor(private gamerService: GameService
                ) {

    }

    ngOnChanges(changes: any) {
        
    }

    ngOnInit() {
        this.content = this.gamerService.getCurrentContent()

        this.gamerService.onContentChanged().subscribe((content: Content) => {
            this.content = content
        }
        )
    }

    previousContent() {
        this.gamerService.previousContent();
    }

    nextContent() {
        this.gamerService.nextContent();

    }
}