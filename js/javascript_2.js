
let eje = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

let dataprecipitacion = {
  'CL-AN': [0.0, 1.2, 42.4, 0.0, 0.0, 0.0, 12.8, 0.0, 2.3, 0.0, 5.3, 15.9, 9.7, 6.5, 0.0, 3.0, 11.0, 0.0, 0.0, 0.0, 0.0, 8.4, 5.2, 2.0, 3.0, 17.1, 4.6, 2.6, 3.0, 16.6, 15.6],
  'CL-AR': [1042.3, 1221.3, 1452.7, 1413.3, 1191.7, 1189.3, 778.7, 1479.0, 598.8, 995.8, 1384.1, 1129.4, 1463.9, 962.7, 1189.5, 1441.6, 1416.4, 995.4, 1028.0, 1162.1, 844.2, 1052.6, 939.8, 764.6, 1103.4, 1146.8, 795.6, 1185.9, 1073.8, 792.5, 795.1],
  'CL-AP': [0.0, 0.0, 2.0, 0.0, 0.0, 4.0, 0.0, 5.2, 0.0, 0.0, 3.8, 2.1, 8.5, 0.0, 0.0, 0.0, 0.0, 0.0, 1.2, 0.0, 0.0, 3.4, 0.0, 2.0, 5.2, 1.8, 0.0, 2.7, 0.0, 5.6, 5.4],
  'CL-AT': [0.0, 58.8, 38.3, 0.0, 0.0, 0.0, 0.0, 128.2, 3.6, 26.5, 29.4, 0.0, 19.2, 0.0, 6.4, 21.7, 0.0, 0.0, 7.0, 6.4, 29.8, 28.3, 0.0, 4.6, 5.0, 33.8, 0.0, 25.2, 0.0, 0.0, 7.4],
  'CL-AI': [1119.5, 999.7, 804.2, 887.3, 1168.7, 966.0, 1211.8, 1139.9, 939.3, 835.2, 901.0, 1107.3, 1223.5, 1178.5, 1055.8, 1049.2, 1176.9, 660.1, 899.8, 1203.7, 1030.8, 848.5, 1066.6, 1028.1, 1029.4, 1016.7, 501.6, 1304.4, 962.6, 760.5, 1019.2],
  'CL-BI': [834.0, 1132.8, 1442.5, 1134.9, 837.5, 944.7, 619.5, 1554.8, 593.1, 1079.4, 1398.1, 1348.8, 1352.1, 861.7, 1115.3, 1375.2, 1304.3, 773.0, 1128.0, 928.3, 749.6, 755.4, 730.2, 587.8, 971.0, 707.0, 609.2, 921.8, 774.9, 705.2, 798.6],
  'CL-CO': [61.7, 200.3, 306.2, 162.5, 71.0, 93.0, 95.0, 435.0, 14.5, 148.0, 251.2, 204.9, 391.8, 102.0, 195.5, 122.6, 158.2, 98.0, 157.0, 140.5, 97.5, 184.7, 75.5, 89.0, 100.8, 212.7, 194.9, 316.1, 61.3, 13.5, 108.3],
  'CL-TA': [0.0, 0.0, 10.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.5, 0.0, 5.0, 0.0, 4.4, 2.0],
  'CL-LL': [1810.7, 1591.5, 1600.7, 1753.3, 2109.2, 1641.8, 1621.8, 1766.2, 867.4, 1392.8, 1518.0, 1992.3, 2394.6, 1804.3, 1633.9, 2229.7, 2191.5, 1392.0, 1763.7, 2210.2, 1678.6, 1067.9, 1763.7, 1658.8, 1503.8, 1515.2, 1113.0, 1853.4, 1380.1, 777.8, 693.0],
  'CL-MA': [569.3, 512.8, 275.4, 374.4, 509.2, 366.0, 437.6, 401.9, 474.1, 304.9, 385.0, 384.7, 376.8, 504.0, 357.3, 348.2, 430.4, 386.0, 332.9, 327.4, 255.1, 411.5, 266.3, 330.6, 239.0, 392.8, 193.6, 248.2, 326.0, 309.1, 274.8],
  'CL-ML': [377.5, 771.4, 1037.9, 545.2, 520.1, 603.6, 360.4, 1032.4, 167.1, 664.9, 852.2, 732.6, 1059.2, 518.8, 540.4, 967.2, 748.7, 350.1, 668.5, 574.3, 374.9, 407.5, 613.4, 338.6, 633.0, 545.0, 488.3, 651.7, 407.3, 158.0, 431.4],
  'CL-LI': [451.0, 739.8, 928.7, 700.6, 581.1, 615.3, 423.8, 1066.2, 135.2, 656.7, 969.6, 806.2, 987.0, 562.0, 539.3, 1077.7, 754.0, 379.3, 765.5, 527.5, 365.3, 452.6, 569.4, 365.3, 553.3, 565.8, 433.0, 512.5, 314.6, 203.3, 452.2],
  'CL-LR': [1743.9, 1718.1, 1804.7, 2348.7, 1666.5, 1734.5, 1238.6, 2233.9, 1013.6, 1490.7, 2042.2, 1859.1, 2197.5, 1774.5, 1813.6, 1959.7, 2054.1, 1253.6, 1977.3, 1850.9, 1469.5, 1603.2, 1725.5, 1475.5, 1782.2, 1911.9, 1284.2, 1690.0, 1551.8, 1050.3, 1382.8],
  'CL-RM': [231.6, 477.0, 429.9, 379.7, 251.1, 215.4, 143.8, 758.0, 97.3, 393.4, 578.6, 397.5, 637.0, 101.9, 231.0, 623.9, 344.4, 225.8, 415.7, 348.8, 309.1, 159.6, 278.1, 199.1, 254.6, 263.5, 376.7, 309.6, 153.9, 97.0, 195.2],
  'CL-VS': [77.1, 290.9, 323.2, 184.2, 77.6, 132.1, 95.9, 651.0, 39.1, 215.4, 300.7, 226.1, 452.3, 125.4, 252.2, 248.9, 266.2, 116.0, 238.1, 182.4, 180.2, 113.2, 180.2, 95.4, 106.4, 202.4, 220.4, 210.3, 82.4, 36.8, 130.7],
  'CL-NU': [786.8, 1171.7, 1545.4, 1296.8, 983.6, 889, 686.4, 1335.8, 466.9, 1036.7, 1088.8, 1209.4, 1236.8, 680.9, 950.8, 1198.2, 1275.3, 619.2, 997.6, 876.9, 639.7, 882.5, 883.3, 665.2, 938.6, 975.3, 496, 871.2, 754.3, 618.8, 565.8]
}

let datasequia = {
  'CL-AR': [-0.3, 0.5, 1.5, 1.3, 0.4, 0.4, -1.7, 1.6, -2.9, -0.5, 1.2, 0.1, 1.5, -0.7, 0.4, 1.4, 1.3, -0.5, -0.4, 0.3, -1.3, -0.3, -0.9, -1.8, -0.2, 0.2, -1.6, 0.4, -0.1, -0.7, -1.5],
  'CL-AT': [-0.5, 1.6, 1.1, -0.6, -1.4, -1.6, -0.4, 2.5, -0.6, 0.0, 1.0, -0.7, 1.5, -1.1, 0.6, 0.2, -1.1, -1.1, 0.1, -0.2, 0.6, 0.9, -0.9, -0.1, 0.2, 1.6, -0.5, 1.4, -0.5, -1.0, -0.3],
  'CL-AI': [1.4, 0.9, -0.7, -0.4, 0.5, 0.0, 1.1, 0.4, 0.1, -0.3, -0.6, -0.3, -0.1, 0.4, 0.0, 0.2, 0.5, -2.0, -0.9, 0.2, 0.1, -1.1, 0.7, -0.7, -1.1, -1.0, -2.6, 0.8, -0.9, -0.1, -1.1],
  'CL-BI': [-0.7, 0.4, 1.4, 0.4, -0.7, -0.3, -1.7, 1.7, -1.8, 0.2, 1.3, 1.1, 1.1, -0.6, 0.4, 1.2, 1.0, -1.1, 0.4, -0.4, -1.0, -1.0, -1.1, -1.8, -0.1, -1.2, -1.7, -0.3, -0.9, -1.2, -0.8],
  'CL-CO': [-1.4, 0.6, 1.6, 0.0, -0.6, -1.6, -0.4, 1.6, -1.3, -0.2, 0.6, 1.0, 1.5, 0.4, 0.5, -0.1, 0.0, -1.0, 0.6, -0.3, 0.0, 1.2, -1.0, -0.6, 0.3, 0.7, -0.6, 1.3, -0.4, -1.6, -0.3],
  'CL-LL': [0.6, 0.0, 0.1, 0.6, 1.6, 0.2, 0.2, 0.6, -2.8, -0.6, -0.2, 1.2, 2.3, 0.7, 0.2, 0.9, 1.3, -1.1, 0.1, 0.7, -0.8, -1.0, 0.2, -0.1, -0.7, -0.3, -2.5, 0.3, -1.0, -0.9, -1.9],
  'CL-MA': [-0.1, -0.1, 0.4, 1.3, 0.8, -0.2, -0.6, 1.2, -2.2, -1.0, 0.5, 0.1, 1.5, -0.7, 0.3, 0.5, 1.2, -1.5, 0.1, 0.2, -1.3, -0.5, -0.5, -0.9, 0.4, -0.4, -2.3, 0.4, 0.2, -2.1, -0.7],
  'CL-ML': [-0.8, 0.5, 1.2, -0.3, -0.4, -0.1, -1.3, 1.2, -2.4, 0.1, 0.4, 0.8, 1.5, -0.8, 0.0, 1.1, 0.8, -1.4, 0.3, -0.2, -0.7, -0.1, -0.7, -0.8, 0.3, -0.3, -1.1, 0.1, -0.8, -1.6, -0.2],
  'CL-LR': [0.0, -0.1, 0.2, 1.6, -0.2, 0.0, -1.6, 1.3, -2.5, -0.8, 0.8, 0.3, 1.2, 0.1, 0.2, 0.6, 1.1, -1.6, 0.5, 0.3, -0.8, -0.5, -0.1, -0.8, 0.1, 0.5, -1.6, -0.2, -0.6, -2.4, -1.1],
  'CL-RM': [-0.5, 0.7, 1.1, 0.3, -0.3, -0.9, -0.9, 2.2, -1.9, 0.4, 1.2, 0.2, 1.8, -0.4, 0.5, 1.0, 0.4, -0.9, 0.5, 0.0, -0.1, -1.1, -0.5, -0.9, -0.6, -0.4, -0.1, 0.0, -1.1, -2.0, -0.7],
  'CL-VS': [-0.9, 1.3, 1.4, -0.3, -0.6, -0.4, -0.9, 2.0, -2.2, 0.0, 0.9, 0.7, 1.7, -0.4, 0.3, 0.5, 0.7, -1.0, 0.8, -0.4, -0.9, -0.3, 0.2, -0.4, -0.4, -0.1, -0.2, 0.6, -0.9, -2.4, -0.5],
  'CL-NU': [-0.7, 0.7, 1.7, 1.0, 0.0, -0.3, -1.1, 1.1, -2.2, 0.2, 0.4, -0.8, 0.9, -1.1, -0.1, 0.7, 0.9, -1.4, 0.0, -0.3, -1.3, -0.3, -0.3, -1.2, -0.1, 0.0, -2.0, -0.3, -0.8, -1.4, -1.6]
}

let dataconsumo = {
  "CL-AP": [11312.0, 12088.0, 12248.0, 12487.0, 12923.0, 13681.0, 13604.847, 12570.0, 14160.0],
  "CL-TA": [18673.0, 20689.0, 20456.0, 20633.0, 21685.0, 21859.0, 22065.444, 20542.0, 22783.0],
  "CL-AN": [34563.0, 36215.0, 37565.0, 38408.0, 38995.0, 39595.0, 38408.51, 34788.0, 38578.0],
  "CL-AT": [16311.0, 17537.0, 17765.0, 17701.0, 17113.0, 17745.0, 17690.096, 16103.0, 17627.0],
  "CL-CO": [33516.0, 37196.0, 37991.0, 35360.0, 39815.0, 41614.0, 42963.053, 40211.0, 44189.0],
  "CL-VS": [98740.0, 102635.0, 106479.0, 98131.0, 109201.0, 111345.0, 113319.786, 116187.0, 116664.0],
  "CL-RM": [559987.0, 572881.0, 585362.0, 595625.0, 602793.0, 608274.0, 614058.806, 629306.0, 639990.0],
  "CL-LI": [38781.0, 40241.0, 42535.0, 43720.0, 45170.0, 46407.0, 47799.723, 49734.0, 51406.0],
  "CL-ML": [37126.0, 39668.0, 40558.0, 41956.0, 43407.0, 45024.0, 46282.769, 43686.0, 49359.0],
  "CL-NU": ['', '', '', '', '', '', '', 18729.0, 19518.0],
  "CL-BI": [93924.0, 96095.0, 98391.0, 100023.0, 103672.0, 104822.0, 105341.114, 87394.0, 90949.0],
  "CL-AR": [34846.0, 37905.0, 35886.0, 36489.0, 39192.0, 42934.0, 42902.262, 41430.0, 46372.0],
  "CL-LR": [13308.0, 13582.0, 13923.0, 14241.0, 14880.0, 15302.0, 15650.833, 14983.0, 16239.0],
  "'CL-LL": [28284.0, 28734.0, 29694.0, 30955.0, 31451.0, 32273.0, 33109.698, 33115.0, 35323.0],
  "CL-AI": [4756.0, 4918.0, 5182.0, 5236.0, 5639.0, 5620.0, 5596.864, 5283.0, 5846.0],
  "CL-MA": [9529.0, 10061.0, 9923.0, 10326.0, 10739.0, 11307.0, 11531.439, 10907.0, 12058.0]
}

var data = {
  labels: eje.slice(15),
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
      }
    }
  },
};

function actualizar(dataitem, consumo) {
  var regionselec = document.getElementById('regionseleccionada');
  regionselec.innerText = dataitem.getAttribute('title');
  data.datasets = []

  if (consumo) {
    var newdataset = {
      label: "Consumo",
      borderColor: "#1FE09B",
      data: dataconsumo[dataitem.getAttribute('id')],
      yAxisID: 'y'
    }
    data.datasets.push(newdataset)
    var newdataset = {
      label: "Precipitaciones",
      borderColor: "#006D94",
      backgroundColor: "#006D94",
      data: dataprecipitacion[dataitem.getAttribute('id')].slice(22),
      yAxisID: 'y1',
      type: 'bar'
    }
    data.datasets.push(newdataset)
    data.labels = eje.slice(22)
  }
  else {
    var newdataset = {
      label: "Sequía",
      borderColor: "#94510A",
      data: datasequia[dataitem.getAttribute('id')].slice(22),
      yAxisID: 'y'
    }
    data.datasets.push(newdataset)
    var newdataset = {
      label: "Precipitaciones",
      borderColor: "#006D94",
      backgroundColor: "#006D94",
      data: dataprecipitacion[dataitem.getAttribute('id')].slice(22),
      yAxisID: 'y1',
      type: 'bar'
    }
    data.datasets.push(newdataset)
    data.labels = eje.slice(22)
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function reg(regio, myChart) {
  j = [25, 5, 7, 9, 11, 15, 13, 19, 23, 31, 29, 17, 27, 21, 1, 3]
  for (s = 0; s < j.length; s++) {
    regio[j[s]].style.fill = "green";
    actualizar_sequia([regio[j[s]]]);
    actualizar_precipitacion([regio[j[s]]]);
    myChart.update()
    await sleep(100);
    regio[j[s]].style.fill = "";
  }
}

async function coun(objs) {

  objs.innerText = 0;
  var speed = 10;
  var target = parseFloat(objs.getAttribute('data-target'));
  var inc = target / speed;
  while (true) {
    let count = parseFloat(objs.innerText);
    if (count < target) {
      objs.innerText = (count + inc).toFixed(2);
    }
    else {
      objs.innerText = target;
      break;
    }
    await sleep(100)
  }


}

window.onload = function () {
  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


  var regiones = document.getElementById('mapa').childNodes;
  var botonindicadores = document.getElementById('indicadores');

  var botonsequia = document.getElementById('btnsequia');
  var botonconsumo = document.getElementById('btnconsumo');

  var consumo = false
  botonsequia.classList.add('disabled')


  var region_mostrada = null
  regiones.forEach(item => {
    item.onclick = function (event) {
      console.log(item.getAttribute('id'))
      if (region_mostrada) {
        region_mostrada.style.fill = "";
      }
      region_mostrada = item
      actualizar(region_mostrada, consumo)
      item.style.fill = "green";
      myChart.update()
    }
  });

  botonindicadores.onclick = function (event) {
    counters.forEach(counter => {
      coun(counter);

    });
  }


  botonsequia.onclick = function (event) {
    consumo = false
    actualizar(region_mostrada, consumo);
    myChart.update();
    botonsequia.classList.add('disabled')
    botonconsumo.classList.remove('disabled')
  }

  botonconsumo.onclick = function (event) {
    consumo = true
    actualizar(region_mostrada, consumo);
    myChart.update();
    botonconsumo.classList.add('disabled')
    botonsequia.classList.remove('disabled')
  }









  const counters = document.querySelectorAll(".counter");
  console.log(counters);
  counters.forEach(counter => {
    coun(counter);
  });







}

