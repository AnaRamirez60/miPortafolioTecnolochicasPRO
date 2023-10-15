let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Ana Ramírez')
    .pauseFor(2500)
    .deleteChars(17)
    .typeString('Desarrollo web')
    .pauseFor(2500)
    .deleteChars(14)
    .start();


    
    window.addEventListener('mouseover', function(evt) {
        // Si elemento tiene la clase `enlace`
        if (evt.target.classList.contains('colores')) {
          evt.target.style.color = 'orange';
        }
      });
      
      // Cuando el mouse salga de encima de algún elemento
      window.addEventListener('mouseout', function(evt) {
        // Si elemento tiene la clase `enlace`
        if (evt.target.classList.contains('colores')) {
          evt.target.style.color = 'brown';
        }
      });