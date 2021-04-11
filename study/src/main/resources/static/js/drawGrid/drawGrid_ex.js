/**
 * drawGrid에서 사용한 jquery 정리
 */

// Math.max.apply(null, 배열)
// 배열에서 최대값을 구하기 위해 사용
// Math 객체에는 가장 큰 숫자를 구하는 max 메서드와 가장 작은 숫자를 구하는 min 메서드가 존재
// Math.max에 apply 메서드를 사용하면 숫자로 이루어진 배열을 파라미터로 전달할 수 있음.
// 단, 비교 불가능한 값이 있으면 결과는 NaN으로 출력한다.

// ex)
var id = Math.max.apply(null, list);

// .splice(n, m)
// n번째부터 m개를 삭제한다.
// 원본배열 자체를 수정한다.
// ex) list = [0, 1, 2, 3, 4]
list.splice(0, 1);
// => list = [1, 2, 3, 4]

// .slice(n, m)
// n번째부터 m번째까지 추출
// 원본배열 자체는 수정되지 않는다.
// ex) list = [0, 1, 2, 3, 4]
var arr = list.slice(0, 1);
// => list = [0, 1, 2, 3, 4]
// 	  arr = [0, 1]