function Calculator() {
  this.read = function() {
    this.a = +prompt('Enter value a');
    this.b = +prompt('Enter value b');
  }
  this.sum = function () {
    let summary = this.a + this.b;
    document.write(`Your sum: ${summary}<br>`);
  }
  this.mull = function () {
    let multiply = this.a * this.b;
    document.write(`Your multiply: ${multiply}`);
  }
}

var a = new Calculator();

a.read();
a.sum();
a.mull();