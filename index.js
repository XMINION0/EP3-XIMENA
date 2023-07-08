document.getElementById('regisnota').addEventListener('submit', function(event) {
    event.preventDefault();
  
    
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var nombreCurso = document.getElementById('nombreCurso').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
  
    var promedio = (nota1 + nota2 + nota3) / 3;
  
    
    localStorage.setItem('nombres', nombres);
    localStorage.setItem('apellidos', apellidos);
    localStorage.setItem('correo', correo);
    localStorage.setItem('nombreCurso', nombreCurso);
    localStorage.setItem('nota1', nota1);
    localStorage.setItem('nota2', nota2);
    localStorage.setItem('nota3', nota3);
    localStorage.setItem('promedio', promedio);
  
    window.location.href = 'resultado.html';
  });