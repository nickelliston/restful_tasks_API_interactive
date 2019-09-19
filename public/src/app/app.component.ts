import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API (Interactive)';
  tasks;
  task = '';
  detail = false;

  // tslint:disable-next-line: variable-name
  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    // this.getTasksFromService();
    // this.getTaskFromService(idx);
  }

  getTasksFromService(): void {
    console.log('Button has been clicked!');
    const tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      console.log('Got tasks!', data);
      this.tasks = data;
    });
  }

  getTaskFromService(idx): void {
    const tempObservable = this._httpService.getTaskById(this.task);
    tempObservable.subscribe(data => {
      console.log('Got task by Id!', data[idx]);
      this.task = this.tasks[idx];
      this.detail = true;
    });
  }

}
