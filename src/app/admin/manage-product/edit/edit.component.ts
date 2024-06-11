import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productId: string;
  product: any = {}; // Khởi tạo đối tượng product để lưu thông tin sản phẩm

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    // Lấy productId từ URL
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
  }

  updateProduct(): void {
    this.productService.updateSP(this.productId, this.product).subscribe(
      () => {
        // Cập nhật sản phẩm thành công
        console.log('Product updated successfully.');
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  }
}
