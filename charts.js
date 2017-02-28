
     Highcharts.chart('chart-container', {

    title: {
        text: 'Динамика роста ВВП % '
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: 'данные в процентах'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 1996
        }
    },

    series: [{
        name: 'Китай',
        data: [9.9, 9.2, 7.8, 7.6, 8.4, 8.3, 9, 10, 10, 11.3, 12.7, 14.2, 9.6, 9.2, 10.4, 9.3, 7.7, 7.7, 7.3, 6.8]
    }, {
        name: 'Германия',
        data: [0.8, 1.8, 2.9, 1.9, 2.9, 1.7, 0, -1, 1.1, 0.7, 3.9, 3.4, 0.8, -5.1, 3.7, 3.4, 0.9, 0.4, 1.6, 1.5]
    }, {
        name: 'Россия',
        data: [-3.6, 1.4, -5, 6.4, 10, 5, 4.74, 7.3, 7.18, 6.4, 8.2, 8.5, 5.2, -7.8, 4.3, 4.3, 3.4, 1.3, 0.6, -3.9]
    }, {
        name: 'Сингапур',
        data: [7.5, 8.3, -2.2, 6.4, 9, -1, 4.2, 4.4, 9.55, 7.5, 8.7, 8.8, 1.5, -1.0, 14.8, 5.2, 2.5, 4.4, 2.9, 2.2]
    }, {
        name: 'Швеция',
        data: [1.5, 2.9, 4.2, 4.5, 4.7, 1.5, 2, 2.4, 4.3, 2.3, 4.3, 3.3, -0.6, -5.3, 5.9, 2.9, 0.9, 1.3, 2.3, 2.8]
    }]
});

		//столбчатая диаграмма
Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Динамика роста ВВП % '
    },
    subtitle: {
        text: ''
    },
    
    yAxis: {
        title: {
            text: 'данные в процентах'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        series: {
            pointStart: 1996
        }
    },
    series: [{
        name: 'Китай',
        data: [9.9, 9.2, 7.8, 7.6, 8.4, 8.3, 9, 10, 10, 11.3, 12.7, 14.2, 9.6, 9.2, 10.4, 9.3, 7.7, 7.7, 7.3, 6.8]
    }, {
        name: 'Германия',
        data: [0.8, 1.8, 2.9, 1.9, 2.9, 1.7, 0, -1, 1.1, 0.7, 3.9, 3.4, 0.8, -5.1, 3.7, 3.4, 0.9, 0.4, 1.6, 1.5]
    }, {
        name: 'Россия',
        data: [-3.6, 1.4, -5, 6.4, 10, 5, 4.74, 7.3, 7.18, 6.4, 8.2, 8.5, 5.2, -7.8, 4.3, 4.3, 3.4, 1.3, 0.6, -3.9]
    }, {
        name: 'Сингапур',
        data: [7.5, 8.3, -2.2, 6.4, 9, -1, 4.2, 4.4, 9.55, 7.5, 8.7, 8.8, 1.5, -1.0, 14.8, 5.2, 2.5, 4.4, 2.9, 2.2]
    }, {
        name: 'Швеция',
        data: [1.5, 2.9, 4.2, 4.5, 4.7, 1.5, 2, 2.4, 4.3, 2.3, 4.3, 3.3, -0.6, -5.3, 5.9, 2.9, 0.9, 1.3, 2.3, 2.8]
    }]
});
		// making tabs activ on jquery
		$(document).ready(function(){
  $("#myTab a").click(function(e){
    e.preventDefault();
    $(this).tab('show');
  });

});