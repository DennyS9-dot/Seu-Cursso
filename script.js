 // as cores que serao usadas
 const colors = ["#16212e", "#141414"];
 let currentColorIndex = 0;

 // Função pra trocar cores
 function changeBackgroundColor() {
     currentColorIndex = (currentColorIndex + 1) % colors.length; // Alterna entre 0 e 1
     document.body.style.backgroundColor = colors[currentColorIndex];
 }

 // troca as cores a cada 5 segundos
 setInterval(changeBackgroundColor, 4000);

 // fala qual a cor inicial
 document.body.style.backgroundColor = colors[currentColorIndex];