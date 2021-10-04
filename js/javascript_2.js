function limpiar_regiones(regiones) {
  regiones.forEach(i => {
    if (i.nodeName == 'path') {
      i.style.fill = ""
    }
  })
}

window.onload = function () {

  var regiones = document.getElementById('mapa').childNodes;
  var btn = document.getElementById('button1');
  var mapa_svg = document.getElementById('mapa');
  var grafico1 = document.getElementById('grafico1');
  var grafico2 = document.getElementById('grafico2');
  btn.onclick = function (event) {
    limpiar_regiones(regiones)
    if (mapa_svg.classList.contains('animar-mapa')) {
      mapa_svg.classList.remove('animar-mapa');
      grafico1.classList.remove('animar-grafico1');
      grafico2.classList.remove('animar-grafico2');
      mapa_svg.classList.add('animar-mapa-vuelta');
      grafico1.classList.add('animar-grafico1-vuelta');
      grafico2.classList.add('animar-grafico2-vuelta');

    }
    else if (mapa_svg.classList.contains('animar-mapa-vuelta')) {
      mapa_svg.classList.remove('animar-mapa-vuelta');
      grafico1.classList.remove('animar-grafico1-vuelta');
      grafico2.classList.remove('animar-grafico2-vuelta');
      mapa_svg.classList.add('animar-mapa');
      grafico1.classList.add('animar-grafico1');
      grafico2.classList.add('animar-grafico2');
    }
    else {
      mapa_svg.classList.add('animar-mapa');
      grafico1.classList.add('animar-grafico1');
      grafico2.classList.add('animar-grafico2');
    }
    /*    setTimeout(function(){
          mapa_svg.classList.remove('animar-mapa');
        }, 2000);*/
  }
  regiones.forEach(item => {
    item.onclick = function (event) {
      console.log(item.getAttribute('title'))
      limpiar_regiones(regiones)
      item.style.fill = "green";
      alert(item.getAttribute('title'))
    }
  });

}