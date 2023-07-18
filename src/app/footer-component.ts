import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
  <link rel="stylesheet" href="../assets//layout/styles/footer.css">
  <!-- Remove the container if you want to extend the Footer to full width. -->

  <!-- Footer -->
  <footer
          class="text-center text-lg-start text-dark"
          style="background-color: #EEE9DD "
          >
          <div class="text-center p-3 text-white" style="background-color: white "
          >
     </div>
   
  <!-- Grid container -->
    <!-- Copyright -->
    <div
         class="text-center p-3 text-white"
         style="background-color: #CD9A25 "
         >
      © 2023 Copyright: Bản quyền thuộc về
      <a class="text-white" href="https://benhvienthanhvubaclieu.com/"
         >benhvienthanhvubaclieu.com</a
        >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->

<!-- End of .container -->
    `,
})
export class FooterComponent {
}