package com.example.study.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class mainController {
	
	@GetMapping("/main_list")
	public String main_list() {
		return "main_list";
	}
	
	@GetMapping("/main_insert")
	public String main_insert() {
		return "main_insert";
	}
	
	@GetMapping("/main_one")
	public String main_one() {
		return  "main_one";
	}
}
