class User {
  constructor(){
    this.firstname = document.querySelector('#firstname').value,
    this.lastname = document.querySelector('#lastname').value,
    this.birthday = new Date(document.querySelector('#birthday').value);
  }
  
};
User.prototype.getLogin = function (i) {
  let login = myApp.users[i].firstname.slice(0, 1);
  login += myApp.users[i].lastname;
  myApp.users[i].login = login.toLowerCase();
  console.log(myApp.users[i].login);
};

User.prototype.getAge = function (i) {
  const currentDate = new Date().getFullYear();
  myApp.users[i].age = currentDate - myApp.users[i].birthday.getFullYear();
};

User.prototype.getPassword = function (i) {
  myApp.users[i].password = myApp.users[i].firstname.slice(0 , 1).toUpperCase();
  myApp.users[i].password += myApp.users[i].lastname.toLowerCase();
  myApp.users[i].password += myApp.users[i].birthday.getFullYear();
};

const myApp = {
  users: new Array(),
  Login: function () {
    let newUser = new User(firstname, lastname);
    this.users.push(newUser);
    let i = this.users.length - 1;
    newUser.getLogin(i);
    newUser.getAge(i);
    newUser.getPassword(i);
    console.log(myApp.users);
  }
};




