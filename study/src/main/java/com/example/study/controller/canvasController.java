package com.example.study.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class canvasController {
	@GetMapping("/canvas")
	public String canvas() {
		return "canvas";
	}
}
