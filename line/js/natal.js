
$(function () {
    Highcharts.Renderer.prototype.symbols.line = function(x, y, width, height) {
        return ['M',x ,y + width / 2,'L',x+height,y + width / 2];
    };

    var servicos = {28: 'Encargos Especiais', 11: 'Trabalho', 14: 'Direitos da Cidadania', 8: 'Assistência Social',
    10: 'Saúde', 26: 'Transporte', 27: 'Desporto e Lazer', 12: 'Educação', 15: 'Urbanismo', 19: 'Ciência e Tecnologia',
    17: 'Saneamento', 20: 'Agricultura', 23: 'Comércio e Serviços', 13: 'Cultura'};

    $('#container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Transferências por mês'
        },
        subtitle:{
            text: "em Natal"
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
    
    name: 'Desporto e Lazer',
    data: [0, 0, 0, 505689.59, 0, 0, 0, 0, 0, 0, 0, 0],
    color: Highcharts.getOptions().colors[0]
},
{
    
    name: 'Encargos Especiais',
    data: [21240912.0, 24375678.72, 36713477.300000004, 21261156.98, 29172433.579999994, 22780301.1, 27924235.63, 20721807.95, 21177823.13, 22927047.02, 28292908.690000005, 17805820.2],
    color: Highcharts.getOptions().colors[1]
},
{
    
    name: 'Cultura',
    data: [256763.6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 542594.72],
    color: Highcharts.getOptions().colors[2]
},
{
    
    name: 'Educação',
    data: [3603029.58, 4392468.77, 1156881.85, 762160.6799999999, 2339175.6199999996, 1433272.5899999999, 1206968.09, 3744183.6500000004, 2017349.1300000001, 2663489.19, 209143.75, 817300.74],
    color: Highcharts.getOptions().colors[3]
},
{
    
    name: 'Segurança Pública',
    data: [3953232.12, 0, 0, 0, 0, 0, 1694242.34, 0, 0, 0, 0, 0],
    color: Highcharts.getOptions().colors[4]
},
{
    
    name: 'Assistência Social',
    data: [469247.2, 585547.0800000001, 620865.39, 412085.79000000004, 135898.13, 905042.71, 116328.32, 148696.73, 0, 0, 378369.64, 352332.52],
    color: Highcharts.getOptions().colors[5]
},
{
    
    name: 'Saúde',
    data: [14808857.09, 14728089.97, 18097689.799999997, 16266087.630000003, 16947981.79, 11403937.700000001, 15803185.25, 17218451.32, 16405045.030000001, 18567365.0, 25210655.310000006, 15250181.020000001],
    color: Highcharts.getOptions().colors[6]
},
{
    
    name: 'Direitos da Cidadania',
    data: [0, 0, 0, 0, 356166.5, 296179.81, 356166.5, 0, 0, 0, 0, 0],
    color: Highcharts.getOptions().colors[7]
},
{
    
    name: 'Saneamento',
    data: [0, 0, 0, 4536.69, 0, 0, 0, 0, 0, 0, 36200.97, 0],
    color: Highcharts.getOptions().colors[8]
},
{
    
    name: 'Urbanismo',
    data: [0, 0, 1275000.0, 0, 121589.51, 0, 0, 0, 0, 0, 656999.97, 0],
    color: Highcharts.getOptions().colors[9]
},
{
    
    name: 'Agricultura',
    data: [0, 677934.0, 0, 757000.0, 0, 0, 0, 0, 0, 796524.0, 0, 0],
    color: Highcharts.getOptions().colors[10]
},
{
    
    name: 'Ciência e Tecnologia',
    data: [533000.0, 573490.09, 0, 195046.38, 0, 0, 0, 0, 0, 0, 0, 0],
    color: Highcharts.getOptions().colors[11]
},
{
    
    name: 'Comércio e Serviços',
    data: [300000.0, 215612.66, 1536640.88, 0, 0, 711305.0, 751782.0, 493123.0, 0, 500000.0, 0, 0],
    color: Highcharts.getOptions().colors[12]
}]
    });
});