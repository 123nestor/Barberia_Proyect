document.querySelector("#enviar").addEventListener("click",function(){
    let url="";
    let nombre  = document.querySelector("#nombre").value;
    let email   = document.querySelector("#email").value;
    let barbero   = document.querySelector("#barbero").value;
    let servicio   = document.querySelector("#servicio").value;
    let fecha   = document.querySelector("#fecha").value;
    let hora   = document.querySelector("#hora").value;
    let mensaje = document.querySelector("#mensaje").value;
    if(nombre!="" && email!="" && fecha!="" && hora!=""){
        let url = `https://api.whatsapp.com/send?phone=59165688305&text=CaposBarberShop_%0AReserva%0A%0ANombre Completo=%0A${nombre}%0Aemail=%0A${email}%0Abarbero=%0A${barbero}%0Aservicio=%0A${servicio}%0Ahora=%0A${hora}%0fecha=%0A${fecha}%0Amensaje=%0A${mensaje}`;
        window.open(url);
    }else{
        alert('datos obligatorios');
    }
    
});