import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  newProduct: any = {}; 

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addProduct(): void {
    this.productService.createSP(this.newProduct).subscribe(
      (data) => {
       
        console.log('Product added successfully.');
      },
      (error) => {
       
        console.error('Error adding product:', error);
      }
    );
  }
}
