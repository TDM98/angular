import { Component } from "@angular/core";

@Component({
  selector: "app-mri",
  template: `
      <div class="main">
      <app-header></app-header>
      <link rel="stylesheet" href="../assets//layout/styles/mri.css">
      <div class="body-description">
        <h4 class="description-label1">KẾT LUẬN</h4>
          <li>EMG HIỆN TẠI HỘI CHỨNG ỐNG CỔ TAY HAI BÊN MỨC ĐỘ TRUNG BÌNH</li>
      </div>
      </div>
    `,
    styles: ['main { position: end; padding:20px; overflow: hidden; border: 1px solid orange; background-color: white; width: 50%; margin:auto;}']
})
export class TDCNComponent {
}