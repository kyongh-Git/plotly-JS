$(function(){
TESTER = document.getElementById('tester');

Plotly.plot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], { 
    margin: { t: 0 } }, {showSendToCloud:true} );
	
	
function rand() {
  return Math.random();
}

TESTER2 = document.getElementById('tester2');

Plotly.d3.csv('https://lcl.okstate.edu/iss/site-files/issdata.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'location'),
        z: unpack(rows, 'Students'),
        text: unpack(rows, 'location'),
        autocolorscale: true
    }];

    var layout = {
      title: 'Test Title',
      geo: {
          projection: {
              type: 'robinson'
          }
      }
    };

    Plotly.newPlot(tester2, data, layout, {showLink: false});

});

TESTER3 = document.getElementById('tester3');

var data = [{
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot(TESTER3, data, layout);

TESTER4 = document.getElementById('tester4');
Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_world_gdp_with_codes.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

       var data = [{
            type: 'choropleth',
            locations: unpack(rows, 'CODE'),
            z: unpack(rows, 'GDP (BILLIONS)'),
            text: unpack(rows, 'COUNTRY'),
            colorscale: [
                [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
                [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
                [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
            autocolorscale: false,
            reversescale: true,
            marker: {
                line: {
                    color: 'rgb(180,180,180)',
                    width: 0.5
                }
            },
            tick0: 0,
            zmin: 0,
            dtick: 1000,
            colorbar: {
                autotic: false,
                tickprefix: '$',
                title: 'GDP<br>Billions US$'
            }
      }];

      var layout = {
          title: '2014 Global GDP<br>Source:',
          geo:{
              showframe: false,
              showcoastlines: false,
              projection:{
                  type: 'mercator'
              }
          }
      };
      Plotly.newPlot(TESTER4, data, layout, {showLink: false});
});


});

