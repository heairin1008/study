package com.example.study.java;

public class Java07_4 {
	// public static void sum(int a, int b) {
    //     System.out.println(a + b);
    // }

    // public static void avg(int a, int b) {
    //     System.out.println((a * b) / 2);
    // }

    public static void main(String[] args) {
    	// 기초(
    	//비교연산자(관계연산자)
    	// 두 개의 항을 비교하여 참이면 true / 거짓이면 false를 반환
    	// ==, !=, <, >, <=, >=, .equals

    	/*
    	 * ex. String a = "Hello";
    	       String b = new String("Hello");
    	       System.out.println(a == b);
    	       System.out.println(a.equals(b));
    	       
    	       result : false true

    	       == 는 두 개의 데이터 타입을 비교한다.(a는 문자열, b는 객체이기 때문에 false 반환)
    	       .equals는 서로 다른 객체들 간의 값을 비교한다.(a와 b의 값 둘 다 Hello이기 때문에 true 반환)
    	       * StringUtils.equals()
    	 * 
    	 */

    	//형변환
    	// 자동 형 변환이 일어나는 순서
    	// byte -> short / char -> int -> long -> float -> double
    	// byte타입이 short / char 타입이 될 수 있지만, short / char 타입이 byte 타입이 될 수 없다.
    	// 자동 형 변환이 일어나지 않는 경우는 명시적 형 변환을 통해 형 변환을 한다.
    	// ex. int b = (int)100.0F;

    	//반복문 제어
    	// break
    	// 반복문 진행 중 특정 조건일 때 break문을 실행시킬 경우 반복문이 즉시 종료된다. 
    	for (int j=0; j < 10; j++){
    	    if(j == 5)
    	        break;
    	    System.out.println("5보다 작은 숫자");
    	}

    	// continue
    	// 반복문 진행 중 특정 조건일 때 continue문을 실행시킬 경우 이후 로직을 실행하지 않고 다시 반복문을 실행한다.
    	for (int j=0; j < 10; j++) {
    	    if (j==5)
    	        continue;
    	    System.out.println("현재 : " + j);
    	}
   // ------------------------------------------------------------------------------ // 	
    	
        int i = 10;
        int j = 20;

        // sum(i, j);
        // avg(i, j);

        int left = 30;
        int right = 40;

        // sum(left, right);
        // avg(left, right);

        // 현재 변수 선언, 함수 호출 부분이 반복됨.

        Calc c1 = new Calc();
        c1.setParam(i, j);
        c1.sum();
        c1.avg();

        Calc c2 = new Calc();
        c2.setParam(left, right);
        c2.sum();
        c2.avg();

    }
}

// 반복되는 부분을 따로 class로 생성
class Calc {
    int a, b;

    public void setParam(int a, int b) {
        this.a = a;
        this.b = b;
    }

    public void sum() {
        System.out.println(this.a + this.b);
    }

    public void avg() {
        System.out.println((this.a * this.b) / 2);
    }
}

//Calc c1 = new Calc();
// new 연산자를 이용해서 만든 인스턴스를 변수 c1에 저장
// 변수에 저장한 이유는 변수를 통해 인스턴스를 제어하기 위함.
// Calc 타입의 변수를 만듦 => 사용자 정의 데이터 타입을 만듦 과 같은 뜻
// 객체를 만들어서 사용하는 이유 : 재활용성을 높이기 위해

// this.a = a;
// this는 클래스를 통해서 만들어진 인스턴스 자신을 가리킴
// this.a는 40행에 선언해놓은 변수에 값을 설정, 메서드 외부에 선언해놓은 변수는 인스턴스 내의 모든 메서드에 접근 가능

// Calc c1 = new Calc();
// Calc c2 = new Calc();
// 같은 클래스라도 다른 인스턴스를 생성할 경우 서로 다른 동작이 가능함.
