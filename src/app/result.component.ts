import { Component } from "@angular/core";

@Component({
  selector: "app-result",
  template: `
      <link rel="stylesheet" href="../assets//layout/styles/result-body.css">
      
      <div class="body-result">
      <h1 class="body-header">PHIẾU KẾT QUẢ HÌNH ẢNH</h1>

      <div class ="line1">
        <p>Bệnh nhân: Nguyễn Văn A</p>
        <p>Tuổi: 50</p>
        <p>Giới tính: Nam</p>
      </div>
      
      <div class ="line2">
        <p>Địa chỉ: 95 TRAN QUANG KHAI STREET, DISTRICT 1</p>
      </div>

      <div class ="line3">
        <p>BS chỉ định: Nguyễn Văn B</p>
        <p>Nơi gửi: 95 TRAN QUANG KHAI STREET, DISTRICT 1</p>
      </div>

      <div class="line4">
        <p>Ngày chỉ định: 7/5/2023 9:05:39 am</p>
        <p>Ngày thực hiện: 10/5/2023 11:23:32 am</p>
      </div>

      <div class="line5">
        <p>Chẩn đoán: </p>
      </div>

      <div class="line6">
        <p>Nội dung: Siêu âm cơ phần mềm vùng cổ mặt</p>
      </div>
      </div>
      <hr class="hr-style">
      <div class="body-description">
        <h2 class="description-label1">Mô tả</h2>
        <h2 class="description-label">MÔ TẢ</h2>
        <p>+ VÙNG TỔN THƯƠNG</p>
        <p>* Không tổn thương khu trú</p>
        <p>* Không tổn thương khu trú</p>
        <p>* Không tổn thương khu trú</p>
        <p>* Không tổn thương khu trú</p>
        <p>* Không tổn thương khu trú</p>
        <p>* Không tổn thương khu trú</p>
        <p>* Không tổn thương khu trú</p>
        <h2 class="description-label1">KẾT LUẬN</h2>
        <p>HIỆN TẠI SIÊU ÂM DOPPLER MÀU PHÂN MÊM VÙNG: CHƯA PHÁT HIỆN BẤT THƯỜNG</p>
      </div>
    `,
})
export class ResultComponent {
}