var xPoints=['Joe', 'Jimmy', 'JoJo', 'Jolene', 'Joseph','Jeremey','Johnny'];
        var yPoints=[10, 4, 6, 20, 16 , 10, 30];
       var points = {};
        xPoints.forEach((xPoints, i) => points[xPoints] = yPoints[i]);
        
    var data = [
  {
    x: Object.keys(points),
    y: Object.values(points),
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
        height: 300,
        width: 300,
        filename: 'masksSoldGraph'
      })
    });;
    }