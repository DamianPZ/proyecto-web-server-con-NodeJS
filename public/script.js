const botones = document.querySelectorAll('.btn');
const pantalla = document.getElementById('cero');


function playSound() {
    
    var audio = new Audio('click2.mp3');
    audio.play();
}

function calcularPorcentaje() {
    try {
        const expresion = pantalla.textContent;
        const resultado = eval(expresion);
        const porcentaje = resultado / 100; 
        pantalla.textContent = porcentaje;
    } catch {
        pantalla.textContent = `<p><span style="color: lightcoral;">Error</span></p>`;
    }
}

botones.forEach((boton)=>{
  boton.addEventListener('click', ()=>{
    const botonApretado = boton.textContent;
    if(boton.textContent === 'AC'){
        pantalla.textContent = '0';
        return;
    }
    if(boton.id === 'atras'){
        if(pantalla.textContent.length === 1 || pantalla.innerHTML === `<p><span style="color: lightcoral;">Error</span></p>`){
            pantalla.textContent = '0';
        }else{
            pantalla.textContent = pantalla.textContent.slice(0,-1);
        }
        
        return;
    }
    if (boton.id === 'igual'){
       
        try {
            pantalla.textContent = eval(pantalla.textContent);

        } catch  {
            pantalla.innerHTML = `<p><span style="color: lightcoral;">Error</span></p>`;
        }  
            
        return;
    }

    if (boton.id === 'porcentaje') {
        calcularPorcentaje();
        return;
    }

    if(pantalla.textContent === '0' || pantalla.innerHTML === `<p><span style="color: lightcoral;">Error</span></p>`){
        pantalla.textContent = botonApretado;
        return;
    }else{
        pantalla.textContent += botonApretado;
    }

  })

 
});
 

