if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

window.addEventListener('onload', ()=>{
  console.log('1')
  var elements = document.getElementsByClassName('.level-bar-inner').width
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = '300 px'
  }
})
