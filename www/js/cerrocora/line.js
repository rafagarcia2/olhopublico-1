
$(function () {
    Highcharts.Renderer.prototype.symbols.line = function(x, y, width, height) {
        return ['M',x ,y + width / 2,'L',x+height,y + width / 2];
    };

    $('#containerLine').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Transferências por mês'
        },
        subtitle:{
            text: "em Cerro-Corá"
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
                    return "R$ "+a;
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
                    lineWidth:3,
                    radius:20,
                    lineColor:'red'
                }
            }
        },
        series: [
        {
            name: 'Desporto e Lazer',
            data: [0, 0, 73125.0, 195000.0, 0, 0, 0, 0, 0, 0, 0, 0],
            color: Highcharts.getOptions().colors[0]
        },
        {
            name: 'Encargos Especiais',
            data: [878978.9899999999, 1004682.5700000001, 1473856.39, 867941.55, 1204857.6700000002, 934074.0, 1152668.57, 843882.9099999999, 874365.6799999999, 941715.84, 1165153.15, 734318.87],
            color: Highcharts.getOptions().colors[1]
        },
        {
            name: 'Comércio e Serviços',
            data: [63999.0, 0, 85234.5, 0, 0, 0, 0, 0, 0, 0, 53966.25, 127315.5],
            color: Highcharts.getOptions().colors[2]
        },
        {
            name: 'Assistência Social',
            data: [15500.0, 78532.76000000001, 19942.57, 20750.0, 34804.51, 58677.22, 42000.0, 52948.06, 9000.0, 0, 1748.42, 74188.32999999999],
            color: Highcharts.getOptions().colors[3]
        },
        {
            name: 'Saúde',
            data: [190659.0, 191207.06, 166915.56999999998, 229286.91000000003, 231957.3, 178456.66999999998, 240442.21, 237887.58, 195391.97, 220917.09, 353716.31, 263232.18],
            color: Highcharts.getOptions().colors[4]
        },
        {
            name: 'Educação',
            data: [183567.35, 179057.63, 42416.03, 37906.369999999995, 108257.91, 122196.09, 212011.73, 837789.63, 94554.77, 166685.18, 9530.15, 36334.090000000004],
            color: Highcharts.getOptions().colors[5]
        },
        {
            name: 'Urbanismo',
            data: [0, 0, 14788.92, 0, 0, 0, 0, 0, 0, 0, 67050.96, 27142.48],
            color: Highcharts.getOptions().colors[6]
        }]
    });
});