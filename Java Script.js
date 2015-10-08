google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
    var data = google.visualization.arrayToDataTable([
        ['Zip', '2006', '2007'],
        ['90001', 334, 343],
        ['90002', 358, 368],
        ['90003', 316, 323],
        ['90004', 378, 387],
        ['90005',320, 328]
    ]);

    var options = {
        title: 'Units Of Energy Used',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Energy Used in May of 2006 -2007',
            minValue: 0,
            textStyle: {
                bold: true,
                fontSize: 12,
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: true,
                fontSize: 18,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            title: 'Zip Code',
            textStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            },
            titleTextStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            }
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}