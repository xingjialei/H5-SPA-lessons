window.onload = function(){
  var num;
  function start(){
    num = setInterval(function(){
      document.getElementById('range').value = document.getElementById('range').value + 1;
    },100);
    setTimeout(function(){
      clearInterval(num);
    },10100);
  }
  function stop(){
    clearInterval(num);
  }
  function reset(){
    document.getElementById('range').value = 0;
  }
  document.getElementById('start').onclick = start;
  document.getElementById('stop').onclick = stop;
  document.getElementById('reset').onclick = reset;
}
