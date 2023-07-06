import { Component } from "@angular/core";

@Component({
  selector: "app-sieu-am-2",
  template: `
      <div class="main">
      <app-header></app-header>
      <link rel="stylesheet" href="../assets//layout/styles/sieu-am-2.css">
      <div class="body-description-container">
        <div class="body-description">
            <h4 class="description-label1">Mô tả</h4>
            <h4 class="description-label">MÔ TẢ</h4>
                <ul>VÙNG TỔN THƯƠNG
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                </ul>
                <ul>TÌNH TRẠNG NHAU ÓI:
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                </ul>
                <ul>CHỈ SỐ ĐO:
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                </ul>
                <ul>DỰ ĐOÁN THAI:
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                </ul>
                <ul>DỊ TẬT BẤT THƯỜNG:
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                    <li>Không tổn thương khu trú</li>
                </ul>
            <h3 class="description-label1">KẾT LUẬN</h3>
                <p style="font-weight:bold">HIỆN TẠI SIÊU ÂM DOPPLER MÀU PHÂN MÊM VÙNG: CHƯA PHÁT HIỆN BẤT THƯỜNG</p>
        </div>
        
        <div class="body-description-image">
            <img src="../assets/layout/images/Sieu-am-2D.jpg" alt="sieu-am-2-hinh">
            <img src="../assets/layout/images/Sieu-am-2D.jpg" alt="sieu-am-2-hinh">
        </div>
        
        </div>
    

      </div>
    `,
    styles: ['main { position: end; padding:20px; overflow: hidden; border: 1px solid orange; background-color: white; width: 50%; margin:auto;}']
})
export class SieuAm2Component {
}