import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService,private router:Router,public activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;        
      }
    )
  }
}



// ngOnInit(): void {
//   this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
//     if (paramMap.has("productId")) {
//       this.mode = "update";
//       this.pid = paramMap.get("productId");
//       this.title='Update Product';
//       // this.isLoading = true;
//       this.productService.getSingleProduct(this.pid).subscribe(product => {
//         // this.isLoading = false;
//         this.singleProduct = JSON.parse(JSON.stringify(product)) ;
//         console.log(this.singleProduct);
//         let {
//           productId,
//           productName,
//           productCode,
//           releaseDate,
//           description,
//           price,
//           starRating,
//           imageUrl  }=this.singleProduct.product;

//           this.productItem= new ProductModel(productId,productName,productCode,releaseDate,description,price,starRating,imageUrl);
//       });


//     } else {
//       this.mode = "create";
//       this.pid = null;
//       this.title='Create Product';
//       this.productItem= new ProductModel(null,null,null,null,null,null,null,null,);
//     }
//   });
// }