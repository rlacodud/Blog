#include <stdio.h>
#include <string.h>								// strcpy �Լ� ����� ���� ��� ���� ����

int main(void)
{
	char str[20] = "mango tree";				// �迭 �ʱ�ȭ

	strncpy(str, "apple=pie", 5);				// apple-pie ���� �ټ�  ���ڸ� ����

	printf("%s\n", str);						// ������� ���ڿ� ���

	return 0;
}