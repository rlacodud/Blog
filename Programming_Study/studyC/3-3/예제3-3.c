#include <stdio.h>

int main(void)
{
	short sh = 32767;							// short���� �ִ� �ʱ�ȭ
	int in = 2147483647;						// int���� �ִ� �ʱ�ȭ
	long ln = 2147483647;						// long���� �ִ� �ʱ�ȭ
	long long lln = 12345123451234512345;		// ���� ū �� �ʱ�ȭ

	printf("short�� ���� ��� : %d\n", sh);
	printf("int�� ���� ��� : %d\n", in);
	printf("long�� ���� ��� : %ld\n", ln);
	printf("lonng long�� ���� ��� : %lld\n", lln);	// long long���� lld�� ���
	printf("long long���� ũ�� : %d����Ʈ\n", sizeof(long long));

	return 0;
}