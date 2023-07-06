import { Component } from "@angular/core";

@Component({
  selector: "app-ct",
  template: `
      <div class="main">
      <app-header></app-header>
      <link rel="stylesheet" href="../assets//layout/styles/ct.css">
      <div class="body-description">
        <h4 class="description-label1">Kỹ thuật</h4>
          <li>Máy CT Xoắn ốc 160 lát cắt của Toshiba (Model: TSX-303A)</li>
          <li>Số lát cắt: 160 X 0,5mm</li>
        <h4 class="description-label1">Mô tả</h4>
          <ul>VÙNG TRÊN
            <li>Không tổn thương khu trú</li>
            <li>Không tổn thương khu trú</li>
            <li>Không tổn thương khu trú</li>
          </ul>
          <ul>VÙNG DƯỚI
            <li>Không tổn thương khu trú</li>
            <li>Không tổn thương khu trú</li>
            <li>Không tổn thương khu trú</li>
          </ul>
          <ul>TỔN THƯƠNG KHÁC
            <li></li>
            <li></li>
          </ul>
        <h4 class="description-label1">KẾT LUẬN</h4>
          <li>VIÊM XOANG HÀM - SÀNG</li>
          <li>CHƯA THẤY HÌNH ẢNH BẤT THƯỜNG NỘI SỌ TRÊN PHIM</li>
      </div>
      </div>
    `,
    styles: ['main { position: end; padding:20px; overflow: hidden; border: 1px solid orange; background-color: white; width: 50%; margin:auto;}']
})
export class CTComponent {
}