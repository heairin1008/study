package com.example.study.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.study.mapper.MainMapper;
import com.example.study.vo.Main;

@Service
public class MainService {
	@Autowired
	MainMapper mainMapper;
	
	public int insertMain(Main main) {
		return mainMapper.insertMain(main);	
	}
	
	public List<Main> selectMainList(){
		return mainMapper.selectMainList();
	}
	
	public Main selectMainOne(int id) {
		return mainMapper.selectMainOne(id);
	}
}
