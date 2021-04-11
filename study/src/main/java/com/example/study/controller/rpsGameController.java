package com.example.study.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class rpsGameController {
	@GetMapping("/rpsGame")
	public String rpsGame() {
		return "rpsGame";
	}
}
