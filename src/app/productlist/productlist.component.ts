import { Component, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../entities/Product';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit { 
  @ViewChild(StarComponent) starComponent: StarComponent;
  p: number = 1;
  products: IProduct[] = [
    {
      productId: 1,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2016",
      description: "Leaf rake with 48-inch wooden handle.",
      price: 19.95,
      starRating: 3.2,
      imageUrl: "https://openclipart.org/image/400px/26215",
      isVisible: true
    },
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2016",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl: "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
      isVisible: true
    },
    {
      productId: 5,
      productName: "Hammer",
      productCode: "TBX-0048",
      releaseDate: "May 21, 2016",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageUrl: "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
      isVisible: true
    },
    {
      productId: 8,
      productName: "Saw",
      productCode: "TBX-0022",
      releaseDate: "May 15, 2016",
      description: "15-inch steel blade hand saw",
      price: 11.55,
      starRating: 3.7,
      imageUrl: "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
      isVisible: true
    },
    {
      productId: 10,
      productName: "Video Game Controller",
      productCode: "GMG-0042",
      releaseDate: "October 15, 2015",
      description: "Standard two-button video game controller",
      price: 35.95,
      starRating: 4.6,
      imageUrl: "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
      isVisible: true
    }
  ];

  listProduct:IProduct[]=[];

  constructor() { }
  ngOnInit(): void {
  this.listProduct=this.products;
  }
  _listFilter: string;
  get listFilter(): string {
  return this._listFilter;
  }
  set listFilter(value: string) {
  this._listFilter = value;
  this.products = this.listFilter ?
  this.performFilter(this.listFilter) : this.listProduct;
  }
  performFilter(filterBy: string): IProduct[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.listProduct.filter((product: IProduct) =>
  product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  
  toggleImage(product: IProduct): void {
    product.isVisible = !product.isVisible;
  }
  setProductRating(products: IProduct): void {
    this.starComponent.setRating(products.starRating);
  }
  ratingMessage: string = '';
  onRatingClicked(message: string): void {
    this.ratingMessage = message;

  }
}
