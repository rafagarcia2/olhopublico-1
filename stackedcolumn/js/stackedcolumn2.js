
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
            text: 'Transferências por mês em Campina Grande'
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
                    radius:15,
                    lineColor:'red'
                }
            }
        },
        series: [
        {
            type: 'column',
            name: 'Habitação',
            data: [34.313452914798205, 270.73780269058295, 108.88058295964127, 159.31847533632285, 0, 0, 259.14035874439463, 0, 0, 280.1315246636771, 0, 122.5958744394619],
            color: Highcharts.getOptions().colors[0]
        },
        {
            type: 'column',
            name: 'Agricultura',
            data: [0, 0, 0, 6236.9394618834085, 10099.775784753363, 1826.233139013453, 1880.0448430493273, 2489.9663677130043, 0, 0, 0, 0],
            color: Highcharts.getOptions().colors[1]
        },
        {
            type: 'column',
            name: 'Comércio e Serviços',
            data: [0, 2041.8139013452915, 14769.424932735426, 13598.87865470852, 6053.669506726457, 4977.672286995516, 8138.714573991032, 7916.384529147982, 78.26233183856502, 672.5309417040359, 75.51677130044844, 19115.886950672644],
            color: Highcharts.getOptions().colors[2]
        },
        {
            type: 'column',
            name: 'Transporte',
            data: [0, 0, 0, 6204.176905829596, 0, 0, 0, 0, 0, 0, 0, 0],
            color: Highcharts.getOptions().colors[3]
        },
        {
            type: 'column',
            name: 'Gestão Ambiental',
            data: [228.69955156950672, 10835.902869955156, 24823.851659192824, 7983.003946188341, 3188.3408071748877, 6057.768295964126, 228.69955156950672, 0, 0, 0, 0, 0],
            color: Highcharts.getOptions().colors[4]
        },
        {
            type: 'column',
            name: 'Cultura',
            data: [340.28219730941703, 454.7501793721973, 1435.8932735426006, 0, 0, 1230.8206278026905, 874.4394618834081, 0, 0, 368.42426008968613, 0, 0],
            color: Highcharts.getOptions().colors[5]
        },
        {
            type: 'column',
            name: 'Urbanismo',
            data: [0, 0, 60708.91080717488, 121912.33847533632, 34353.547892376686, 3504.5417040358743, 5568.097040358745, 6640.358744394619, 2649.765201793722, 8213.04928251121, 1621.332556053812, 13254.841165919283],
            color: Highcharts.getOptions().colors[6]
        },
        {
            type: 'column',
            name: 'Saúde',
            data: [432713.7655605382, 462093.2818834079, 639104.946233184, 489200.90300448425, 509597.1117040361, 391770.4880717491, 448893.8523318386, 549456.3244394618, 507686.4147533634, 450785.73439461895, 426555.54067264614, 420628.4803139013],
            color: Highcharts.getOptions().colors[7]
        },
        {
            type: 'column',
            name: 'Saneamento',
            data: [48.09417040358744, 654.3273542600897, 0, 82.90798206278026, 0, 0, 0, 0, 0, 0, 42.17488789237668, 7549.211076233183],
            color: Highcharts.getOptions().colors[8]
        },
        {
            type: 'column',
            name: 'Desporto e Lazer',
            data: [0, 67.26457399103138, 12863.970403587444, 10807.444529147982, 5473.553811659192, 1345.2914798206277, 905.8071748878924, 5792.614887892377, 1600.4428251121076, 269.05829596412553, 0, 1120.3755605381166],
            color: Highcharts.getOptions().colors[9]
        },
        {
            type: 'column',
            name: 'Educação',
            data: [109919.2839013453, 104315.71260089678, 69561.03811659192, 118159.59457399107, 53945.65470852016, 109358.64026905833, 89430.64668161434, 116795.99605381163, 53601.651300448415, 503646.1128251118, 61647.68865470849, 143976.27470852018],
            color: Highcharts.getOptions().colors[10]
        },
        {
            type: 'column',
            name: 'Ciência e Tecnologia',
            data: [13.452914798206278, 0, 11210.762331838565, 448.4304932735426, 1345.2914798206277, 5583.286995515695, 1521.9282511210763, 7355.453766816143, 0, 14336.562466367714, 0, 0],
            color: Highcharts.getOptions().colors[11]
        },
        {
            type: 'column',
            name: 'Encargos Especiais',
            data: [1152943.3593273542, 1319319.1326008963, 1337377.1417937223, 1736314.6933183852, 842872.1777130044, 1005080.386547085, 1378085.1752914805, 967741.1208968604, 1006115.9071748882, 1080008.1397309422, 997246.5419282513, 1074996.5923766813],
            color: Highcharts.getOptions().colors[12]
        },
        {
            type: 'column',
            name: 'Direitos da Cidadania',
            data: [0, 664.8729596412556, 0, 3139.013452914798, 0, 1161.4349775784754, 0, 0, 0, 694.034394618834, 0, 0],
            color: Highcharts.getOptions().colors[13]
        },
        {
            type: 'column',
            name: 'Assistência Social',
            data: [63508.32730941707, 25067.479192825107, 8472.713004484303, 28461.161524663672, 44804.877982062775, 38495.443452914806, 37185.07183856501, 41124.286771300445, 36192.69506726457, 5509.5739910313905, 7378.659730941704, 47812.52973094172],
            color: Highcharts.getOptions().colors[14]
        },
        {
            type: 'column',
            name: 'Trabalho',
            data: [0, 0, 0, 0, 0, 1286.88533632287, 0, 0, 0, 1542.6008968609865, 0, 341.31838565022423],
            color: Highcharts.getOptions().colors[15]
        },
        {
            type: 'column',
            name: 'Organização Agrária',
            data: [560.5381165919282, 0, 3363.2286995515697, 8053.183856502242, 1345.2914798206277, 560.5381165919282, 1681.6143497757848, 0, 0, 0, 0, 0],
            color: Highcharts.getOptions().colors[16]
        }]
    });
});