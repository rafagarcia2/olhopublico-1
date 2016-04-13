
$(function () {
    Highcharts.Renderer.prototype.symbols.line = function(x, y, width, height) {
        return ['M',x ,y + width / 2,'L',x+height,y + width / 2];
    };

    $('#containerStacked').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Transferências por mês'
        },
        subtitle:{
            text: "em Caicó"
        },
        xAxis: {
            categories: ['2015-Jan', '2015-Fev', '2015-Mar', '2015-Abr', '2015-Mai', '2015-Jun',
                         '2015-Jul', '2015-Ago', '2015-Set', '2015-Out', '2015-Nov', '2015-Dez']
        },
        yAxis: {
            
            min: 0,
            title: {
                text: 'Valor em R$'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                },
                formatter: function () {
                    a = this.total.toFixed(2).replace(/./g, function(c, i, a) {
                        return i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c;
                    });
                    //return "R$ "+a;  // Para o valor aparecer na tela --Removido para o App
                }
            }
        },
        legend: {
            x: 0,
            itemWidth: 250,
            verticalAlign: 'bottom',
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: R$ {point.y:,.2f}'
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            },
            scatter:{
                marker:{
                    symbol:'line',
                    lineWidth:1.5,
                    radius:10,
                    lineColor:'red'
                }
            }
        },
        series: [
        {
            type: 'column',
            name: 'Desporto e Lazer',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 419250.0, 0],
            color: Highcharts.getOptions().colors[0]
        },
        {
            type: 'column',
            name: 'Gestão Ambiental',
            data: [0, 0, 0, 361866.65, 0, 0, 0, 0, 0, 0, 0, 0],
            color: Highcharts.getOptions().colors[1]
        },
        {
            type: 'column',
            name: 'Educação',
            data: [478795.68, 450426.17, 88640.0, 54548.0, 267715.14, 223360.0, 222497.38, 514809.71, 244314.84, 376915.5, 22958.88, 71142.0],
            color: Highcharts.getOptions().colors[2]
        },
        {
            type: 'column',
            name: 'Assistência Social',
            data: [224081.6, 344213.89999999997, 96587.64, 100061.04000000001, 196875.84, 181878.0, 165856.8, 92441.55, 0, 24000.0, 3450.79, 105050.73999999999],
            color: Highcharts.getOptions().colors[3]
        },
        {
            type: 'column',
            name: 'Saúde',
            data: [1305342.1, 1581046.69, 1491357.3500000003, 1686654.7399999998, 1178455.35, 1297872.2, 1416928.8299999998, 1680811.69, 1195746.3699999999, 1657469.9900000002, 2034991.2400000002, 1494445.33],
            color: Highcharts.getOptions().colors[4]
        },
        {
            type: 'column',
            name: 'Encargos Especiais',
            data: [2429455.37, 2790365.9800000004, 4189567.2800000003, 2430002.49, 3336987.9200000004, 2598669.8300000005, 3196646.7800000003, 2352681.41, 2424911.19, 2617321.45, 3240472.12, 2038415.22],
            color: Highcharts.getOptions().colors[5]
        },
        {
            type: 'column',
            name: 'Urbanismo',
            data: [0, 0, 869126.95, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            color: Highcharts.getOptions().colors[6]
        },
        {
            type: 'column',
            name: 'Agricultura',
            data: [0, 0, 191988.22, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            color: Highcharts.getOptions().colors[7]
        },
        {
            name:'Média Estadual',
            type:'scatter',
            zIndex:35,
            data: [7120469.901883703, 4646886.058393588, 3722782.5011547264, 4536415.369407425, 3076498.525110941, 8498114.574555611, 3684465.7912081718, 6791391.833596651, 3677717.875077561, 4007145.333990201, 4275761.401029759, 3173860.3348972225]
            // Os dados abaixo foi obtido dividindo a transferência para todas as cidades do estado
            //data:[1760310.12,1925785.28,2183800.76,2550761.99,1513079.29,1572239.43,1974653.23,1705312.51,1607925.14,2066325.95,1494567.46,1728918.11]
        }]
    });
});