  const code = [
  "ArrowUp", "ArrowUp", "ArrowDown",
  "ArrowDown", "ArrowLeft", "ArrowRight",  "ArrowLeft", 
  "ArrowRight", "b", "a"];
function init(){
  var index = 0
  document.body.addEventListener('keydown', function (e) {
    const key = e.key
    if (code[index] === key) {
      index++
      if (code[index] === code.length) {
        alert('congraduation')
        index = 0;
      }
    } else {
      index=0;
    }
  })
}