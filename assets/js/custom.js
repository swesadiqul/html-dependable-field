const sameAsPermanentCheckbox = document.getElementById("sameAsPermanent");
const presentAddressFields = document.getElementById("presentAddress");

sameAsPermanentCheckbox.addEventListener("change", function () {
  if (sameAsPermanentCheckbox.checked) {
    presentAddressFields.style.display = "none";
  } else {
    presentAddressFields.style.display = "block";
  }
});
