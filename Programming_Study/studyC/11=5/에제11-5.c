#include <stdio.h>

int main(void)
{
	int res;					// scanf 함수와 반환값을 저장할 변수
	char ch;					// 문자를 입력할 변수

	while (1)
	{
		res = scanf("%c", &ch);		// 문자 입력, ctrl + z를 누르면 -1 반환
		if (res == -1) break;		// 반환값아 -1이면 반복 종료
		printf("%d", ch);			// 입력된 문자와 아스키 코드 값 출력
	}

	return 0;
}