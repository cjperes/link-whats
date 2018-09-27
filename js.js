function go() {
        document.getElementById("result").innerHTML = "https://api.whatsapp.com/send?phone=55" + document.getElementById('tel').value + "&text=" + document.getElementById('msg').value;
    }


    function SomenteNumero(e){
        var tecla=(window.event)?event.keyCode:e.which;   
        if((tecla>47 && tecla<58)) return true;
        else{
            if (tecla==8 || tecla==0) return true;
        else  return false;
        }
    }
    
  