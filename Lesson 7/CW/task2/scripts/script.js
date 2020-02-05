function createNewUsers(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

let firstname = prompt(`Enter your name.`);
let lastname = prompt(`And surname.`);
let newUser = new createNewUsers(firstname, lastname);

newUser.getLogin = function () {
  newUser.login = newUser.firstname.slice(0, 1);
  newUser.login += newUser.lastname;
  console.log(newUser.login.toLowerCase());
}