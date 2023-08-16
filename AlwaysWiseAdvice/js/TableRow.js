class TableRow {
    constructor(firstName, lastName, phoneNumber, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNumber = phoneNumber;
      this.age = age;
    }
  
    toString() {
      return `${this.firstName} ${this.lastName}, ${this.phoneNumber}, ${this.age}`;
    }
  }