import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() HeadArray :any[] = [];
  @Input() GridArray :any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  edit(item: any) {
    debugger;
    this.onEdit.emit(item);
  }
  delete(item: any) {
    debugger;
    this.onDelete.emit(item);
  }
}
