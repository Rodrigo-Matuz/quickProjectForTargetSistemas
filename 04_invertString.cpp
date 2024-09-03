#include <iostream>

using namespace std;

void inverterString(char *str, int inicio, int fim) {
    if (inicio >= fim)
        return;

    char temp = str[inicio];
    str[inicio] = str[fim];
    str[fim] = temp;

    inverterString(str, inicio + 1, fim - 1);
}

int main() {
    cout << "Escreva a string a ser invertida (limite de 1000 caracteres): ";

    char str[1000];
    cin.getline(str, 1000);

    int comprimento = 0;
    while (str[comprimento] != '\0') {
        comprimento++;
    }

    inverterString(str, 0, comprimento - 1);

    cout << "String invertida: " << str << "\n";

    return 0;
}
