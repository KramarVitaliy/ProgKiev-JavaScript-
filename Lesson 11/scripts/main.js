

window.onload = function () {
  const ingredients = {
    cake: 86,
    cheese: 16,
    tomato: 15,
    chicken: 25
  };
  
  class Ingredient {
    constructor(name, value, price){
      this.name = name,
      this.value = value,
      this.price = price
    }
  }
  let allPrice = 86;
  const orders = new Array();
  
  const forms = this.document.forms;
  const formSubmit = document.querySelector('#form-submit');
  const basketPrice = document.querySelector('#all-price');
  const buttonBuy = document.querySelector('#button-buy');
  forms[0].elements[0].value = forms[0].elements[1].value;
  forms[0].elements[2].value = forms[0].elements[3].value;
  forms[0].elements[4].value = forms[0].elements[5].value;



  for (let i = 0; i < forms[0].length; i++) {
    forms[0].elements[i].onchange = function() {

      let value = forms[0].elements[i].value;
      let ingredient = document.getElementsByClassName(`${forms[0].elements[i].name}`);
      let price = ingredients[`${forms[0].elements[i].name}`];
      let name = forms[0].elements[i].name;
      let index = orders.findIndex(ingredient => ingredient.name === name);
      let priceOut = document.querySelector('#price-out');
      allPrice = 86;

      if (index != -1) {
        orders[index].value = value;
        orders.forEach(function(element) {
          
          allPrice += element.value * element.price;
        })
      } else{
        orders.push(new Ingredient(name, value, price));
        orders.forEach(function(element) {
          
          allPrice += element.value * element.price;
        })
      }
      priceOut.value = `Сумма заказа: ${allPrice} грн`;

      


    if (value > 0) {
      ingredient[0].style.opacity = "0.8";
    } else {
      ingredient[0].style.opacity = "0";
    }
  }
    
  }

  formSubmit.addEventListener('click',function() {
    basketPrice.innerHTML = `${allPrice}.00 грн`
  });
  buttonBuy.addEventListener('click',function() {
    document.querySelector('#form-order').style.display = "flex";
  })
}
