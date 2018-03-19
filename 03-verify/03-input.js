function testStr(){
    var width = document.getElementById('rec__width').value;
    var height = document.getElementById('rec__height').value;
    var reg = /^\d/g;

    if(width != ''){
      document.getElementById('one').innerHTML = '';
      if(reg.test(width)){
        document.getElementById('one').innerHTML = '';
        if(height != ''){
          document.getElementById('two').innerHTML = '';
          console.log(height);
          console.log(reg.test(height));
          if(reg.test(height)){
            console.log(height);
            document.getElementById('two').innerHTML = '';
            var aa = width * 2 + height * 2;
            var bb = width * height;
    
            document.getElementById('rec__area').value = parseFloat((bb).toFixed(10));
            document.getElementById('rec__perimeter').value = parseFloat((aa).toFixed(10));
          }
          else document.getElementById('two').innerHTML = '必须是数值';
        }
        else document.getElementById('two').innerHTML = '不能为空';
      }
      else document.getElementById('one').innerHTML = '必须是数值';
    }
    else document.getElementById('one').innerHTML = '不能为空';
  }