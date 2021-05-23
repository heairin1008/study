package com.example.study.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.study.service.MainService;
import com.example.study.vo.Main;

@RestController
public class MainRestController {
	@Autowired
	MainService mainService;
	
	@GetMapping("/getMainList")
	public List<Main> getMainList(){
		List<Main> list = mainService.selectMainList();
		
		return list;
	}
	
	@PostMapping("/insertMain")
	public void insertMain(Main main) {
		mainService.insertMain(main);
	}
	
	@GetMapping("/getMainOne")
	public Main getMainOne(@RequestParam(value="id") int id) {
		Main one = mainService.selectMainOne(id);
		
		return one;
	}

}
