#include <stdio.h>
#include <string.h> // ���߿� �Է��� �����Դϴ�.

int main(void)
{
	char str[80];

	printf("������ ���Ե� ���ڿ� �Է� : ");
	fgets(str, sizeof(str), stdin);								// ���ڿ� �Է�
	str[strlen(str) - 1] = '\0';								// ���߿� �Է��� �����Դϴ�.
	printf("�Էµ� ���ڿ��� %s�Դϴ�.\n", str);					// ���ڿ� ���

	return 0;
}