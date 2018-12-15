(function () {
   'use strict';
   window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
         form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
               event.preventDefault();
               event.stopPropagation();
            }
            form.classList.add('was-validated');
         }, false);
      });
   }, false);
})();
function checkpass() {
   var password = document.getElementById("userpassword").value;
   var passwordConfirm = document.getElementById("userpassword2").value;
   var innerAlert = document.getElementById('alertDanger');
   var alertWrongP = document.getElementsByClassName('invalid-feedback')[4];
   if (password !== passwordConfirm) {
      alertWrongP.previousElementSibling.style.border = "1px solid red";
      alertWrongP.style.display = "block";
      return false;
   }
   return true;
}