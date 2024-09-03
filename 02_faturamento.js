import mockData from "./mockFaturamento.json";

function calcularFaturamento(mes) {
	const mesFormatado = mes.toString().padStart(2, "0");

	const dados = mockData[`${mesFormatado}`];

	if (!dados || dados.length === 0) {
		console.error("Dados não encontrados para o mês fornecido.");
		return;
	}

	let maiorValor = Number.NEGATIVE_INFINITY;
	let menorValor = Number.POSITIVE_INFINITY;
	let somaValores = 0;
	let diasComFaturamento = 0;

	for (const valor of dados) {
		if (valor !== null) {
			if (valor > maiorValor) {
				maiorValor = valor;
			}
			if (valor < menorValor) {
				menorValor = valor;
			}
			somaValores += valor;
			diasComFaturamento++;
		}
	}

	if (diasComFaturamento === 0) {
		console.error("Nenhum valor numérico válido encontrado.");
		return;
	}

	const mediaMensal = somaValores / diasComFaturamento;

	let diasAcimaDaMedia = 0;
	for (const valor of dados) {
		if (valor !== null && valor > mediaMensal) {
			diasAcimaDaMedia++;
		}
	}

	console.log(`Maior valor do mês ${mesFormatado}: R$ ${maiorValor},00`);
	console.log(`Menor valor do mês ${mesFormatado}: R$ ${menorValor},00`);
	console.log(
		`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`,
	);
}

function main() {
	const entradaUsuario = prompt("Qual o mês a ser pesquisado (1-12):");
	const mes = Number.parseInt(entradaUsuario, 10);

	if (Number.isNaN(mes) || mes < 1 || mes > 12) {
		console.error(`Entrada não é válida: ${entradaUsuario}`);
		return;
	}

	calcularFaturamento(mes);
}

main();
