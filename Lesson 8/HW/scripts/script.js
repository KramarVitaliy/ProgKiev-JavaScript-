const section = document.querySelector('#div-container');

const createDiv = function () {
  if (section.children.length < 10) {
    const div = document.createElement('div');
    div.textContent = `This is div`;
    section.appendChild(div);
  } else {
    while (section.firstChild) {
      section.removeChild(section.lastChild);
    }
  }
}