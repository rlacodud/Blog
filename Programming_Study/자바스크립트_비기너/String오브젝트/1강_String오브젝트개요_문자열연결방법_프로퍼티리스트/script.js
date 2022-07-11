var concat = 123 + 'abc' +
'가나다라';
log(concat);
// 123abc가나다라

var concat = 'abc \
가나다라';
log(concat);
// abc가나다라

// new String() = 인스턴스 생성
// String() = 문자열로 변환하여 반환
// fromCharCode() = 유니코드를 문자열로 변환하여 반환
// length = 문자열의 문자수 반환
// constructor = 생성자
// valueOf() = 프리미티브값 반환
// toString() = 문자열로 변환
// charAt() = 인덱스번째 문자 반환
// indexOf() = 일치하는 문자열 중에서 가장 작은 인덱스 반환
// lastIndexOf() = 일치하는 문자열 중에서 가장 큰 인덱스 반환
// concat() = 문자열 연결
// toLowerCase() = 영문 소문자로 변환
// toUpperCase() = 영문 대문자로 변환
// trim() = 문자열 앞뒤의 화이트 스페이스 삭제
// substring() = 시작에서 끝 직전까지 값 반환
// substr() = 시작 위치부터 지정한 문자수 반환
// slice() = 시작에서 끝 직전까지 값 반환/substring()와 차이 있음
// match() = 매치 결과 반환
// replace() = 매치 결과를 지정한 값으로 대체
// search() = 검색된 첫번째 인덱스 반환
// split() = 구분자로 분리하여 반환
// charCodeAt() = 인덱스번째 문자를 유니코드로 반환
// localeCompare() = 값의 위치를 1, 0, -1로 반환