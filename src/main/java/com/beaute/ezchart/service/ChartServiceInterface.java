package com.beaute.ezchart.service;

import java.util.Collection;

import com.beaute.ezchart.model.Chart;

public interface ChartServiceInterface {
	Chart insertChart(Chart chart);
	
	Chart deleteChart(Chart chart );
	
	Chart updateChart(Chart chart);
	
	Chart selectChartByChartID(long ChartID);
	
	Collection<Chart>  selectAllChart();
}
