import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../model/productDetail';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetail: ProductDetail[];
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.getProductList().subscribe(data => {
      this.productDetail = data;
      console.log(this.productDetail);
    }, 
    error => console.log(error)
    );
  }

}
