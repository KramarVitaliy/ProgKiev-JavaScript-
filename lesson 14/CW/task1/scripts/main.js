function user(context) {
  console.log(this);
}

const userOne = {
  name: "Vitaliy",
  surname:  "Kramar",
  age : "20",
  out(phone = 12, email) {
    console.group("Hello");
    console.log(`Hello! I am ${this.name} `);
    console.log(`My surname ${this.surname}`);
    console.log(`My age ${this.age}`);
    console.log(phone);
    console.log(email);
    console.groupEnd();
  }
}


const userTwo = {
  name: "Philip",
  surname:  "Seven",
  age : "80"
}


userOne.out.apply(userTwo, ["0645789034", "kram@gmail.com"]);

