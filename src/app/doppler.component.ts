import { Component } from "@angular/core";

@Component({
  selector: "app-result",
  template: `
      <div class="main">
      <app-header></app-header>
      <link rel="stylesheet" href="../assets//layout/styles/doppler.css">
      <div class="body-description">
        <h4 class="description-label1">Mô tả</h4>
        <h4 class="description-label">MÔ TẢ</h4>
        <ul>VÙNG TỔN THƯƠNG
        <li>Không tổn thương khu trú</li>
        <li>Không tổn thương khu trú</li>
        <li>Không tổn thương khu trú</li>
        <li>Không tổn thương khu trú</li>
        <li>Không tổn thương khu trú</li>
        <li>Không tổn thương khu trú</li>
        <li>Không tổn thương khu trú</li>
        </ul>
        <h3 class="description-label1">KẾT LUẬN</h3>
        <p>HIỆN TẠI SIÊU ÂM DOPPLER MÀU PHÂN MÊM VÙNG: CHƯA PHÁT HIỆN BẤT THƯỜNG</p>
      </div>
      </div>
    `,
    styles: ['main { position: end; padding:20px; overflow: hidden; border: 1px solid orange; background-color: white; width: 50%; margin:auto;}']
})
export class DopplerComponent {
}