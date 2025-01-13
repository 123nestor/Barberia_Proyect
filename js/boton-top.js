window.addEventListener("scroll", () =>{
    var log= window.scrollY;
    console.log(log);
    if(log > 500){
        document.querySelector('.botoncito').classList.add('show');
    }else{
        document.querySelector('.botoncito').classList.remove('show');
    }
});


document.querySelector('.botoncito').addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});

/*Estiloa para el Spinner*/
window.onload = function(){
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';    
    }
