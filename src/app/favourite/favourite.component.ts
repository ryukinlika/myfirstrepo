import { Component, OnInit } from "@angular/core";
import { scope } from "./../_shared/models/favourite";

@Component({
  selector: "app-favourite",
  templateUrl: "./favourite.component.html",
  styleUrls: ["./favourite.component.scss"]
})
export class FavouriteComponent implements OnInit {
  favo: any;
  temp: any;
  Scope: any[] = [];
  index: any;
  test: any;
  arr = [1, 2, 3, 4];

  constructor() {}

  ngOnInit() {
    this.loadFavo();
  }

  loadFavo() {
    this.favo = JSON.parse(localStorage.getItem("favourited"));
    console.log(this.favo);
  }

  removeFavo(data: any) {
    this.temp = data.id;
    this.index = this.favo.findIndex(record => record.id == this.temp);
    this.favo.splice(this.index, 1);
    localStorage.setItem("favourited", JSON.stringify(this.favo));
  }
}
