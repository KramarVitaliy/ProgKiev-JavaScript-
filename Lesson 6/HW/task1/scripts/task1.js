class Human {
  constructor(name, age, debt){
    this.name = name;
    this.age = age;
    this.debt = debt;
  }
  
}

const humans = new Array();

const myApp = {
  createHuman: function() {
    let name = prompt(`Name`);
    let age = +prompt(`Age`);
    const chelovek = new Human(name, age);
    humans.push(chelovek);
  },
  outputArray: function () {
    humans.forEach(element => {
      document.getElementById('humans').insertAdjacentHTML('beforeend', `Имя: ${element.name} | Возраст: ${element.age} \n`);
    });
  },
  sortArray: function () {
    humans.sort(function (a, b) {
      return a.age-b.age;
    });
  },
  sortNegativeArray: function () {
    humans.sort(function (a, b) {
      return b.age-a.age;
    });
  },
  clearDiv: function () {
    document.getElementById('humans').innerHTML = (``);
  }
};
