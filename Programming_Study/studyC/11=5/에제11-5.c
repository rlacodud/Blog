#include <stdio.h>

int main(void)
{
	int res;					// scanf �Լ��� ��ȯ���� ������ ����
	char ch;					// ���ڸ� �Է��� ����

	while (1)
	{
		res = scanf("%c", &ch);		// ���� �Է�, ctrl + z�� ������ -1 ��ȯ
		if (res == -1) break;		// ��ȯ���� -1�̸� �ݺ� ����
		printf("%d", ch);			// �Էµ� ���ڿ� �ƽ�Ű �ڵ� �� ���
	}

	return 0;
}