      
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
    type: 'bar'} ];
    var layout = {
  title: 'Number of masks donated by person',
  xaxis: {
    showgrid: true,
    zeroline: true
  },
  yaxis: {
    title: 'Number of masks donated',
    showline: true
  }
};
Plotly.newPlot('graph', data, layout);
    function downloadGraph()
    {
        Plotly.newPlot('graph', data, layout).then(function(gd) {
      Plotly.downloadImage(gd, {
        format: 'png',
        height: 500,
        width: 500,
        filename: 'masksSoldGraph'
      })
    });;
    }
