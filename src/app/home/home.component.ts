import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../model/productDetail';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productDetail: ProductDetail[];
  content: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.userService.getProductList().subscribe(data => {
      this.productDetail = data;
      console.log(this.productDetail);
    }, error => console.log(error)
    );
  }
}
