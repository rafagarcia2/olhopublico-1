
$(function () {
    Highcharts.Renderer.prototype.symbols.line = function(x, y, width, height) {
        return ['M',x ,y + width / 2,'L',x+height,y + width / 2];
    };

    var servicos = {28: 'Encargos Especiais', 11: 'Trabalho', 14: 'Direitos da Cidadania', 8: 'Assistência Social',
    10: 'Saúde', 26: 'Transporte', 27: 'Desporto e Lazer', 12: 'Educação', 15: 'Urbanismo', 19: 'Ciência e Tecnologia',
    17: 'Saneamento', 20: 'Agricultura', 23: 'Comércio e Serviços', 13: 'Cultura'};

    $('#container').highcharts({
        chart: {
            type: 'column'
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
    type: 'column',
    name: 'Desporto e Lazer',
    data: [0, 0, 73125.0, 195000.0, 0, 0, 0, 0, 0, 0, 0, 0],
    color: Highcharts.getOptions().colors[0]
},
{
    type: 'column',
    name: 'Encargos Especiais',
    data: [878978.9899999999, 1004682.5700000001, 1473856.39, 867941.55, 1204857.6700000002, 934074.0, 1152668.57, 843882.9099999999, 874365.6799999999, 941715.84, 1165153.15, 734318.87],
    color: Highcharts.getOptions().colors[1]
},
{
    type: 'column',
    name: 'Comércio e Serviços',
    data: [63999.0, 0, 85234.5, 0, 0, 0, 0, 0, 0, 0, 53966.25, 127315.5],
    color: Highcharts.getOptions().colors[2]
},
{
    type: 'column',
    name: 'Assistência Social',
    data: [15500.0, 78532.76000000001, 19942.57, 20750.0, 34804.51, 58677.22, 42000.0, 52948.06, 9000.0, 0, 1748.42, 74188.32999999999],
    color: Highcharts.getOptions().colors[3]
},
{
    type: 'column',
    name: 'Saúde',
    data: [190659.0, 191207.06, 166915.56999999998, 229286.91000000003, 231957.3, 178456.66999999998, 240442.21, 237887.58, 195391.97, 220917.09, 353716.31, 263232.18],
    color: Highcharts.getOptions().colors[4]
},
{
    type: 'column',
    name: 'Educação',
    data: [183567.35, 179057.63, 42416.03, 37906.369999999995, 108257.91, 122196.09, 212011.73, 837789.63, 94554.77, 166685.18, 9530.15, 36334.090000000004],
    color: Highcharts.getOptions().colors[5]
},
{
    type: 'column',
    name: 'Urbanismo',
    data: [0, 0, 14788.92, 0, 0, 0, 0, 0, 0, 0, 67050.96, 27142.48],
    color: Highcharts.getOptions().colors[6]
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