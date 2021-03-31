        var xPoints=['Joe', 'Jimmy', 'JoJo', 'Jolene', 'Joseph','Jeremey','Johnny'];
        var yPoints=[10, 4, 6, 20, 16 , 10, 30];
        var list = [];
        for (var j = 0; j < xPoints.length; j++) 
            list.push({'name': xPoints[j], 'number': yPoints[j]});
        list.sort(function(a, b) {
            return ((a.number > b.number) ? -1 : ((a.number == b.number) ? 0 : 1));
        });
        for (var k = 0; k < list.length; k++) {
          xPoints[k] = list[k].name;
          yPoints[k] = list[k].number;
        }
    var data = [
  {
    x: xPoints,
    y: yPoints,
    marker:{color: ['#E74C3C', '8E44AD', '#349DB', '#16A085', '#2ECC71', '#F1C40F', '#E67E22']},
    type: 'bar'} ];
    var layout = {
  title: 'Number of masks donated per class',
  font:{size:25},
  xaxis: {
    showgrid: true,
    zeroline: true,
    linewidth: 3,
    gridcolor:'#000000',
    gridwidth:3,
    tickfont:{
      size:20
    }
  },
  yaxis: {
    title: {text:'Number of masks donated',font:{size:20}},
    showline: true,
    linewidth: 3,
    gridcolor:'#000000',
    gridwidth:3,
    tickfont:{
      size:20
    }
  }
};
Plotly.newPlot('graph', data, layout);
    function downloadGraph()
    {
        Plotly.newPlot('graph', data, layout).then(function(gd) {
      Plotly.downloadImage(gd, {
        format: 'png',
        height: 650,
        width: 650,
        filename: 'masksSoldGraph'
      })
    });;
    }
