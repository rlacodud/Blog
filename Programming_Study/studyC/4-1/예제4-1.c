#include <stdio.h>

int main(void)
{
	int a, b;
	int sum, sub, mul, inv;

	a = 10;					// ���Կ���(=)
	b = 20;					// ���Կ���(=)
	sum = a + b;			// ���ϱ� ����(+) �� ���Կ���(=)
	sub = a - b;			// ���� ����(-) �� ���Կ���(=)
	mul = a * b;			// ���ϱ� ����(*) �� ���Կ���(=)
	inv = -a;				// ���� ����(-) �� ���Կ���(=)

	printf("a�� �� : %d, b�� �� : %d\n", a, b);
	printf("���� : %d\n", sum);
	printf("���� : %d\n", sub);
	printf("���� : %d\n", mul);
	printf("a�� ���� ���� : %d\n", inv);

	return 0;
}