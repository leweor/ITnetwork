class TableData {
  constructor() {
    this.data = JSON.parse(localStorage.getItem("tableData")) || [];
  }

  addRow(firstName, lastName, phoneNumber, age) {
    const newRow = new TableRow(firstName, lastName, phoneNumber, age);
    this.data.push(newRow);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem("tableData", JSON.stringify(this.data));
  }

  renderTable() {
    const dataTable = document.getElementById("dataTable");
    dataTable.innerHTML = `
      <thead>
        <tr>
          <th scope="col" class="col">#</th>
          <th scope="col" class="col-4">Name</th>
          <th scope="col" class="col-3">Telephone</th>
          <th scope="col" class="col-3">Age</th>
          <th scope="col" class="col-1"></th>
        </tr>
      </thead>
      <tbody>
        ${this.data
          .map(
            (row, index) => `
              <tr>
                <th scope="row">${index + 1}</th>
                <td>${row.firstName} ${row.lastName}</td>
                <td>${row.phoneNumber}</td>
                <td>${row.age}</td>
                <td>
                  <button class="btn btn-outline-danger btn-sm delete-button" data-index="${index}">Delete</button>
                </td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    `;

    // delete button for each row
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        this.deleteRow(index);
      });
    });
  }

  deleteRow(index) {
    const dataTable = document.getElementById("dataTable");
    const tbody = dataTable.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");
    if (index >= 0 && index < rows.length) {
      tbody.removeChild(rows[index]);
      this.data.splice(index, 1); // delete data from array
      localStorage.setItem("tableData", JSON.stringify(this.data)); // refresh localStorage
      this.renderTable(); // render table again
    }
  }
}
