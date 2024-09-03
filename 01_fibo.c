#include <stdio.h>

int fibo(int numA, int numB);
int verificaFibonacci(int valorUsuario);

int main() {
    int valorUsuario;
    printf("Número a ser verificado na sequência: ");
    scanf("%d", &valorUsuario);

    printf("Número escolhido: %i \n", valorUsuario);

    int posicao = verificaFibonacci(valorUsuario);

    if (posicao != -1) {
        printf("Número está na sequência, posição: %i \n", posicao);
    } else {
        printf("Número não está na sequência.\n");
    }

    return 0;
}

int fibo(int numA, int numB) { 
    return numA + numB; 
}

int verificaFibonacci(int valorUsuario) {
    int numA = 0, numB = 1, numC = 0;
    int posicao = 1;

    if (valorUsuario == 0) {
        return 0;
    } else if (valorUsuario == 1) {
        return 1;
    }

    while (numC < valorUsuario) {
        numC = fibo(numA, numB);
        posicao++;
        numA = numB;
        numB = numC;
    }

    if (numC == valorUsuario) {
        return posicao;
    } else {
        return -1;
    }
}
