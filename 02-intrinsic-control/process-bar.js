window.onload = function(){
  var num;
  var a = 0;
  function start(){
    a = a + 1;
    if(a == 1){
      num = setInterval(function(){
        document.getElementById('range').value = document.getElementById('range').value + 1;
    },100);
      setTimeout(function(){
        clearInterval(num);
      },10100);
    }
  }
  function stop(){
    a = 0;
    clearInterval(num);
  }
  function reset(){
    document.getElementById('range').value = 0;
  }
  document.getElementById('start').onclick = start;
  document.getElementById('stop').onclick = stop;
  document.getElementById('reset').onclick = reset;
}
