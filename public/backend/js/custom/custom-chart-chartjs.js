/*
--------------------------------------
    : Custom - Chartjs Charts js :
--------------------------------------
*/
"use strict";
$(document).ready(function() {
    /* -----  Chartjs - Global Style  ----- */
    Chart.defaults.global.defaultFontFamily = 'Muli';
    Chart.defaults.global.defaultFontColor = '#8A98AC';
    Chart.defaults.global.defaultFontSize = 13;
    Chart.defaults.global.defaultFontStyle = 'normal';
    Chart.defaults.global.maintainAspectRatio = 0;
    Chart.defaults.global.lineWidth = 2;
    Chart.defaults.global.tooltips.backgroundColor = '#282828';
    Chart.defaults.global.tooltips.titleFontSize = 14;
    Chart.defaults.global.tooltips.titleFontStyle = 'normal';
    Chart.defaults.global.tooltips.bodyFontSize = 12;
    Chart.defaults.global.tooltips.bodyFontStyle = 'normal';
    Chart.defaults.global.tooltips.bodyFontColor = '#8A98AC';
    Chart.defaults.global.tooltips.xPadding = 10;
    Chart.defaults.global.tooltips.yPadding = 10;
    Chart.defaults.global.tooltips.titleMarginBottom = 10;
    Chart.defaults.global.tooltips.bodySpacing = 8;
    Chart.defaults.global.tooltips.cornerRadius = 5;    
    Chart.defaults.global.legend.labels.boxWidth = 15;
    Chart.defaults.global.legend.labels.fontSize = 15;
    Chart.defaults.global.legend.labels.padding = 16;    
    /* -- Chartjs - Line Different Size Point Chart -- */
    var lineDiffPointID = document.getElementById("chartjs-line-diff-size-point").getContext('2d');
    var lineDiffPoint = new Chart(lineDiffPointID, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Series A',
                data: [-80, 40, -60, 30, -60, -40, 20],
                backgroundColor: ["#0080ff"],
                borderColor: ["#0080ff"],
                pointBorderColor: ["transparent","transparent","transparent","transparent","transparent","transparent","transparent"],
                pointBackgroundColor: ["#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff"],
                fill: false,
                borderDash: [5, 5],
                pointRadius: 15,
                pointHoverRadius: 20,
            }, {
                label: 'Series B',
                data: [-40, 80, -20, 60, -40, -15, 60],
                backgroundColor: ["#18d26b"],
                borderColor: ["#18d26b"],
                pointBorderColor: ["transparent","transparent","transparent","transparent","transparent","transparent","transparent"],
                pointBackgroundColor: ["#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b"],
                fill: false,
                borderDash: [5, 5],
                pointRadius: [5, 4, 6, 10, 3, 8, 12],
                pointHoverRadius: 15,
            }, {
                label: 'Series C',
                data: [40, -80, 20, -60, 40, 15, -60],
                backgroundColor: ["#d4d8de"],
                borderColor: ["#d4d8de"],
                pointBorderColor: ["transparent","transparent","transparent","transparent","transparent","transparent","transparent"],
                pointBackgroundColor: ["#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de"],
                fill: false,
                pointRadius: [4, 6, 8, 7, 5, 3, 10],
                pointHoverRadius: 10,
            }, {
                label: 'Series D',
                data: [80, -40, 60, -30, 60, 40, -20],
                backgroundColor: ["#ff3f3f"],
                borderColor: ["#ff3f3f"],
                pointBorderColor: ["transparent","transparent","transparent","transparent","transparent","transparent","transparent"],
                pointBackgroundColor: ["#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f"],
                fill: false,
                pointRadius: [6, 8, 10, 4, 3, 5, 5],
                pointHitRadius: 5,
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top'
            },
            hover: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    },
                    gridLines: {
                        color: 'rgba(0,0,0,0.05)',
                        lineWidth: 1,
                        borderDash: [0]
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    gridLines: {
                        color: 'rgba(0,0,0,0.05)',
                        lineWidth: 1,
                        borderDash: [0]
                    }
                }]
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart - Different point sizes'
            }
        }
    });
    /* -- Chartjs - Basic Line Chart -- */    
    var linechartID = document.getElementById("chartjs-basic-line").getContext('2d');
        var lineChart = new Chart(linechartID, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Series A',
                    backgroundColor: ["#0080ff"],
                    borderColor: ["#0080ff"],
                    pointBorderColor: ["#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [-25, 32, -17, 83, -87, 92, -82],
                    fill: false,
                }, {
                    label: 'Series B',
                    fill: false,
                    backgroundColor: ["#18d26b"],
                    borderColor: ["#18d26b"],
                    pointBorderColor: ["#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [-50, -83, -37, 25, -58, -97, 21],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Chart.js Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: false
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        },
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0]
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0]
                        }
                    }]
                }
            }
        });
        /* -- Chartjs - Line Stepped Chart -- */
        var lineSteppedID = document.getElementById("chartjs-line-stepped").getContext('2d');
        var lineStepped = new Chart(lineSteppedID, {
            type: 'line',
                data: {
                    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
                    datasets: [{
                        label: 'Series A',
                        steppedLine: true,
                        data: [68, -68, 20, 90, -20, 31],
                        borderColor: ["#0080ff"],
                        pointBorderColor: ["#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff"],
                        pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                        pointBorderWidth: 2,
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: false,
                        text: 'Stepped Line',
                    },
                    scales: {
                        xAxes: [{       
                            gridLines: {
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0]
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0]
                            }
                        }]
                    }
                }
        });
        /* -- Chartjs - Scatter Chart -- */
        var scatterChartID = document.getElementById("chartjs-scatter-chart").getContext('2d');
        var scatterChart = new Chart(scatterChartID, {
            type: 'line',
            data: {
                datasets: [{
                    borderColor: ["#0080ff"],
                    backgroundColor: ["rgba(0,128,255,0.5)"],
                    pointBorderColor: ["#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    label: 'Series A',
                    data: [{
                        x: 1,
                        y: -.01711
                    }, {
                        x: 1.58,
                        y: -.04285
                    }, {
                        x: 2.51,
                        y: -.1068
                    }, {
                        x: 3.98,
                        y: -.2635
                    }, {
                        x: 6.31,
                        y: -.6339
                    }, {
                        x: 10,
                        y: -1.445
                    }, {
                        x: 15.8,
                        y: -2.992
                    }, {
                        x: 25.1,
                        y: -5.429
                    }, {
                        x: 39.8,
                        y: -8.607
                    }, {
                        x: 63.1,
                        y: -12.23
                    }, {
                        x: 100,
                        y: -16.07
                    }]
                }]
            },
            options: {
                title: {
                    display: false,
                    text: 'Chart.js Scatter Chart - Logarithmic X-Axis'
                },
                scales: {
                    xAxes: [{
                        type: 'logarithmic',
                        position: 'bottom',
                        ticks: {
                            userCallback: function(tick) {
                                var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));
                                if (remain === 1 || remain === 2 || remain === 5) {
                                    return tick.toString() + 'Hz';
                                }
                                return '';
                            },
                        },
                        scaleLabel: {
                            labelString: 'Frequency',
                            display: true,
                        },
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0]
                        }
                    }],
                    yAxes: [{
                        type: 'linear',
                        ticks: {
                            userCallback: function(tick) {
                                return tick.toString() + 'dB';
                            }
                        },
                        scaleLabel: {
                            labelString: 'Voltage',
                            display: true
                        },
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0]
                        }
                    }]
                }
            }
        });
        /* -- Chartjs - Line Point Chart -- */
        var linePointID = document.getElementById("chartjs-line-point").getContext('2d');
        var linePoint = new Chart(linePointID, {
            type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: ["#0080ff"],
                        borderColor: ["#0080ff"],                        
                        pointBorderColor: ["#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff"],
                        pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                        pointBorderWidth: 2,
                        data: [10, 23, 5, 88, 67, 43, 0],
                        fill: false,
                        pointRadius: 10,
                        pointHoverRadius: 15,
                        showLine: false,
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: false,
                        text: 'Point Style'
                    },
                    legend: {
                        display: false
                    },
                    elements: {
                        point: {
                            pointStyle: 'rectRot'
                        }
                    },
                    scales: {
                        xAxes: [{       
                            gridLines: {
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0]
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0],
                                zeroLineColor: 'rgba(0,0,0,0.05)'
                            }
                        }]
                    }
                }
        });
        /* -- Chartjs - Bar Chart -- */
        var barChartID = document.getElementById("chartjs-bar-chart").getContext('2d');
        var barChart = new Chart(barChartID, {
            type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Series A',
                        backgroundColor: ["#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff"],
                        borderColor: ["#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff"],
                        borderWidth: 1,
                        data: [50, 70, 40, 90, 60, 40, 80, 20]
                    }, {
                        label: 'Series B',
                        backgroundColor: ["#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b"],
                        borderColor: ["#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b"],
                        borderWidth: 1,
                        data: [55, 75, 45, 95, 65, 45, 85, 25]
                    }]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: false,
                        text: 'Chart.js Bar Chart'
                    },
                    scales: {
                        xAxes: [{       
                            gridLines: {
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0]
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0]
                            }
                        }]
                    }
                }
        });
        /* -- Chartjs - Horizontal Bar Chart -- */
        var horiBarChartID = document.getElementById("chartjs-horizontal-bar-chart").getContext('2d');
        var horiBarChart = new Chart(horiBarChartID, {
            type: 'horizontalBar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Series A',
                        backgroundColor: ["#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff"],
                        borderColor: ["#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff"],
                        borderWidth: 1,
                        data: [50, 70, 40, 90, 60, 40, 80, 20]
                    }, {
                        label: 'Series B',
                        backgroundColor: ["#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b"],
                        borderColor: ["#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b"],
                        borderWidth: 1,
                        data: [55, 75, 45, 95, 65, 45, 85, 25]
                    }]
                },
                options: {
                    elements: {
                        rectangle: {
                            borderWidth: 2,
                        }
                    },
                    responsive: true,
                    legend: {
                        position: 'right'
                    },
                    title: {
                        display: false,
                        text: 'Chart.js Horizontal Bar Chart'
                    },
                    scales: {
                        xAxes: [{       
                            gridLines: {
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0]
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0]
                            }
                        }]
                    }                    
                }
        });
        /* -- Chartjs - Multi Axis Bar Chart -- */
        var multiAxisBarChartID = document.getElementById("chartjs-multi-axis-bar-chart").getContext('2d');
        var multiAxisBarChart = new Chart(multiAxisBarChartID, {
            type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Series A',
                        backgroundColor: ["#0080ff","#18d26b","#d4d8de","#ff3f3f","#ffa800","#00b8d4","#263a5b"],
                        yAxisID: 'y-axis-1',
                        data: [82, 20, -96, 52, -49, -78, -4]
                    }, {
                        label: 'Series B',
                        backgroundColor: ["#d4d8de"],
                        yAxisID: 'y-axis-2',
                        data: [7, 33, 32, 95, -78, 72, 74]
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: false,
                        text: 'Chart.js Bar Chart - Multi Axis'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: true
                    },
                    scales: {
                        yAxes: [{
                            type: 'linear',
                            display: true,
                            position: 'left',
                            id: 'y-axis-1',
                            gridLines: {
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0]
                            }
                        }, {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            id: 'y-axis-2',
                            gridLines: {
                                drawOnChartArea: false,
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0]
                            }
                        }],
                    }
                }
        });
        /* -- Chartjs - Stacked Bar Chart -- */
        var stackedBarChartID = document.getElementById("chartjs-stacked-bar-chart").getContext('2d');
        var stackedBarChart = new Chart(stackedBarChartID, {
            type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Series A',
                        backgroundColor: ["#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff"],
                        data: [70, 66, 50, 69, 9, 36, -26]
                    }, {
                        label: 'Series B',
                        backgroundColor: ["#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b", "#18d26b"],
                        data: [19, -17, 67, -21, -26, 32, -29]
                    }, {
                        label: 'Series C',
                        backgroundColor: ["#d4d8de", "#d4d8de", "#d4d8de", "#d4d8de", "#d4d8de", "#d4d8de", "#d4d8de"],
                        data: [92, -48, 80, 21, -90, -12, 43]
                    }]
                },
                options: {
                    title: {
                        display: false,
                        text: 'Chart.js Bar Chart - Stacked'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                            gridLines: {
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0]
                            }
                        }],
                        yAxes: [{
                            stacked: true,
                            gridLines: {
                                color: 'rgba(0,0,0,0.05)',
                                lineWidth: 1,
                                borderDash: [0]
                            }
                        }]
                    }
                }
        });
        /* -- Chartjs - Line Bar Mixed Chart -- */
        var lineBarMixedID = document.getElementById("chartjs-line-bar-mixed-chart").getContext('2d');
        var lineBarMixed = new Chart(lineBarMixedID, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    type: 'bar',
                    label: 'Series A',
                    backgroundColor: [
                        "rgba(0,128,255,0.9)",
                        "rgba(0,128,255,0.9)",
                        "rgba(0,128,255,0.9)",
                        "rgba(0,128,255,0.9)",
                        "rgba(0,128,255,0.9)",
                        "rgba(0,128,255,0.9)",
                        "rgba(0,128,255,0.9)"
                    ],
                    borderColor: [
                        "transparent",
                        "transparent",
                        "transparent",
                        "transparent",
                        "transparent",
                        "transparent",
                        "transparent"
                    ],
                    borderWidth: 2,
                    data: [70,40,30,20,10,50,60]
                }, {
                    type: 'bar',
                    label: 'Series B',
                    backgroundColor: [
                        "rgba(24,210,107,0.9)",
                        "rgba(24,210,107,0.9)",
                        "rgba(24,210,107,0.9)",
                        "rgba(24,210,107,0.9)",
                        "rgba(24,210,107,0.9)",
                        "rgba(24,210,107,0.9)",
                        "rgba(24,210,107,0.9)"
                    ],
                    borderColor: [
                        "transparent",
                        "transparent",
                        "transparent",
                        "transparent",
                        "transparent",
                        "transparent",
                        "transparent"
                    ],
                    borderWidth: 2,
                    data: [90,30,20,10,5,60,80]
                }, {
                    type: 'line',
                    label: 'Series C',
                    backgroundColor: ["rgba(212,216,222,0.5)"],
                    borderColor: ["#d4d8de"],
                    pointBorderColor: ["#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de"],
                    pointBorderWidth: 2,
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    data: [30,50,20,40,70,50,10]
                }]
            },  
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Chart.js Combo Bar Line Chart'
                },
                scales: {
                    xAxes: [{       
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0]
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0],
                            zeroLineColor: 'rgba(0,0,0,0.05)'
                        }
                    }]
                }
            }
        });
        /* -- Chartjs - Boundary Area Chart -- */
        var boundaryAreaID = document.getElementById("chartjs-boundary-area-chart").getContext('2d');
        var boundaryArea = new Chart(boundaryAreaID, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    backgroundColor: ["rgba(0,128,255,0.5)"],
                    borderColor: ["#0080ff"],
                    pointBorderColor: ["#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [6.06, 82.2, -22.11, 21.53, -21.47, 73.61, -53.75, -60.32],
                    label: 'Series A',
                    fill: 'start'
                }]
            },
            options: {
                title: {
                    text: 'fill: start',
                    display: false
                },
                maintainAspectRatio: true,
                spanGaps: true,
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                scales: {
                    xAxes: [{  
                        ticks: {
                            autoSkip: false,
                            maxRotation: 0
                        },     
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0]
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0],
                            zeroLineColor: 'rgba(0,0,0,0.05)',
                        }
                    }]
                }
            }
        });
        /* -- Chartjs - Dataset Area Chart -- */
        var datasetAreaID = document.getElementById("chartjs-dataset-area-chart").getContext('2d');
        var datasetArea = new Chart(datasetAreaID, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
                datasets: [{
                    backgroundColor: ["rgba(129,167,205,0.5)"],
                    borderColor: ["#93b4d4"],
                    pointBorderColor: ["#93b4d4","#93b4d4","#93b4d4","#93b4d4","#93b4d4","#93b4d4","#93b4d4","#93b4d4"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [54, 55, 54, 60, 40, 28, 25, 72],
                    hidden: true,
                    label: 'D0'
                }, {                          
                    backgroundColor: ["rgba(255,63,63,0.5)"],
                    borderColor: ["#ff3f3f"],  
                    pointBorderColor: ["#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,                      
                    data: [30, 20, 26, 44, 68, 76, 58, 21],
                    label: 'D1',
                    fill: '-1'
                }, {
                    backgroundColor: ["rgba(24,210,107,0.5)"],
                    borderColor: ["#18d26b"],
                    pointBorderColor: ["#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2, 
                    data: [59, 22, 28, 77, 76, 39, 42, 22],
                    label: 'D3',
                    fill: '-1'
                }, {
                    backgroundColor: ["rgba(129,206,246,0.5)"],
                    borderColor: ["#81cef6"], 
                    pointBorderColor: ["#81cef6","#81cef6","#81cef6","#81cef6","#81cef6","#81cef6","#81cef6","#81cef6"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,                       
                    data: [59, 22, 28, 77, 76, 39, 42, 22],
                    hidden: true,
                    label: 'D2',
                    fill: 1
                },  {
                    backgroundColor: ["rgba(255,168,0,0.5)"],
                    borderColor: ["#ffa800"],
                    pointBorderColor: ["#ffa800","#ffa800","#ffa800","#ffa800","#ffa800","#ffa800","#ffa800","#ffa800"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2, 
                    data: [50, 32, 61, 20, 68, 33, 29, 51],
                    label: 'D4',
                    fill: '-1'
                }, {
                    backgroundColor: ["rgba(0,128,255,0.5)"],
                    borderColor: ["#0080ff"],
                    pointBorderColor: ["#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,                                               
                    data: [78, 38, 60, 35, 66, 55, 45, 74],
                    label: 'D5',
                    fill: '+2'
                }, {
                    backgroundColor: ["rgba(212,216,222,0.5)"],
                    borderColor: ["#d4d8de"],
                    pointBorderColor: ["#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [56, 68, 21, 23, 64, 48, 36, 52],
                    label: 'D6',
                    fill: false
                }, {
                    backgroundColor: ["rgba(38,58,91,0.5)"],
                    borderColor: ["#263a5b"],
                    pointBorderColor: ["#263a5b","#263a5b","#263a5b","#263a5b","#263a5b","#263a5b","#263a5b","#263a5b"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [54, 55, 54, 60, 40, 28, 25, 72],
                    label: 'D7',
                    fill: 8
                }]
            },
            options: {
                title: {
                    text: 'fill: start',
                    display: false
                },
                maintainAspectRatio: true,
                spanGaps: true,
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                scales: {
                    xAxes: [{       
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0],
                            zeroLineColor: 'rgba(0,0,0,0.05)'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0],
                            zeroLineColor: 'rgba(0,0,0,0.05)'
                        }
                    }]
                },                
                plugins: {
                    filler: {
                        propagate: false
                    },
                    'samples-filler-analyser': {
                        target: 'chart-analyser'
                    }
                }
            }
        });
        /* -- Chartjs - Stacked Area Chart -- */
        var stackedAreaID = document.getElementById("chartjs-stacked-area-chart").getContext('2d');
        var stackedArea = new Chart(stackedAreaID, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Series A',
                    borderColor: ["#0080ff"],
                    backgroundColor: ["#0080ff"],
                    pointBorderColor: ["#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [-83, 45, 80, 91, 52, 84, 36],
                }, {
                    label: 'Series B',
                    borderColor: ["#18d26b"],
                    backgroundColor: ["#18d26b"],
                    pointBorderColor: ["#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [-9, -84, 37, -53, 59, -25, 3],
                }, {
                    label: 'Series C',
                    borderColor: ["#d4d8de"],
                    backgroundColor: ["#d4d8de"],
                    pointBorderColor: ["#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [-4, -64, 41, 10, 2, -55, -16],
                }, {
                    label: 'Series D',
                    borderColor: ["#ff3f3f"],
                    backgroundColor: ["#ff3f3f"],
                    pointBorderColor: ["#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [56, -1, 3, -18, 86, -51, 63],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Chart.js Line Chart - Stacked Area'
                },
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        },
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0]
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: 'rgba(0,0,0,0.05)',
                            lineWidth: 1,
                            borderDash: [0]
                        }
                    }]
                }
            }
        });
        /* -- Chartjs - Radar Area Chart -- */
        var radarAreaID = document.getElementById("chartjs-radar-area-chart").getContext('2d');
        var radarArea = new Chart(radarAreaID, {
            type: 'radar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
                datasets: [{
                    backgroundColor: ["rgba(255,63,63,0.5)"],
                    borderColor: ["#ff3f3f"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f","#ff3f3f"],
                    pointBorderWidth: 1,
                    data: [21.9, 21.67, 18.5, 18.77, 19.62, 19.68, 19.93, 21.95],
                    label: 'D0'
                }, {
                    backgroundColor: ["rgba(212,216,222,0.5)"],
                    borderColor: ["#d4d8de"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de","#d4d8de"],
                    pointBorderWidth: 1,
                    data: [36.32, 43.93, 32.54, 33.54, 42.82, 39.34, 35.84, 33.5],
                    hidden: true,
                    label: 'D1',
                    fill: '-1'
                }, {
                    backgroundColor: ["rgba(0,184,212,0.5)"],
                    borderColor: ["#00b8d4"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#00b8d4","#00b8d4","#00b8d4","#00b8d4","#00b8d4","#00b8d4","#00b8d4","#00b8d4"],
                    pointBorderWidth: 1,
                    data: [36.32, 43.93, 32.54, 33.54, 42.82, 39.34, 35.84, 33.5],
                    label: 'D2',
                    fill: 1
                }, {
                    backgroundColor: ["rgba(255,168,0,0.5)"],
                    borderColor: ["#ffa800"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#ffa800","#ffa800","#ffa800","#ffa800","#ffa800","#ffa800","#ffa800","#ffa800"],
                    pointBorderWidth: 1,
                    data: [47.7, 58.92, 44.45, 49.08, 53.39, 51.85, 48.4, 49.36],
                    label: 'D3',
                    fill: false
                }, {
                    backgroundColor: ["rgba(24,210,107,0.5)"],
                    borderColor: ["#18d26b"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b","#18d26b"],
                    pointBorderWidth: 1,
                    data: [60.73, 71.97, 53.96, 57.22, 65.09, 62.06, 56.90, 60.52],
                    label: 'D4',
                    fill: '-1'
                }, {
                    backgroundColor: ["rgba(0,128,255,0.5)"],
                    borderColor: ["#0080ff"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff","#0080ff"],
                    pointBorderWidth: 1,
                    data: [73.33, 80.78, 68.05, 68.59, 76.79, 77.24, 66.08, 72.37],
                    label: 'D5',
                    fill: '-1'
                }]
            },
            options: {
                maintainAspectRatio: true,
                spanGaps: false,
                scale: {
                    gridLines: {
                        color: "rgba(0,0,0,0.05)"
                    },
                    angleLines: {
                        color: "rgba(0,0,0,0.05)"
                    },
                    ticks: {
                        beginAtZero: true,
                        backdropColor: "transparent",
                    }
                },
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                plugins: {
                    filler: {
                        propagate: false
                    },
                    'samples-filler-analyser': {
                        target: 'chart-analyser'
                    }
                }
            }
        });
        /* -- Chartjs - Radar Chart -- */
        var radarChartID = document.getElementById("chartjs-radar-chart").getContext('2d');
        var radarChart = new Chart(radarChartID, {
            type: 'radar',
            data: {
                labels: [['Eating', 'Dinner'], ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'],
                datasets: [{
                    label: 'Series A',
                    backgroundColor: ["rgba(0,128,255,0.5)"],
                    borderColor: ["#0080ff"],
                    pointBorderColor: ["#ffffff"],
                    pointBackgroundColor: ["#0080ff"],
                    pointBorderWidth: 1,
                    data: [35,12,49,81,89,34,81]
                }, {
                    label: 'Series B',
                    backgroundColor: ["rgba(24,210,107,0.5)"],
                    borderColor: ["#18d26b"],
                    pointBorderColor: ["#ffffff"],
                    pointBackgroundColor: ["#18d26b"],
                    pointBorderWidth: 1,
                    data: [44,65,21,59,41,82,30]
                }]
            },
            options: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: false,
                    text: 'Chart.js Radar Chart'
                },
                scale: {
                    gridLines: {
                        color: "rgba(0,0,0,0.05)"
                    },
                    angleLines: {
                        color: "rgba(0,0,0,0.05)"
                    },
                    ticks: {
                        beginAtZero: true,
                        backdropColor: "transparent",
                        color: 'rgba(0,0,0,0.05)',
                    }
                },
            }
        });
        /* -- Chartjs - Doughnut Chart -- */
        var doughnutChartID = document.getElementById("chartjs-doughnut-chart").getContext('2d');
        var doughnutChart = new Chart(doughnutChartID, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [40,35,25],
                    borderColor: 'transparent',
                    backgroundColor: ["#0080ff","#18d26b","#d4d8de"],
                    label: 'Dataset 1'
                }],
                labels: ['Series A','Series B','Series C']
            },
            options: {
                responsive: true,  
                cutoutPercentage: 75,              
                legend: {
                    position: 'top'
                },
                title: {
                    display: false,
                    text: 'Chart.js Doughnut Chart'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
        /* -- Chartjs - Pie Chart -- */
        var pieChartID = document.getElementById("chartjs-pie-chart").getContext('2d');
        var pieChart = new Chart(pieChartID, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [40,35,25],
                    borderColor: 'transparent',
                    backgroundColor: ["#0080ff","#18d26b","#d4d8de"],
                    label: 'Dataset 1'
                }],
                labels: ['Instagram','Facebook','News Feed']
            },
            options: {
                responsive: true
            }
        });
        /* -- Chartjs - Polar Area Chart -- */
        var polarAreaChartID = document.getElementById("chartjs-polar-area-chart").getContext('2d');
        var polarAreaChart = new Chart(polarAreaChartID, {
            type: 'polarArea',
            data: {
                datasets: [{
                    data: [65,91,56,84,47],
                    borderColor: 'transparent',
                    backgroundColor: ["rgba(255,63,63,0.5)","rgba(0,128,255,0.5)","rgba(24,210,107,0.5)","rgba(255,168,0,0.5)","rgba(212,216,222,0.5)"],
                    label: 'Dataset 1'
                }],
                labels: ['Series A','Series B','Series C','Series D','Series E']
            },
            options: {
                responsive: true,                
                legend: {
                    position: 'right'
                },
                title: {
                    display: false,
                    text: 'Chart.js Polar Area Chart'
                },
                scale: {
                    gridLines: {
                        color: "rgba(0,0,0,0.05)"
                    },
                    angleLines: {
                        color: "rgba(0,0,0,0.05)"
                    },
                    ticks: {
                        beginAtZero: true,
                        backdropColor: "transparent",
                        color: 'rgba(0,0,0,0.05)',
                    },
                    reverse: false
                },
                animation: {
                    animateRotate: false,
                    animateScale: true
                }
            }
        });
        /* -- Chartjs - Bubble Chart -- */
        var bubbleChartID = document.getElementById("chartjs-bubble-chart").getContext('2d');
        var bubbleChart = new Chart(bubbleChartID, {
            type: 'bubble',
            data: {
                datasets: [{
                    label: ["First Dataset"],
                    data: [{
                        x: 28,
                        y: 22,
                        r: 4
                    }, {
                        x: 28,
                        y: 28,
                        r: 6
                    }, {
                        x: 28,
                        y: 32,
                        r: 8
                    }, {
                        x: 28,
                        y: 38,
                        r: 10
                    }, {
                        x: 28,
                        y: 42,
                        r: 12
                    }, {
                        x: 28,
                        y: 48,
                        r: 14
                    }, {
                        x: 28,
                        y: 52,
                        r: 16
                    }, {
                        x: 28,
                        y: 58,
                        r: 18
                    }, {
                        x: 32,
                        y: 22,
                        r: 20
                    }, {
                        x: 32,
                        y: 28,
                        r: 2
                    }, {
                        x: 32,
                        y: 32,
                        r: 4
                    }, {
                        x: 32,
                        y: 38,
                        r: 6
                    }, {
                        x: 32,
                        y: 42,
                        r: 8
                    }, {
                        x: 32,
                        y: 48,
                        r: 10
                    }, {
                        x: 32,
                        y: 52,
                        r: 12
                    }, {
                        x: 32,
                        y: 58,
                        r: 14
                    }, {
                        x: 38,
                        y: 22,
                        r: 16
                    }, {
                        x: 38,
                        y: 28,
                        r: 18
                    }, {
                        x: 38,
                        y: 32,
                        r: 20
                    }, {
                        x: 38,
                        y: 38,
                        r: 2
                    }, {
                        x: 38,
                        y: 42,
                        r: 4
                    }, {
                        x: 38,
                        y: 48,
                        r: 6
                    }, {
                        x: 38,
                        y: 52,
                        r: 8
                    }, {
                        x: 38,
                        y: 58,
                        r: 10
                    }, {
                        x: 42,
                        y: 22,
                        r: 12
                    }, {
                        x: 42,
                        y: 28,
                        r: 14
                    }, {
                        x: 42,
                        y: 32,
                        r: 16
                    }, {
                        x: 42,
                        y: 38,
                        r: 18
                    }, {
                        x: 42,
                        y: 42,
                        r: 20
                    }, {
                        x: 42,
                        y: 48,
                        r: 2
                    }, {
                        x: 42,
                        y: 52,
                        r: 4
                    }, {
                        x: 42,
                        y: 58,
                        r: 6
                    }, {
                        x: 48,
                        y: 22,
                        r: 8
                    }, {
                        x: 48,
                        y: 28,
                        r: 10
                    }, {
                        x: 48,
                        y: 32,
                        r: 12
                    }, {
                        x: 48,
                        y: 38,
                        r: 14
                    }, {
                        x: 48,
                        y: 42,
                        r: 16
                    }, {
                        x: 48,
                        y: 48,
                        r: 18
                    }, {
                        x: 48,
                        y: 52,
                        r: 20
                    }, {
                        x: 48,
                        y: 58,
                        r: 2
                    }, {
                        x: 52,
                        y: 22,
                        r: 4
                    }, {
                        x: 52,
                        y: 28,
                        r: 6
                    }, {
                        x: 52,
                        y: 32,
                        r: 8
                    }, {
                        x: 52,
                        y: 38,
                        r: 10
                    }, {
                        x: 52,
                        y: 42,
                        r: 12
                    }, {
                        x: 52,
                        y: 48,
                        r: 14
                    }, {
                        x: 52,
                        y: 52,
                        r: 16
                    }, {
                        x: 52,
                        y: 58,
                        r: 18
                    }],
                    backgroundColor: ["rgba(0,128,255,0.8)"],
                }]
            },  
            options: {
                aspectRatio: 2,
                legend: false,
                tooltips: false,
                elements: {
                    point: {
                        backgroundColor: [
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",                            
                        ],
                        borderColor: [
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",
                            "rgba(0,128,255,0.8)",
                            "rgba(188,196,220,0.8)",
                            "rgba(8,210,111,0.8)",
                            "rgba(252,79,104,0.8)",
                            "rgba(24,210,107,0.8)",
                            "rgba(129,206,246,0.8)",
                            "rgba(212,216,222,0.8)",
                            "rgba(46,46,46,0.8)",
                        ],
                        borderWidth: 1,
                        hoverBackgroundColor: [                            
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",                       
                        ],
                        hoverBorderColor: [
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",
                            "rgba(0,128,255,1)",
                            "rgba(188,196,220,1)",
                            "rgba(8,210,111,1)",
                            "rgba(252,79,104,1)",
                            "rgba(24,210,107,1)",
                            "rgba(129,206,246,1)",
                            "rgba(212,216,222,1)",
                            "rgba(46,46,46,1)",
                        ],
                        hoverBorderWidth: 1,
                        radius: '50px'
                    }
                },
                scales: {
                    xAxes: [{       
                        gridLines: {
                            color: 'rgba(255,255,255,0.02)',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgba(255,255,255,0.02)',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }]
                }
            }
        });
});