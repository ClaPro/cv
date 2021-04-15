const { config } = require("node:process");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}
window.onload = (event) => {
  var elements = document.getElementsByClassName('level-bar-inner')
  console.log(config)
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = '300px'
  }
}
