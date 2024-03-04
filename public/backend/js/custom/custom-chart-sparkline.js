/*
----------------------------------------
    : Custom - Sparkline Charts js :
----------------------------------------
*/
"use strict";
$(document).ready(function() {
	/* -- Sparkline - Line -- */
	var sparklineLineData = [0, 45, 22, 37, 30, 54, 48, 23, 50, 15];
	$('#sparkline-line').sparkline(sparklineLineData, {
	    type: 'line',
        width: "150",
        height: '150',
        chartRangeMax: 50,
        lineColor: '#0080ff',
        fillColor: 'transparent',
        highlightLineColor: '#d4d8de',
        highlightSpotColor: 'rgba(0,128,255,0.5)'
	});
	/* -- Sparkline - Area Line -- */
	var sparklineAreaLineData = [0, 45, 22, 37, 30, 54, 48, 23, 50, 15];
	$('#sparkline-area-line').sparkline(sparklineAreaLineData, {
        type: 'line',
        width: "150",
        height: '150',
        chartRangeMax: 50,
        lineColor: '#0080ff',
        fillColor: 'rgba(0,128,255,0.5)',
        highlightLineColor: '#d4d8de',
        highlightSpotColor: 'rgba(0,128,255,0.5)'
	});
	/* -----  Sparkline - Pie Chart  ----- */
	var sparklinePieData = [30, 30, 30];
    $('#sparkline-pie').sparkline(sparklinePieData, {
        type: 'pie',
        width: '150',
        height: '150',
        sliceColors: ['#18d26b', '#d4d8de', '#0080ff']
    });
	/* -----  Sparkline - Bar  ----- */
	var sparklineBarData = [30, 40, 60, 80, 30, 20, 40, 50, 70, 90];
	$('#sparkline-bar').sparkline(sparklineBarData, {
        type: 'bar',
        width: "150",
        height: '150',
        barColor: '#0080ff',
        barWidth: '12',
        barSpacing: '5'      
	});
	/* -----  Sparkline - Composite Chart  ----- */
	var sparklineCompositeBarData = [30, 40, 60, 80, 30, 20, 40, 50, 70, 90];
	var sparklineCompositeLineData = [30, 40, 60, 80, 30, 20, 40, 50, 70, 90];
	$('#sparkline-composite-bar').sparkline(sparklineCompositeBarData, {
        type: 'bar',
        width: "150",
        height: '150',
        barColor: '#0080ff',
        barWidth: '12',
        barSpacing: '5'
    });    
    $('#sparkline-composite-bar').sparkline(sparklineCompositeLineData, {
        type: 'line',
        width: "100%",
        height: '150',
        lineColor: '#ff3f3f',
        fillColor: 'transparent',
        composite: true,
        highlightLineColor: '#d4d8de',
        highlightSpotColor: 'rgba(0,128,255,0.5)'
    });
     /* -----  Sparkline - Tristate Chart  ----- */
    var sparklineTristateData = [1,0,1,-1,-1,1,-1,0,0,1];
	$("#sparkline-tristate").sparkline(sparklineTristateData, {
	    type: 'tristate',
	    width: '150',
	    height: '150',
	    posBarColor: '#0080ff',
	    negBarColor: '#18d26b',
	    zeroBarColor: '#d4d8de',
	    barWidth: 12,
	    barSpacing: 5
	});
    /* -----  Sparkline - Discrete Chart  ----- */
    var sparklineDiscreteData = [4,6,7,7,4,3,2,1,4,4];
    $("#sparkline-discrete").sparkline(sparklineDiscreteData, {
    	type: 'discrete',
	    width: '150',
	    height: '50',
	    lineColor: '#0080ff',
	    thresholdColor: '#0080ff',
	    thresholdWidth: '12',
	});
    /* -----  Sparkline - Bullet Chart  ----- */
    var sparklineBulletData = [10,12,12,9,7];
    $("#sparkline-bullet").sparkline(sparklineBulletData, {
	    type: 'bullet',
	    width: '150',
	    height: '50',
	    targetColor: '#ff3f3f',
	    performanceColor: '#0080ff',
    	rangeColors: ['rgba(0,128,255,0.2)','rgba(0,128,255,0.4)','rgba(0,128,255,0.6)']
	});
    /* -----  Sparkline - Box Plot Chart  ----- */
    var sparklineBoxPlotData = [4,27,34,52,54,59,61,68,78,82,85,87,91,93,100];
    $("#sparkline-box-plot").sparkline(sparklineBoxPlotData, {
	    type: 'box',
	    width: '150',
	    height: '50',
	    raw: false,
	    boxLineColor: '#0080ff',
	    boxFillColor: 'rgba(0,128,255,0.5)',
	    whiskerColor: '#0080ff',
	    outlierLineColor: '#0080ff',
	    outlierFillColor: '#d4d8de',
	    medianColor: '#ff3f3f',
	    targetColor: '#2bcd72'
	});
});