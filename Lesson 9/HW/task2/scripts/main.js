window.onload = function () {
  const inputs = document.forms[0].querySelectorAll("input"),
  formSub = document.querySelector(`.form-sub`),
  succes = document.querySelector(`.succes`),
  remember = document.querySelector(`#remember`),
  regExp = /\w+/,
  user = {
    login: "admin",
    password: "12345"
  };

  remember.addEventListener("change", ()=>{
    if (remember.checked == true) {
      document.forms[0].setAttribute("autocomplete", "on");
    } else if(remember.checked == false){
      document.forms[0].setAttribute("autocomplete", "off");
    }
  })
    formSub.addEventListener("click",function (e) {
      let count = 0;
      for (let i = 0; i < 2; i++) {
          
          let notNull = inputs[i].value.match(regExp),
          name = inputs[i].name;
          const currentInput = document.querySelector(`.${name}`);

          if (notNull == null) {
            if (name == "") {
              continue;
            }
            if (currentInput.lastElementChild.className != "out") {
              let div = document.createElement("div");
              div.innerHTML = `Значение пустое`;
              div.className = `out`;
              div.setAttribute("name", "out");
              currentInput.append(div);
            } else{
              break;
            }
            inputs[i].style.borderColor = "red";
            e.preventDefault();
          } else if(notNull != null){
            inputs[i].style.borderColor = "green";
            count++;
            e.preventDefault();
            if (count == 2) {
              if (inputs[0].value == user.login && inputs[1].value == user.password) {
                succes.style.display = "block";
                succes.innerHTML = `Вы авторизированы`;
                succes.style.color = `green`;
                document.querySelectorAll(`.out`)[0].style.display = "none";
                document.querySelectorAll(`.out`)[1].style.display = "none";
              } else{
                succes.style.display = "block";
                succes.style.color = "red";
                succes.innerHTML = `Неверный email или пароль`;
              }
            }
          }
      }
    });
  }
