import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  products: any[];
  product: number = 1;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllSP().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  deleteProduct(productId: string): void {
    this.productService.deleteSP(productId).subscribe(
      () => {
        // Xóa sản phẩm thành công, cập nhật danh sách sản phẩm
        this.getProducts();
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
