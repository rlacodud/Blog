#include <stdio.h>

int main(void)
{
	int age;									// ���̸� ������ ����
	char name[20];								// �̸��� ������ ����

	printf("���� �Է� : ");						
	scanf("%d", &age);							// scanf �Լ��� ���� �Է�
	fgetc(stdin);
	printf("�̸� �Է� : ");			
	gets(name);									// gets �Լ��� �̸� �Է�
	printf("���� : %d, �̸� : %s\n", age, name);

	return 0;
}