package com.beaute.ezchart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.beaute.ezchart.model.Chart;
import com.beaute.ezchart.service.ChartServiceInterface;
import com.beaute.ezchart.service.UserServiceInterface;


@Controller
public class EzChartController {
	
	@Autowired
	private UserServiceInterface userService;
	@Autowired
	private ChartServiceInterface chartService;

	@RequestMapping(value = {"/home", "/"})
	public String goToHome(Model model) {
		
		return "home";
	}
	
	@RequestMapping(value = "/aboutus", method = RequestMethod.GET)
	public String goToAboutUs(Model model) {
		return "aboutus";
	}
	
	@RequestMapping(value = "/chart", method = RequestMethod.GET)
	public String goToChart(Model model) {
		return "chart";
	}
	@RequestMapping(value = "/table", method = RequestMethod.GET)
	public String goToTable(Model model) {
		model.addAttribute("chart", new Chart() );
		return "table";
	}
	
	@RequestMapping(value = {"/chart/save"}, method = RequestMethod.POST)
	public String saveImgData(@ModelAttribute("chart") Chart chart, final RedirectAttributes redirectAttributes){
		
		if ( chartService.insertChart(chart) != null){
			redirectAttributes.addFlashAttribute("chartData", chart.getChartData());
			
			return("redirect:/chart");
		}
		return "table";
	}
	
	@RequestMapping(value = {"/chart"})
	public String chartPage(@ModelAttribute("chartData") String chartData){
		
		return "";
	}
	
}

