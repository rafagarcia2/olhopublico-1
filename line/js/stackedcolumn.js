
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
            text: "em Currais Novos"
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
            align: 'right',
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
            name: 'Saúde',
            data: [671610.9, 729714.41, 1113762.9, 727562.66, 845774.52, 531948.5600000002, 685815.66, 974668.7000000002, 764872.2500000001, 754963.5700000001, 704185.4500000002, 654094.35],
            color: Highcharts.getOptions().colors[0]
        },
        {
            type: 'column',
            name: 'Educação',
            data: [494276.17000000004, 100606.91, 21008.59, 78505.17, 61475.10999999999, 403566.14, 267508.62, 438392.46, 61992.73999999999, 344527.53, 211156.33, 221445.11],
            color: Highcharts.getOptions().colors[1]
        },
        {
            type: 'column',
            name: 'Encargos Especiais',
            data: [2396970.71, 2772071.1199999996, 2795818.2300000004, 3568458.4899999998, 1764559.98, 2092810.0, 2890854.33, 2037196.5699999998, 2095926.2699999998, 2262745.7800000003, 2095703.8499999999, 2241042.28],
            color: Highcharts.getOptions().colors[2]
        },
        {
            type: 'column',
            name: 'Direitos da Cidadania',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100000.0, 0],
            color: Highcharts.getOptions().colors[3]
        },
        {
            type: 'column',
            name: 'Assistência Social',
            data: [70034.04000000001, 133330.0, 2716.23, 90149.56, 187323.13999999998, 122177.02, 42429.14, 62472.54000000001, 53234.04000000001, 33600.0, 51000.0, 93683.54999999999],
            color: Highcharts.getOptions().colors[4]
        },
        {
            type: 'column',
            name: 'Urbanismo',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221825.0],
            color: Highcharts.getOptions().colors[5]
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