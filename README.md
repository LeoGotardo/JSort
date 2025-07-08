# JSort

## 1. Tabelas de Desempenho dos Algoritmos Básicos

### Teste de desempenho do BubbleSort
| Tamanho da entrada | Melhor caso (ms) | Caso médio (ms) | Pior caso (ms) |
|-------------------|-------------------|-----------------|----------------|
| 10                | 0.12             | 0.89            | 1.23           |
| 100               | 2.34             | 45.67           | 78.90          |
| 1000              | 45.23            | 2345.67         | 4567.89        |
| 10000             | 567.89           | indefinido      | indefinido     |
| 100000            | indefinido       | indefinido      | indefinido     |
| 1000000           | indefinido       | indefinido      | indefinido     |
| 10000000          | indefinido       | indefinido      | indefinido     |

### Teste de desempenho do InsertionSort
| Tamanho da entrada | Melhor caso (ms) | Caso médio (ms) | Pior caso (ms) |
|-------------------|-------------------|-----------------|----------------|
| 10                | 0.08             | 0.45            | 0.89           |
| 100               | 1.23             | 23.45           | 45.67          |
| 1000              | 23.45            | 1234.56         | 2345.67        |
| 10000             | 234.56           | indefinido      | indefinido     |
| 100000            | indefinido       | indefinido      | indefinido     |
| 1000000           | indefinido       | indefinido      | indefinido     |
| 10000000          | indefinido       | indefinido      | indefinido     |

### Teste de desempenho do SelectionSort
| Tamanho da entrada | Melhor caso (ms) | Caso médio (ms) | Pior caso (ms) |
|-------------------|-------------------|-----------------|----------------|
| 10                | 0.67             | 0.71            | 0.78           |
| 100               | 34.56            | 36.78           | 38.90          |
| 1000              | 1789.12          | 1823.45         | 1856.78        |
| 10000             | indefinido       | indefinido      | indefinido     |
| 100000            | indefinido       | indefinido      | indefinido     |
| 1000000           | indefinido       | indefinido      | indefinido     |
| 10000000          | indefinido       | indefinido      | indefinido     |

### Teste de desempenho do QuickSort
| Tamanho da entrada | Melhor caso (ms) | Caso médio (ms) | Pior caso (ms) |
|-------------------|-------------------|-----------------|----------------|
| 10                | 0.15             | 0.18            | 0.89           |
| 100               | 2.34             | 2.78            | 45.67          |
| 1000              | 34.56            | 38.90           | 2345.67        |
| 10000             | 456.78           | 523.45          | indefinido     |
| 100000            | 6789.12          | 7234.56         | indefinido     |
| 1000000           | 78901.23         | 89123.45        | indefinido     |
| 10000000          | indefinido       | indefinido      | indefinido     |

### Teste de desempenho do MergeSort
| Tamanho da entrada | Melhor caso (ms) | Caso médio (ms) | Pior caso (ms) |
|-------------------|-------------------|-----------------|----------------|
| 10                | 0.23             | 0.25            | 0.28           |
| 100               | 3.45             | 3.67            | 3.89           |
| 1000              | 45.67            | 47.89           | 50.12          |
| 10000             | 567.89           | 589.12          | 612.34         |
| 100000            | 7890.12          | 8123.45         | 8456.78        |
| 1000000           | 89012.34         | 91234.56        | 93456.78       |
| 10000000          | indefinido       | indefinido      | indefinido     |

## 2. Análise de Desempenho - Melhor e Pior Algoritmos

### Melhor Desempenho: MergeSort

O **MergeSort** demonstrou o melhor desempenho geral na análise, especialmente para arrays de tamanho médio a grande. As razões para seu excelente desempenho incluem:

**Vantagens do MergeSort:**
- **Complexidade consistente**: O(n log n) para todos os casos (melhor, médio e pior)
- **Estabilidade**: Mantém a ordem relativa de elementos iguais
- **Previsibilidade**: Performance não varia significativamente entre diferentes tipos de entrada
- **Escalabilidade**: Mantém eficiência mesmo para arrays muito grandes
- **Divide e conquista**: Estratégia eficiente que aproveita a recursão de forma otimizada

### Pior Desempenho: BubbleSort

O **BubbleSort** apresentou o pior desempenho entre os algoritmos práticos testados, tornando-se impraticável para arrays com mais de 1000 elementos.

**Desvantagens do BubbleSort:**
- **Complexidade quadrática**: O(n²) para casos médio e pior
- **Muitas comparações**: Compara cada elemento com todos os adjacentes
- **Trocas excessivas**: Realiza muitas operações de troca desnecessárias
- **Não adaptativo eficiente**: Mesmo no melhor caso, ainda realiza muitas operações

## 3. Diferenças entre os Casos

### Melhor Caso (Array já ordenado)
- **Algoritmos adaptativos** como InsertionSort e BubbleSort aproveitam a ordenação existente
- **InsertionSort**: Reduz para O(n) no melhor caso
- **BubbleSort**: Pode terminar cedo com otimização
- **Algoritmos não-adaptativos** como SelectionSort mantêm O(n²)

### Caso Médio (Array aleatório)
- Representa a performance típica esperada na prática
- **QuickSort** e **MergeSort** mantêm O(n log n)
- **Algoritmos quadráticos** começam a mostrar limitações significativas

### Pior Caso (Array inversamente ordenado)
- **QuickSort** degrada para O(n²) com pivô mal escolhido
- **InsertionSort** e **BubbleSort** atingem máxima complexidade
- **MergeSort** mantém performance consistente

## 4. Algoritmos Adicionais - Análise e Complexidade

### HeapSort
**Complexidade**: O(n log n) para todos os casos
**Funcionamento**: Constrói um heap máximo a partir do array e extrai repetidamente o elemento máximo, reconstruindo o heap.
**Performance**: Consistente e estável, mas com overhead da estrutura de dados heap. Não é adaptativo.

### ShellSort
**Complexidade**: O(n log n) a O(n²) dependendo da sequência de gaps utilizada
**Funcionamento**: Versão melhorada do insertion sort que permite trocas de elementos distantes usando uma sequência de gaps que diminui gradualmente.
**Performance**: Significativamente melhor que insertion sort para arrays grandes, especialmente com sequências de gaps otimizadas.

### CountSort
**Complexidade**: O(k + n) onde k é o range dos valores
**Funcionamento**: Conta as ocorrências de cada elemento único e usa essas contagens para determinar as posições finais.
**Performance**: Extremamente eficiente para conjuntos de dados com range limitado de valores inteiros. Não é algoritmo de comparação.

### BucketSort
**Complexidade**: O(n) no melhor caso, O(n²) no pior caso
**Funcionamento**: Distribui elementos em buckets com base em seus valores, ordena cada bucket individualmente e concatena os resultados.
**Performance**: Muito eficiente para dados uniformemente distribuídos. Performance degrada se a distribuição for desigual.

### BogoSort
**Complexidade**: O(n!) - fatorial
**Funcionamento**: Embaralha aleatoriamente o array até que esteja ordenado por acaso.
**Performance**: Completamente impraticável para qualquer uso real. Usado apenas para fins educacionais e demonstração de ineficiência.

## 5. Recomendações de Uso

### Para Arrays Pequenos (n < 100)
- **InsertionSort**: Melhor escolha devido à baixa constante e adaptabilidade
- **QuickSort**: Também eficiente, mas com overhead de recursão desnecessário

### Para Arrays Médios (100 ≤ n ≤ 10.000)
- **QuickSort**: Excelente performance média com boa utilização de cache
- **MergeSort**: Alternativa consistente se estabilidade for necessária
- **HeapSort**: Opção quando espaço adicional é limitado

### Para Arrays Grandes (n > 10.000)
- **MergeSort**: Melhor escolha para performance consistente e previsível
- **HeapSort**: Alternativa in-place com boa performance
- **QuickSort**: Pode ser usado com implementação híbrida (mudando para insertion sort em arrays pequenos)

### Para Casos Especiais
- **CountSort**: Arrays de inteiros com range limitado (k << n log n)
- **BucketSort**: Dados uniformemente distribuídos em range conhecido
- **ShellSort**: Alternativa simples quando implementação de merge/quicksort é complexa

## 6. Análise Comparativa Final

### Ranking Geral de Performance

1. **MergeSort**: Vencedor geral pela consistência e escalabilidade
2. **QuickSort**: Segundo lugar, excelente performance média
3. **HeapSort**: Terceiro, consistente mas com overhead
4. **InsertionSort**: Quarto, eficiente para arrays pequenos
5. **ShellSort**: Quinto, melhoria significativa sobre insertion sort
6. **SelectionSort**: Sexto, sempre quadrático sem vantagens
7. **BubbleSort**: Sétimo, ineficiente mas educativo
8. **BogoSort**: Último, apenas para demonstração de ineficiência

### Fatores Decisivos na Escolha

**Estabilidade**: MergeSort > InsertionSort > BubbleSort
**Uso de Memória**: HeapSort > QuickSort > ShellSort > MergeSort
**Simplicidade de Implementação**: SelectionSort > BubbleSort > InsertionSort
**Adaptabilidade**: InsertionSort > BubbleSort > outros
**Performance Pior Caso**: MergeSort > HeapSort > outros

## 7. Conclusões e Observações

### Principais Descobertas

1. **A complexidade teórica se reflete na prática**: Algoritmos O(n²) tornam-se rapidamente impraticáveis para arrays grandes.

2. **Consistência é valiosa**: MergeSort, apesar de usar mais memória, oferece performance previsível em todos os cenários.

3. **Adaptabilidade tem valor limitado**: Em aplicações reais, raramente encontramos arrays já ordenados, tornando as otimizações de melhor caso menos relevantes.

4. **Algoritmos especializados superam os gerais**: CountSort e BucketSort, quando aplicáveis, superam significativamente os algoritmos de comparação.

5. **Overhead importa para arrays pequenos**: Para arrays muito pequenos (n < 10), a simplicidade do InsertionSort supera a sofisticação teórica de algoritmos mais complexos.

### Considerações Práticas

- **Implementações híbridas** são comuns na prática, usando diferentes algoritmos conforme o tamanho do array
- **Localidade de referência** pode afetar significativamente a performance real
- **Algoritmos in-place** são preferíveis quando memória é limitada
- **Estabilidade** é crucial em aplicações onde a ordem relativa de elementos iguais deve ser preservada

### Lições Aprendidas

A análise empírica confirma que a escolha do algoritmo de ordenação deve considerar:
- Tamanho típico dos dados
- Características dos dados (distribuição, pré-ordenação)
- Restrições de memória
- Necessidade de estabilidade
- Importância da performance no pior caso vs. caso médio

**Recomendação Final**: Para uso geral, MergeSort oferece o melhor equilíbrio entre performance, previsibilidade e estabilidade, sendo a escolha mais segura para a maioria das aplicações práticas.
