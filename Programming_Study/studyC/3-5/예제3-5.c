#include <stdio.h>

int main(void)
{
	float ft = 1.2345678901234567890;			// 유효 숫자가 많은 값으로 초기화
	double db = 1.2345678901234567890;

	printf("float형 변수의 값 : %.20f\n", ft);	// 소수점 이하 20자리까지 출력
	printf("double형 변수의 값 : %.20lf\n", db);

	return 0;
}