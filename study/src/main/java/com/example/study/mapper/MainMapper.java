package com.example.study.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.study.vo.Main;

@Mapper
public interface MainMapper {
	public int insertMain(Main main);
	public List<Main> selectMainList();
	public Main selectMainOne(int id);
}
