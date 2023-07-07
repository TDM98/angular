import { Component } from "@angular/core";

@Component({
  selector: "app-xet-nghiem-chi-so",
  template: `
      <div class="main">
      <app-header></app-header>
      <link rel="stylesheet" href="../assets//layout/styles/xet-nghiem-chi-so-table.css">
      <div class="table-container">
    <table class="table" border="1" style="border-collapse: collapse;">
    <thead>
      <tr>
        <th>YÊU CẦU XÉT NGHIỆM</th>
        <th>CHBT</th>
        <th>Kết quả</th>
        <th>Đơn vị tính</th>
        <th>Tiền sử</th>
      </tr>
      <tr>
        <th colspan="5">XN SINH HÓA - Máy Sinh Hóa Tự Động - AU 680 (TVM .XNSH.01)/Mẫu máu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Đo hoạt độ ALT (GPT) [Máu]</td>
        <td>Nữ:<31 ; Nam:<40</td>
        <td>43.0</td>
        <td>U/L</td>
        <td>97.0 (12/04/23)</td>    
      </tr>
      <tr>
        <td>Đo hoạt độ AST (GOT) [Máu]</td>
        <td>Nữ:<31 ; Nam:<40</td>
        <td>43.0</td>
        <td>U/L</td>
        <td>97.0 (12/04/23)</td>   
      </tr>
      <tr>
        <td>Đo hoạt độ GGT (Gama Glutamyl Transferase) [Máu]</td>
        <td>Nữ:<31 ; Nam:<40</td>
        <td>43.0</td>
        <td>U/L</td>
        <td>97.0 (12/04/23)</td>   
      </tr>
      <tr>
      <td>Glucose [Máu] [Bất kỳ] - mmol/L</td>
      <td>Nữ:<31 ; Nam:<40</td>
      <td>43.0</td>
      <td>U/L</td>
      <td>97.0 (12/04/23)</td>   
    </tr>
      <tr>
        <td>Creatinine - umol/L</td>
        <td>Nữ:<31 ; Nam:<40</td>
        <td>43.0</td>
        <td>U/L</td>
        <td>97.0 (12/04/23)</td>   
      </tr>
      <tr>
        <td>eGFR</td>
        <td>Nữ:<31 ; Nam:<40</td>
        <td>43.0</td>
        <td>U/L</td>
        <td>97.0 (12/04/23)</td>   
      </tr>
    </tbody>
  </table>
  <div>
    `,
})
export class XetNghiemChiSoComponent {
}