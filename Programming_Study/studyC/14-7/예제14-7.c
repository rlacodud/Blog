#include <stdio.h>

int main(void)
{
	int ary1[4] = { 1, 2, 3, 4 };			// 1���� �迭 ����� �ʱ�ȭ
	int ary2[5] = { 11, 22, 33, 44 };		
	int ary3[6] = { 21, 22, 23, 24 };
	int* pary[3] = { ary1, ary2, ary3 };	// ������ �迭�� �� �迭�� �ʱ�ȭ
	int i, j;								// �ݺ� ���� ����

	for (i = 0; i < 3; i++)					// 3�� �ݺ�
	{
		for (j = 0; j < 4; j++)				// 4�� �ݺ�
		{
			printf("%5d", pary[i][j]);		// 2���� �迭ó�� ���
		}
		printf("\n");						// �� ���� ����� �Ŀ� �� �ٲ�
	}

	return 0;
}