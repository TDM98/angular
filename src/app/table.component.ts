import { Component } from "@angular/core";

@Component({
  selector: 'app-table',
  template: `
    <link rel="stylesheet" href="../assets//layout/styles/result-table.css">
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
    <p>test</p>
  </div>
  </div>
    `
})
export class TableComponent { }