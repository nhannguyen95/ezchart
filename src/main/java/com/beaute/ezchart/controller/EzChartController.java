package com.beaute.ezchart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class EzChartController {
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String goToHome(Model model)
	{
		return "home";
	}
	
	@RequestMapping(value = "/aboutus", method = RequestMethod.GET)
	public String goToAboutUs(Model model)
	{
		return "aboutus";
	}
}
