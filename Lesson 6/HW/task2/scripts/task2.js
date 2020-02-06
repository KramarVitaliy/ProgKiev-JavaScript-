class Human {
  constructor(name, age, debt){
    this.name = name;
    this.age = age;
    this.debt = debt;
    this.getDebt = function() {
      this.debt = true;
    }
  }
  
};

Human.constructor.delDebt = function() {
  let password = prompt('');
  if (password == 'Philip') {
    let getDebt = document.getElementById('debt').value;
    humans[getDebt-1].debt = false;
  } else {
    alert('Ай-йа-яй, у вас нет такого права!!');
  }
  
};

const humans = new Array();

const myApp = {
  createHuman: function() {
    let name = prompt(`Name`);
    let age = +prompt(`Age`);
    let debt = confirm(`У студента есть задолженности?`);
    const chelovek = new Human(name, age, debt);
    humans.push(chelovek);
  },
  outputArray: function () {
    document.getElementById('humans').innerHTML = (``);
    humans.forEach(element => {
      document.getElementById('humans').insertAdjacentHTML('beforeend', `Имя: ${element.name} | Возраст: ${element.age} \n`);
      if (element.debt) {
        document.getElementById('humans').insertAdjacentHTML('beforeend', `Есть задолженности \n`);
      } else {
        document.getElementById('humans').insertAdjacentHTML('beforeend', `Задолженностей нет \n`);
      }
      document.getElementById('humans').insertAdjacentHTML('beforeend', `\n`);

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
  addDebt(){
    let getDebt = document.getElementById('debt').value;
    humans[getDebt-1].getDebt();
  }
};
