

let cryptoWallet = {
  ownerName: "",
  bitcoin:{
    name: "Bitcoin",
    logo: "<img src='./media/image/bitcoin.png' style='width: 5%;'>",
    coins: 5,
    cours: 229918.48,
  },
  ethereum:{
    name: "Ethereum",
    logo: "<img src='./media/image/ethereum.png' style='width: 5%;'>",
    coins: 6,
    cours: 4367.89,
  },
  stellar:{
    name: "Stellar",
    logo: "<img src='./media/image/stellar.png' style='width: 5%;'>",
    coins: 40,
    cours: 1.46,
  },
  info: function () {
    let name = document.getElementById('user-name').value;
    if (name == "") {
      return document.getElementById('result').innerHTML = (`<p style="color: red;">Вы не ввели имя</p>`)
    }
    cryptoWallet.ownerName = name;
    let nameWallet = document.getElementById('name-wallet').value;
    switch (nameWallet) {
      case 'Bitcoin':
      case 'bitcoin':
        document.getElementById('result').innerHTML = (`Добрый день, ${this.ownerName}! На вашем балансе ${this.bitcoin.name} ${this.bitcoin.logo} осталось ${this.bitcoin.coins} монет, если вы сегодня продадите их, то получите ${Math.trunc(this.bitcoin.cours * this.bitcoin.coins)} грн.`);
        break;
      case 'Ethereum':
      case 'ethereum':
        document.getElementById('result').innerHTML = (`Добрый день, ${this.ownerName}! На вашем балансе ${this.ethereum.name} ${this.ethereum.logo} осталось ${this.ethereum.coins} монет, если вы сегодня продадите их, то получите ${Math.trunc(this.ethereum.cours * this.ethereum.coins)} грн.`);
        break;
      case 'Stellar':
      case 'stellar':
        document.getElementById('result').innerHTML = (`Добрый день, ${this.ownerName}! На вашем балансе ${this.stellar.name} ${this.stellar.logo} осталось ${this.stellar.coins} монет, если вы сегодня продадите их, то получите ${Math.trunc(this.stellar.cours * this.stellar.coins)} грн.`);        break;
      default:
        alert('Name wallet is not defined');
        break;
    }
    
  },
  
};



