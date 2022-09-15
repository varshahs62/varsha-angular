import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ServicesService } from "../shared/services.service";
import { ButtonRendererComponent } from '../button-renderer.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  

  public itemList: any = [];
  public itemId: any;
  updateItem: any;

 

  constructor(public serv: ServicesService) {
}

public columnDefs:ColDef []=[
  {
    field :"product_code",headerName:"Id",
  },
  {
    field :"product_name",checkboxSelection:true
  },
  {
    field :"price"
  },
  {
    field :"description"
  },
  
  
  
]

  ngOnInit(): void {
    this.getInventoryItems();
  }

  // Get the Items to List
  getInventoryItems(){
    this.serv.getAllItem().subscribe(data => {
      this.itemList = data;
    });
  }

  // Delete the Item by id
  deleteItem(id: any){
    this.serv.deleteItem(id).subscribe(data => {
      this.getInventoryItems();
    });
  }

}
