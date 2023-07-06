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
        <th>Tên yêu cầu</th>
        <th>Mô tả</th>
      </tr>
      <tr>
        <th>Mô tả</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>+ Vùng tổn thương</td>
        <td>+ Vùng tổn thương</td>
      </tr>
      <tr>
        <td>Tổn thương khu trú</td>
        <td><pre>
          * Không tổn thương khu trú
          * Không tổn thương khu trú
          * Không tổn thương khu trú
          * Không tổn thương khu trú
        </pre></td>
      </tr>
    </tbody>
  </table>
  <div>
    `,
    styles: ['main { position: end; padding:20px; overflow: hidden; border: 1px solid orange; background-color: white; width: 50%; margin:auto;}']
})
export class XetNghiemChiSoComponent {
}