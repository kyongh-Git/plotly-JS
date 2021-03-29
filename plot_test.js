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

Plotly.plot(TESTER2, [{
  y: [1,2,3].map(rand),
  mode: 'lines+markers', 
  marker: {color: 'pink', size: 8},
  line: {width: 4}
}, {
  y: [1,2].map(rand),
  mode: 'lines+markers',
  marker: {color: 'gray', size:8},
  line: {width: 4}
}]);

var cnt = 0;
var interval = setInterval(function() {
  Plotly.extendTraces(TESTER2, {
    y: [[rand()], [rand()]]
  }, [0, 1])

  cnt = cnt+1;
  if(cnt === 100) clearInterval(interval);
}, 500);

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


});

