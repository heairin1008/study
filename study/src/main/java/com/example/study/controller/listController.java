package com.example.study.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class listController {
	@GetMapping("/list")
	public String list() {
		return "list";
	}
}
