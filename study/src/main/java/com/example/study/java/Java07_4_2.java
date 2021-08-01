package com.example.study.java;

public class Java07_4_2 {
	public static void main(String[] args){
	     Test t = new Test();
	
	     t.static_static(); // 인스턴스 메서드가 클래스 변수 접근
	     t.static_instance(); // 인스턴스 메서드가 클래스 변수 접근
	     t.instance_static(); // 인스턴스 메서드가 클래스 변수 접근
	     t.instance_instance(); // 인스턴스 메서드가 인스턴스 변수 접근
	
	     Test.static_static(); // 클래스 메서드가 클래스 변수 접근
	     Test.static_instance(); // 클래스로 클래스 메서드 접근 / 클래스 메서드가 인스턴스 변수 접근(실패)
	     // Test.instance_static(); // 클래스로 인스턴스 메서드 접근
	     // Test.instance_instance(); // 클래스로 인스턴스 메서드 접근
	 }
}

//클래스 멤버, 인스턴스 멤버
//인스턴스 메서드는 클래스 멤버에 접근 가능하다.
//클래스 메서드는 인스턴스 멤버에 접근이 불가능하다.

//인스턴스 변수 : 인스턴스가 만들어지면서 생성
//클래스 메서드 : 인스턴스가 생성되기 전에 만들어짐
//=> 클래스 메서드가 인스턴스 멤버에 접근하는 것은 존재하지 않는 인스턴스 변수에 접근하는 것과 같음

class Test{
 static int static_val = 1;
 int instance_val = 2;

 static void static_static(){
     System.out.println(static_val); // 클래스 메서드, 정적 변수
 }

 static void static_instance(){ // 클래스 메서드, 인스턴스 변수
     // System.out.println(instance); // 클래스 메서드에서 인스턴스 변수 접근 불가능
 }

 void instance_static(){ // 인스턴스 메서드, 정적 변수
     System.out.println(static_val); // 인스턴스 메서드에서 클래스 변수 접근 가능
 }

 void instance_instance(){ // 인스턴스 메서드, 인스턴스 변수
     System.out.println(instance_val);
 }
}
