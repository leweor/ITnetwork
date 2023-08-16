const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const phoneNumberInput = document.getElementById("phoneNumber");
const ageInput = document.getElementById("age");
const addButton = document.getElementById("addButton");

const tableData = new TableData();

function addRowAndSave() {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const phoneNumber = phoneNumberInput.value;
  const age = ageInput.value;

  tableData.addRow(firstName, lastName, phoneNumber, age);

  tableData.renderTable();

  firstNameInput.value = "";
  lastNameInput.value = "";
  phoneNumberInput.value = "";
  ageInput.value = "";
}

addButton.addEventListener("click", addRowAndSave);

tableData.renderTable();

function findName() {
  // Declare variables
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
//changing card image
let i = 0;
let image = document.getElementById("card_image");
var imgs = new Array("img/person_man.png", "img/person_woman.png");
function imgsrc() {
  i++;
  i %= imgs.length;
  image.src = imgs[i];
}

//Validation
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
