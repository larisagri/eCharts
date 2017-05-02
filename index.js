var chartSW = echarts.init(document.getElementById('starWars'));

var chartOption = {
    title: {
      text: 'StarWars',
      textStyle:{
        fontStyle: 'oblique',
        color: '#099700'
        }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer : {
        type : 'shadow'
      }
    },
    legend: {
      data:['Nombre de planètes', 'Nombre de vaisseaux']
    },
    xAxis: {
      data: [
        {value:"Episode I", textStyle:{fontSize: 15, color: 'green'}},
        {value:"Episode II", textStyle:{fontSize: 15, color: 'blue'}},
        {value:"Episode III", textStyle:{fontSize: 15, color: 'green'}},
        {value:"Episode IV", textStyle:{fontSize: 15, color: 'blue'}},
        {value:"Episode V", textStyle:{fontSize: 15, color: 'green'}},
        {value:"Episode VI", textStyle:{fontSize: 15, color: 'blue'}}
      ]
    },
    yAxis: {},
    series: [{
      name: 'Nombre de planètes',
      type: 'bar',
      itemStyle:{
        normal: {
          color: "#1E74FF"
        }
      },
      barWidth: "35%",
        data: [3, 4, 13, 3, 4, 5]
      },
      {
      name: 'Nombre de vaisseaux',
      type: 'bar',
      itemStyle:{
        normal: {
          color: "#099700"
        }
      },
      barWidth: "35%",
      data: [5, 9, 12, 8, 9, 12]
    }]
  };

chartSW.setOption(chartOption);
