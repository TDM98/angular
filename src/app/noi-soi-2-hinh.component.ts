import { Component } from "@angular/core";

@Component({
  selector: "app-noi-soi-2-hinh",
  template: `
      <div class="main">
      <app-header></app-header>
      <link rel="stylesheet" href="../assets//layout/styles/noi-soi-2.css">
      <div class="body-description">
        <div class="row">
          <div class="column">
            <img src="../assets/layout/images/Sieu-am-2D.jpg" alt="Img" style="width:100%">
          </div>
          <div class="column">
            <img src="../assets/layout/images/Sieu-am-2D.jpg" alt="Img" style="width:100%">
          </div>
          <div class="column">
            <img src="../assets/layout/images/Sieu-am-2D.jpg" alt="Img" style="width:100%">
          </div>
        </div>
        <h4 class="description-label1">Kỹ thuật</h4>
          <li>Máy CT Xoắn ốc 160 lát cắt của Toshiba (Model: TSX-303A)</li>
          <li>Số lát cắt: 160 X 0,5mm</li>
        <h4 class="description-label1">Mô tả</h4>
          <ul>
            <li>Không tổn thương khu trú</li>
            <li>Không tổn thương khu trú</li>
            <li>Không tổn thương khu trú</li>
            <li>Không tổn thương khu trú</li>
            <li>Không tổn thương khu trú</li>
            <li>Không tổn thương khu trú</li>
            </ul>
        <h4 class="description-label1">KẾT LUẬN</h4>
          <li>VIÊM HỌNG CẤP; VIÊM AMIDAN MẠN</li>
      </div>
      </div>
    `,
    styles: ['main { position: end; padding:20px; overflow: hidden; border: 1px solid orange; background-color: white; width: 50%; margin:auto;}']
})
export class NoiSoi2Component {
}