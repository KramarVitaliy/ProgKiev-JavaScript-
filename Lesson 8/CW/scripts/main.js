const requestURL = 'https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const request = new XMLHttpRequest();
const root = document.querySelector('#root');

request.open('GET', requestURL);
request.responseType = 'json';

request.addEventListener("readystatechange", e => {
  if (request.readyState == 4 && request.status == 200) {
    const wallet = request.response;
    courseWallet(wallet);
  }
})

request.send();


function courseWallet(jsonObj) {
  jsonObj.forEach(element => {
    const h1 = document.createElement('h1');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    h1.textContent = `${element["txt"]} (${element["cc"]})`;
    p1.textContent = `Курс: ${element["rate"]}`;
    p2.textContent = `Дата оновлення: ${element["exchangedate"]}`;
    
    root.appendChild(h1);
    root.appendChild(p1);
    root.appendChild(p2);
  });
  
}