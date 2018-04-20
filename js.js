function go() {
        document.getElementById("result").innerHTML = "https://api.whatsapp.com/send?phone=55" + document.getElementById('tel').value + "&text=" + document.getElementById('msg').value;
    }