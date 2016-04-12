$(function () {

    $('#containerByPopulation').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Media de Transferências em Natal/2015'
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
                name: 'Educação',
                y: 30.29
            }, {
                name: 'Desporto e Lazer',
                y: 0.63
            }, {
                name: 'Agricultura',
                y: 2.78
            }, {
                name: 'Ciência e Tecnologia',
                y: 1.62
            }, {
                name: 'Saneamento',
                y: 0.05
            }, {
                name: 'Comércio e Serviços',
                y: 5.61
            }, {
                name: 'Urbanismo',
                y: 2.55
            }, {
                name: 'Saúde',
                y: 249.69
            }, {
                name: 'Direitos da Cidadania',
                y: 1.25
            }, {
                name: 'Segurança Pública',
                y: 7.03
            }, {
                name: 'Cultura',
                y: 0.99
            }, {
                name: 'Encargos Especiais',
                y: 366.25
            }, {
                name: 'Assistência Social',
                y: 5.13}]
        }, {color: '#B03060',
            name: 'Media Estadual',
            type: 'scatter',
            data: [76.27547876643735,
                4.235459820891678,
                3.309088817740505,
                0.5213138871606838,
                10.953208609017537,
                8.35441303688384,
                7.7493905575931015,
                264.39564717724943,
                0.37156748032766135,
                1.823682203466069,
                0.3785821017308249,
                825.810528385646,
                22.05798408915075]
        }]
    });
});