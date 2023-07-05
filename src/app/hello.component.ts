import { Component } from "@angular/core";

@Component({
  selector: "app-hello",
  template: `
      <link rel="stylesheet" href="../assets//layout/styles/banner.css">
      <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap" rel="stylesheet">
      <div class="header">
        <div class="app-header">
          <h2 class="title">SỞ Y TẾ TỈNH BẠC LIÊU</h2>  
          <h2 class="title1">BỆNH VIỆN ĐA KHOA THANH VŨ MEDIC BẠC LIÊU</h2>
          <h3 class="title">Số 02DN, Đường Tránh Quốc Lộ 1A, Khóm 1, Phường 7, TP Bạc Liêu</h3>
          </div>
        <div>
          <button class="noselect">Barcode</button>
        </div>
      </div>
    `,
})
export class HelloComponent {
}