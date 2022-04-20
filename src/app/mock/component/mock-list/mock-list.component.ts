import { Component, OnInit } from '@angular/core';
import { MockService } from '../../mock.service';
import { Mock } from '../../model/mock';

@Component({
  selector: 'app-mocks',
  templateUrl: './mock-list.component.html',
  styleUrls: ['./mock-list.component.scss']
})
export class MockListComponent implements OnInit {
  mocks: Mock[] = [];

  constructor(private mockService: MockService) {
    console.log('agds');
    this.mockService.listar().subscribe(
      (mocks: Mock[]) => {
        console.log(mocks);
        this.mocks = mocks;
      }
    );
  }

  ngOnInit() {
    console.log('agds');
  }

}
