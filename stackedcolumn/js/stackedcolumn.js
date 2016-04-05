
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
        xAxis: {
            categories: ['2015-Fev', '2015-Mar', '2015-Abr', '2015-Mai', '2015-Jun',
            '2015-Jul', '2015-Ago', '2015-Set', '2015-Out', '2015-Nov', '2015-Dez', '2016-Jan', '2016-Fev']
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
        series: [{
            type: 'column',
            name: servicos[20],
            data: [0, 0, 0, 0, 0, 0, 0, 1657500.00, 0, 0, 0, 0, 0],
            color: Highcharts.getOptions().colors[0]
        }, {
            type: 'column',
            name: servicos[28],
            data: [11994825.26, 8708483.26, 9449780.36, 11485947.24, 10029783.92, 8554124.70, 8743352.06, 7321168.25, 8524091.14, 9368316.46, 14388132.07, 10510485.20, 13075943.25],
            color: Highcharts.getOptions().colors[1]
        }, {
            type: 'column',
            name: servicos[8],
            data: [670784.49, 120000.00, 0, 145600.00, 853065.29, 708055.02, 316876.94, 861171.93, 741998.27, 479698.10, 309198.81, 1041240.72, 1157329.25],
            color: Highcharts.getOptions().colors[2]
        }, {
            type: 'column',
            name: servicos[17],
            data: [0, 9405.00, 0, 145915.00, 10725.00, 0, 0, 0, 0, 0, 0, 0, 8745.00],
            color: Highcharts.getOptions().colors[3]
        }, {
            type: 'column',
            name: servicos[27],
            data: [6995.00, 0, 15000.00, 0, 0, 161898.75, 0, 0, 0, 0, 66299.55, 0, 0],
            color: Highcharts.getOptions().colors[4]
        }, {
            type: 'column',
            name: servicos[23],
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92173.35, 0, 0],
            color: Highcharts.getOptions().colors[5]
        }, {
            type: 'column',
            name: servicos[10],
            data: [13667241.20, 15372592.10, 15051928.11, 14391817.34, 13836840.08, 16262208.44, 13450341.60, 14951056.50, 17508233.07, 12105181.76, 17562708.86, 12529341.83, 14434628.67],
            color: Highcharts.getOptions().colors[6]
        }, {
            type: 'column',
            name: servicos[15],
            data: [67080.05, 92936.41, 1621310.48, 0, 0, 33677.34, 9341.16, 1013321.54, 0, 0, 364555.16, 0, 10152.37],
            color: Highcharts.getOptions().colors[7]
        }, {
            type: 'column',
            name: servicos[13],
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59971.82],
            color: Highcharts.getOptions().colors[8]
        }, {
            type: 'column',
            name: servicos[14],
            data: [0, 0, 0, 148266.67, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            color: Highcharts.getOptions().colors[9]
        }, {
            type: 'column',
            name: servicos[12],
            data: [609730.53, 304404.9, 6199328.57, 524404.87, 956405.44, 436770.27, 1071395.80, 470006.52, 2005416.57, 1674205.01, 1009265.03, 4992548.46, 562515.31],
            color: Highcharts.getOptions().colors[10]
        }, {
            type: 'column',
            name: servicos[19],
            data: [339390.00, 0, 3197053.43, 0, 0, 0, 1245073.00, 0, 1640266.19, 0, 0, 1800000.00, 1964835.57],
            color: Highcharts.getOptions().colors[11]
        }, {
            type: 'column',
            name: servicos[26],
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1383531.45, 0, 0],
            color: Highcharts.getOptions().colors[12]
        }, {
            type: 'column',
            name: servicos[11],
            data: [0, 0, 344000.00, 0, 0, 0, 286975.43, 0, 0, 76114.00, 0, 0, 0],
            color: Highcharts.getOptions().colors[13]
        }, {
        name:'Target',
        type:'scatter',
        zIndex:20,
        data:[1657500.00,1657500.00,1657500.00,1657500.00,1657500.00,1657500.00,1657500.00,1657500.00,1657500.00,1657500.00,1657500.00,1657500.00,1657500.00]
        }]
    });
});