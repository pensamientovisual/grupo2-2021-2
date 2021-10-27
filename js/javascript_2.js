let datasequia = {
  'Atacama': [-1.1, 1.7, 1.2, -1.1, -1.1, -0.8, -1.1, 2.9, -0.4, 0.9, 1, -1.1, 0.6, -0.8, 0, 0.7, -0.7, -0.7, 0.2, -0.2, 0.7, 1.1, -0.9, -0.1, 0.1, 1.2, -1, 0.9, -0.6, -0.8, 0],
  'Coquimbo': [-1, 0.8, 1.6, -0.3, -0.8, -1.1, -0.6, 2, -2.2, -0.2, 0.8, 0.6, 1.2, -0.2, 0.6, -0.7, -0.3, -0.8, 0.3, -0.3, 0.4, 1.2, -0.8, 0, -0.3, 0.9, -0.3, 1.3, -1, -2.2, -0.3],
  'Valparaíso': [-1.1, 0.8, 1, 0.1, -1.1, -0.4, -0.9, 2.3, -2, 0.3, 0.9, 0.4, 1.7, -0.5, 0.6, 0.5, 0.7, -0.6, 0.5, 0, 0, -0.6, 0, -0.9, -0.7, 0.2, 0.5, 0.4, -1, -1.9, -0.4]
};

let dataprecipitacion = {
  'Atacama': [9, 121.5, 78.3, 7, 0, 0, 12.2, 217.6, 8.3, 20.8, 72.3, 7, 105.6, 2, 46, 27.8, 1, 2.3, 26.5, 17.5, 49.2, 60.5, 3.5, 20.5, 29.5, 113.4, 6.5, 47.8, 8.9, 1.8, 12.7],
  'Coquimbo':[36.2,144.4,268.4,64.5,38.4,28.1,49.8,249.7,9.2,74.8,168.8,117.5,202.3,76.5,122.8,56.5,77.1,49.1,116,70.7,116.9,192.4,25.8,2.2,0,127.5,63.6,155.1,34.6,6.6,47.8],
  'Valparaíso': [223.5,762.9,1055.1,489.4,460.2,462.8,395.2,1182.8,122.8,502.9,842.6,629.9,1129.5,358.2,563.8,520.2,609.5,196.3,671.2,432.5,336.3,333.7,474.4,362.2,396.3,502,380,584.9,250.1,106,387.1]
}
let eje = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]


const counters = document.querySelectorAll("span"); // Problema -> Vacio
console.log(counters);
const speed = 200;
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      count.innerText = count + inc;
      setTimeout(updateCount, 1)
    } else {
      count.innerText = target;
    }
  }
  updateCount();
});


var data = {
  labels: eje,
  datasets: []
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    }
  },
};


window.onload = function () {
  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  var regiones = document.getElementById('mapa').childNodes;
  regiones.forEach(item => {
    item.onclick = function (event) {
      console.log(item.getAttribute('title'))
      const sequia = document.getElementById('sequia');

      const precipitacion = document.getElementById('precipitacion');

      if (sequia.checked) {
        var newdataset = {
          label: item.getAttribute('title'),
          borderColor: "rgba(233, 189, 21,1)",
          data: datasequia[item.getAttribute('title')],
          yAxisID: 'y',
        }
        data.datasets.push(newdataset)
      }
      if (precipitacion.checked) {
        var newdataset = {
          label: item.getAttribute('title'),
          borderColor: "rgba(0, 0, 255,1)",
          data: dataprecipitacion[item.getAttribute('title')],
          yAxisID: 'y1',
        }
        data.datasets.push(newdataset)
      }

      myChart.update()

      /*
      limpiar_regiones(regiones)
      item.style.fill = "green";
      grafico1.children[0].innerHTML = item.getAttribute('title')
      grafico1.children[1].setAttribute('src', name1+item.getAttribute('title')+'.png')
*/
    }
  });


}

