function go() {
        document.getElementById('result').innerHTML = "https://api.whatsapp.com/send?phone=55" + document.getElementById('tel').value + "&text=" + document.getElementById('msg').value;
        
    }


    function SomenteNumero(e){
        var tecla=(window.event)?event.keyCode:e.which;   
        if((tecla>47 && tecla<58)) return true;
        else{
            if (tecla==8 || tecla==0) return true;
        else  return false;
        }
    }
    
    $("#msg").keyup(function () {
        this.value = this.value.replace(/ /g, "_");
    });

    
function ReplaceEspaco(string, target, replacement) {
 
        var i = 0, length = string.length;
        
        for (i; i < length; i++) {
        
          string = string.replace(target, replacement);
        
        }
        
        return string;
        
       }