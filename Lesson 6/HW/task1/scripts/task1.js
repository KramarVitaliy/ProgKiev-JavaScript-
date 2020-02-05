function Human(name, age) {
  this.name = name;
  this.age = age;
}

const humans = new Array();

var myApp = {
  createHuman: function() {
    let name = prompt("Name");
    let age = +prompt("Age");
    myApp.chelovek = new Human(name, age);
    humans.push(myApp.chelovek);
  },
  outputArray: function () {
    for (let i = 0; i < humans.length; i++) {
      document.getElementById('humans').insertAdjacentHTML('beforeend', "Имя: " + humans[i].name + " | Возраст: " + humans[i].age + "\n");
    }
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
    document.getElementById('humans').innerHTML = ("");
  }
};
