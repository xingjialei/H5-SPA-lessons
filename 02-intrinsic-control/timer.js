window.onload = function(){
  var number = 10;
  var timer = setInterval(function(){
    number = number - 1;
    if(number!=0){
      document.getElementById('argee').value='同意('+number+'s)';
      document.getElementById('argee').setAttribute("disabled",true);
      console.log(number);
    }else{
      document.getElementById('argee').removeAttribute("disabled");
      document.getElementById('argee').value = '同意';
    }
  },1000);
  setTimeout(function(){
    clearInterval(timer);
  },10000);
}
