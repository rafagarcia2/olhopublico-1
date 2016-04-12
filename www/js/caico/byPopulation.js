$(function () {

    $('#containerByPopulation').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Media de Transferências em Caicó/2015'
        },
        subtitle: {
            text: 'Valor das transferências por habitante'
        },
        legend: {
            enabled: false
        },
        xAxis: {
            type: 'category',
            crosshair: true
        },
        yAxis: {
            title: {text: 'Valores em R$'}
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>R$ {point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            colorByPoint: true,
            type: 'column',
            data: [
            {
                name: 'Saúde',
                y: 287.38
            }, {
                name: 'Agricultura',
                y: 3.06
            }, {
                name: 'Assistência Social',
                y: 24.47
            }, {
                name: 'Desporto e Lazer',
                y: 6.69
            }, {
                name: 'Educação',
                y: 48.10
            }, {
                name: 'Urbanismo',
                y: 13.86
            }, {
                name: 'Gestão Ambiental',
                y: 5.77
            }, {
                name: 'Encargos Especiais',
                y: 536.53
            }]
        }, {color: '#B03060',
            name: 'Media Estadual',
            type: 'scatter',
            data: [
                264.3956471772494,
                3.309088817740505,
                22.05798408915075,
                4.235459820891678,
                76.27547876643737,
                7.749390557593103,
                0.1142246104594437,
                825.8105283856482
            ]
        }]
    });
});