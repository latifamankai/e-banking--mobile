import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OperationService} from '../../shared/services/operation.service';
import {Operation} from '../../shared/model/operation';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.page.html',
  styleUrls: ['./operation.page.scss'],
})
export class OperationPage implements OnInit {
  operations: Operation[];

  constructor(private activatedRoute: ActivatedRoute,
              private operationService: OperationService) { }

  ngOnInit() {
    const idCompte = this.activatedRoute.snapshot.paramMap.get('id')
    this.operationService.getByCompte(idCompte).subscribe(data => {
      this.operations = data;
    }, ex => console.log(ex));
  }

}
