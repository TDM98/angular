import { Component } from "@angular/core";

@Component({
  selector: "app-xet-nghiem-cdha",
  template: `
      <div class="main">
      <app-header1></app-header1>
      <link rel="stylesheet" href="../assets//layout/styles/xet-nghiem-cdha.css">
      <div class="body-description">
        <h4 class="description-label1">Kỹ thuật</h4>
          <li>Máy CT Xoắn ốc 160 lát cắt của Toshiba (Model: TSX-303A)</li>
          <li>Số lát cắt: 160 X 0,5mm</li>
        <h4 class="description-label1">Mô tả</h4>
        <div class ="img-cdha">
          <img src="../assets/layout/images/graph.jpg">
        </div>
        <h4 class="description-label1">KẾT LUẬN</h4>
          <li>VIÊM SUNG HUYẾT HANG VỊ MỨC ĐỘ THỪA</li>
          <li>CLOTEST:</li>
      </div>
      </div>
    `,
    styles: ['main { position: end; padding:20px; overflow: hidden; border: 1px solid orange; background-color: white; width: 50%; margin:auto;}']
})
export class XetNghiemCDHAComponent {
}