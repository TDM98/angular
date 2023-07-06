import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
      <link rel="stylesheet" href="../assets//layout/styles/header.css">
      <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap" rel="stylesheet">
      <div class="header">
        <div class="app-header">
          <h3 class="title">SỞ Y TẾ TỈNH BẠC LIÊU</h3>  
          <h3 class="title1">BỆNH VIỆN ĐA KHOA THANH VŨ MEDIC BẠC LIÊU</h3>
          <h3 class="title">Số 02DN, Đường Tránh Quốc Lộ 1A, Khóm 1, Phường 7, TP Bạc Liêu</h3>
          </div>

          <div class="header-right">
          <img src="../assets/layout/images/logo.png" alt="Img" width="180px" height="50px">
            <button class="noselect">B20003631</button>
          </div>
       

      </div>

      <div class="body-result">
      <h2 class="body-header">PHIẾU KẾT QUẢ HÌNH ẢNH</h2>

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
    `,
})
export class HeaderComponent {
}