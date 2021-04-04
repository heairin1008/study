package com.example.study.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class gridController {
	@GetMapping("/drawGrid")
	public String drawGrid() {
		return "drawGrid";	// 실제로 포워딩 되는 것은 prefix에서 지정한 /WEB-INF/view/index.jsp으로 반환됨
	}
}
