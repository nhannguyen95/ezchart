$(document)
    .ready(
        function() {
            
        	var jsonContent = document.getElementById("json").innerHTML;
        	var chartData = JSON.parse(jsonContent);
        	
        	var bgColors12 = [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)',
                          'rgba(255, 85, 85, 0.2)',
                          'rgba(95, 211, 141, 0.2)',
                          'rgba(85, 85, 255, 0.2)',
                          'rgba(255, 127, 42, 0.2)',
                          'rgba(145, 111, 111, 0.2)',
                          'rgba(111, 138, 145, 0.2)'
                      ];
        	
        	var  bdColors12 = [
        	                    'rgba(255,99,132,1)',
        	                    'rgba(54, 162, 235, 1)',
        	                    'rgba(255, 206, 86, 1)',
        	                    'rgba(75, 192, 192, 1)',
        	                    'rgba(153, 102, 255, 1)',
        	                    'rgba(255, 159, 64, 1)',
        	                    'rgba(255, 85, 85, 1)',
        	                    'rgba(95, 211, 141, 1)',
        	                    'rgba(85, 85, 255, 1)',
        	                    'rgba(255, 127, 42, 1)',
        	                    'rgba(145, 111, 111, 1)',
        	                    'rgba(111, 138, 145, 1)'
        	                ];
        	
            var a_canvasId = "myChart";
            var canvas = document.getElementById(a_canvasId);
            var ctx = canvas.getContext("2d");
            var a_data = chartData.data;
            var a_type;
            var a_labels = chartData.values;
            var a_label = chartData.items;
            if (chartData.ccase != 1) {
            	a_labels = chartData.items;
            	a_label = chartData.values;
            }
            var a_beginAtZero = true;
            var a_titleDisplay = true;
            var a_borderWidth = 1;
            var a_chartTitle = chartData.title;
            var a_titleSize = 25;
            var a_fill; // for line chart
            var a_pointRadius; // for line chart
            
            var bdColors12;
            var myBarData;
            var myBarOption;
            var myHBarOption;
            var myPieData;
            var myPPieData;
            var myPieOption;
            var myLineData;
            var myLineOption;
            
            var isYears = function(labels) {
                for (var i = 0; i < labels.length; i++) {
                    if (isNaN(labels[0]))
                        return false;
                    var myear = parseInt(labels[i]);
                    if (myear < 1000 || myear > 3000)
                        return false;
                }
                return true;
            };
            
            var findMax = function(arr) {
            	var res = Number(arr[0]);
            	for(var i = 1; i < arr.length; i++)
            		if (Number(arr[i]) > res) res = Number(arr[i]);
            	return res;
            }
            
            var genChart = function() {
                $("#content").slideUp("slow");
                /*
                 * GENERATE ALL BAR CHART - SUPPORT
                 * 1,2,3 DATASET KIND
                 */
                // Config for Bar chart
                a_type = "bar";

                // Setup myData and myOptions
                var a_datasets = [];
                for (var i = 0; i < a_data.length; i++) {
                	a_datasets
                        .push({
                        	label: a_label[i],
                            data: a_data[i],
//                            backgroundColor: (a_data.length == 1) ? bgColors12[i] : bgColors12[i],
//                            borderColor: (a_data.length == 1) ? bdColors12[i] : bdColors12[i],
                            backgroundColor: (chartData.ccase == 1) ? bgColors12 : bgColors12[i],
                            borderColor: (chartData.ccase == 1) ? bdColors12: bdColors12[i],
                            borderWidth: a_borderWidth
                        });
                }
                myBarData = {
                	labels: a_labels,
                    datasets: a_datasets
                };
                
                myBarOption = {
                    title: {
                        display: a_titleDisplay,
                        text: a_chartTitle,
                        fontSize: a_titleSize
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: a_beginAtZero
                            }
                        }]
                    }
                };
                
                myHBarOption =  {
                        title: {
                            display: a_titleDisplay,
                            text: a_chartTitle,
                            fontSize: a_titleSize
                        },
                        scales: {
                            xAxes: [{
                                ticks: {
                                    beginAtZero: a_beginAtZero
                                }
                            }]
                        }
                    };
                
                // draw Bar chart (normal)
                var myBarChartN1 = new Chart(ctx, {
                	type: a_type,
                	data: myBarData,
                	options: myBarOption
                });

                // draw Bar chart (horizontal)
                // a_type = "horizontalBar";
                // var myBarChartH1 = new Chart(ctx, {
                // type: a_type,
                // data: myBarData,
                // options: myBarOption
                // });

                /*
                 * GENERATE ALL PIE CHART - SUPPORT 1, 2
                 * DATASET KIND
                 */
                // Config for Pie chart
                a_type = "pie";

                // Setup myData and myOption
                myPieData = {
                    labels: a_labels,
                    datasets: [{
                        data: a_data[0],
                        backgroundColor: bgColors12,
                        borderColor: bdColors12,
                        borderWidth: a_borderWidth
                    }]
                };

                myPieOption = {
                    title: {
                        display: a_titleDisplay,
                        text: a_chartTitle,
                        fontSize: a_titleSize
                    }
                };

                // draw Pie chart (raw value)
                // var myPieChartR1 = new Chart(ctx, {
                // type: a_type,
                // data: myPieData,
                // options: myPieOption
                // });

                // draw Pie chart (percentage)
                // var tmp_sum =
                // a_data[0].reduce(function(a, b) {
                // return a + b;}, 0);
                // var tmp_data = [];
                // for(var i = 0; i < a_data[0].length;
                // i++)
                // tmp_data.push((a_data[0][i]/tmp_sum).toFixed(3));
                // a_type = "pie";
                // a_data = tmp_data;
                // myData = {
                // labels: a_labels,
                // datasets: [{
                // data: a_data,
                // backgroundColor: bgColors12,
                // borderColor: bdColors12,
                // borderWidth: a_borderWidth
                // }]
                // };
                //	    
                // var myPieChartP1 = new Chart(ctx, {
                // type: a_type,
                // data: myPieData,
                // options: myPieOption
                // });

                /*
                 * GENERATE ALL LINE CHART - SUPPORT 2,3
                 * DATASET KIND
                 */
                // Config for Line chart
                a_type = "line";
                a_borderWidth = 2;
                a_fill = false;
                a_pointRadius = 5;

                // Setup myData and myOption
                a_datasets = [];
                for (var i = 0; i < a_data.length; i++) {
                    a_datasets
                        .push({
                            label: a_label[i],
                            data: a_data[i],
                            backgroundColor: (a_data.length == 1) ? bgColors12[0] : bgColors12[i],
                            borderColor: (a_data.length == 1) ? bdColors12[0] : bdColors12[i],
                            borderWidth: a_borderWidth,
                            fill: a_fill,
                            lineTension: 0,
                            pointRadius: a_pointRadius
                        });
                }
                myLineData = {
                    labels: a_labels,
                    datasets: a_datasets
                };

                myLineOption;
                if (isYears(a_labels)) {
                    myLineOption = {
                        title: {
                            display: a_titleDisplay,
                            text: a_chartTitle,
                            fontSize: a_titleSize
                        },
                        scales: {
                            xAxes: [{
                                type: 'time',
                                time: {
                                    unit: 'year'
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: a_beginAtZero
                                }
                            }]
                        }
                    };
                } else {
                    myLineOption = {
                        title: {
                            display: a_titleDisplay,
                            text: a_chartTitle,
                            fontSize: a_titleSize
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: a_beginAtZero
                                }
                            }]
                        }
                    }
                }
                // draw Line chart
                //                $("#chart-content").fadeIn(800);
                //                var myLineChart3 = new Chart(ctx, {
                //                    type: a_type,
                //                    data: myLineData,
                //                    options: myLineOption
                //                });

            };
            
            genChart();
            
            var resetCanvas = function(chart_type) {
                $('#' + a_canvasId).remove(); // this is my <canvas> element
                $('.chart-demo').append('<canvas id="myChart" width="200" height="100"></canvas>');
                canvas = document.getElementById(a_canvasId);
                ctx = canvas.getContext("2d");
                var x = canvas.width / 2;
                var y = canvas.height / 2;
                ctx.font = 'Open Sans';
                ctx.fontSize = '100px';
                ctx.textAlign = 'center';
                if (chartData.ccase == 1) {
                    if (chart_type == "line") {
                        ctx.fillText('Not supported', 100, 100);
                        return false;
                    }
                } else if (chartData.ccase == 3) {
                    if (chart_type == "pie") {
                        ctx.fillText('Not supported', 100, 100);
                        return false;
                    }
                }
                return true;
            };

            $("#bar-chart").click(function() {
                a_type = "bar";
                resetCanvas("bar");
                var myChart = new Chart(ctx, {
                    type: a_type,
                    data: myBarData,
                    options: myBarOption
                });
            });

            $("#hbar-chart").click(function() {
                a_type = "horizontalBar";
                resetCanvas("bar");
                var myChart = new Chart(ctx, {
                    type: a_type,
                    data: myBarData,
                    options: myHBarOption
                });
            });

            $("#line-chart").click(function() {
                a_type = "line";
                if (resetCanvas("line")) {
                    var myChart = new Chart(ctx, {
                        type: a_type,
                        data: myLineData,
                        options: myLineOption
                    });
                }
            });

            $("#pie-chart").click(function() {
                a_type = "pie";
                if (resetCanvas("pie")) {
                    var myChart = new Chart(ctx, {
                        type: a_type,
                        data: myPieData,
                        options: myPieOption
                    });
                }
            });

            $("#ppie-chart").click(function() {
                a_type = "pie";

                if (resetCanvas("pie")) {
                    var tmp_sum = a_data[0].reduce(function(a, b) {
                        return Number(a) + Number(b);
                    }, 0);

                    var tmp_data = [];
                    for (var i = 0; i < a_data[0].length; i++)
                        tmp_data.push((Number(a_data[0][i]) / tmp_sum).toFixed(3) * 100);

                    myPPieData = {
                        labels: a_labels,
                        datasets: [{
                            data: tmp_data,
                            backgroundColor: bgColors12,
                            borderColor: bdColors12,
                            borderWidth: a_borderWidth
                        }]
                    };

                    var myPieChartP1 = new Chart(ctx, {
                        type: a_type,
                        data: myPPieData,
                        options: myPieOption
                    });
                }
            });
        });