import { Component, OnInit } from '@angular/core';
import {LivestreamsService} from '../../providers/livestreams.service';

@Component({
  selector: 'app-streamer-sidebar',
  templateUrl: './streamer-sidebar.component.html',
  styleUrls: ['./streamer-sidebar.component.css']
})
export class StreamerSidebarComponent implements OnInit {

  constructor(public streams:LivestreamsService) { }

  ngOnInit() {
  }

}
