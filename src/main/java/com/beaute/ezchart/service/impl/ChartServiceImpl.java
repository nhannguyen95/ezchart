package com.beaute.ezchart.service.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beaute.ezchart.databaseDAO.ChartRepository;
import com.beaute.ezchart.model.Chart;
import com.beaute.ezchart.service.ChartServiceInterface;

@Service
public class ChartServiceImpl implements ChartServiceInterface{
	@Autowired
	private ChartRepository chartRepo;

	@Override
	public Chart insertChart(Chart chart) {
		// TODO Auto-generated method stub
		chartRepo.save(chart);
		return chart;
	}

	@Override
	public Chart deleteChart(Chart chart) {
		// TODO Auto-generated method stub
		chartRepo.delete(chart);
		return chart;
	}

	@Override
	public Chart updateChart(Chart chart) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Chart selectChartByChartID(long ChartID) {
		// TODO Auto-generated method stub
		chartRepo.findOne(ChartID);
		return null;
	}

	@Override
	public Collection<Chart> selectAllChart() {
		// TODO Auto-generated method stub
		Iterable<Chart> chartItr = chartRepo.findAll();
		return (Collection<Chart>) chartItr;
	}

	
	
	
}
