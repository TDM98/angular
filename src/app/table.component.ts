import { Component } from "@angular/core";

@Component({
  selector: 'app-table',
  template: `
    <link rel="stylesheet" href="../assets//layout/styles/result-table.css">
    <div class="table-container">
    <table class="table">
    <tr>
      <th>Tên yêu cầu</th>
      <th>Mô tả</th>
    </tr>
    <tr>
    <th>Mô tả</th>
  </tr>
  <tr>
  <th>+ Vùng tổn thương</th>
  <th>+ Vùng tổn thương</th>
</tr>
    <tr>
      <td>Tổn thương khu trú</td>
      <td><pre>
      Không tổn thương khu trú
      Không tổn thương khu trú
      Không tổn thương khu trú
      Không tổn thương khu trú
      </pre>
      </td>
    </tr>
  </table>
  </div>
    `
})
export class TableComponent { }