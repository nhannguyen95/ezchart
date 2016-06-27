package com.beaute.ezchart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.beaute.ezchart.model.User;
import com.beaute.ezchart.service.ChartServiceInterface;
import com.beaute.ezchart.service.UserServiceInterface;

@Controller
public class EzChartController {
	
	@Autowired
	private UserServiceInterface userService;
	@Autowired
	private ChartServiceInterface chartService;
	
	@RequestMapping(value = {"/home", "/"})
	public String goToHome() {
		System.out.println("hihi");
		return "home";
	}
	
	@RequestMapping(value = "/aboutus", method = RequestMethod.GET)
	public String goToAboutUs(Model model) {
		return "aboutus";
	}
	
}

