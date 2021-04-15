if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}
window.addEventListener('onload', ()=>{
  var elements = document.getElementsByClassName('.level-bar-inner').width
  for (let i = 0; i < elements.length; i++) {
    elements[i].width = '300 px'
  }
})
