$(function () {

    $('#containerByPopulation').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Media de Transferências em Cerro-Corá/2015'
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
                y: 247.35
            }, {
                name: 'Assistência Social',
                y: 37.38
            }, {
                name: 'Desporto e Lazer',
                y: 24.56
            }, {
                name: 'Educação',
                y: 185.99
            }, {
                name: 'Comércio e Serviços',
                y: 30.28
            }, {
                name: 'Urbanismo',
                y: 9.98
            }, {
                name: 'Encargos Especiais',
                y: 1106.31
            }]
        }, {color: '#B03060',
            name: 'Media Estadual',
            type: 'scatter',
            data: [264.38680097710545,
                22.057246068899232,
                7.247308503105399,
                76.27292672687675,
                12.312193879212412,
                9.863391971973021,
                825.7828982590064]
        }]
    });
});