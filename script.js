        // Implementação dos algoritmos de ordenação
        
        // BubbleSort
        function bubbleSort(arr) {
            const n = arr.length;
            let comparisons = 0;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    comparisons++;
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            return comparisons;
        }
        
        // InsertionSort
        function insertionSort(arr) {
            let comparisons = 0;
            for (let i = 1; i < arr.length; i++) {
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    comparisons++;
                    arr[j + 1] = arr[j];
                    j--;
                }
                if (j >= 0) comparisons++;
                arr[j + 1] = key;
            }
            return comparisons;
        }
        
        // SelectionSort
        function selectionSort(arr) {
            const n = arr.length;
            let comparisons = 0;
            for (let i = 0; i < n - 1; i++) {
                let minIdx = i;
                for (let j = i + 1; j < n; j++) {
                    comparisons++;
                    if (arr[j] < arr[minIdx]) {
                        minIdx = j;
                    }
                }
                if (minIdx !== i) {
                    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
                }
            }
            return comparisons;
        }
        
        // QuickSort
        function quickSort(arr, low = 0, high = arr.length - 1) {
            let comparisons = 0;
            
            function partition(arr, low, high) {
                let pivot = arr[high];
                let i = low - 1;
                
                for (let j = low; j < high; j++) {
                    comparisons++;
                    if (arr[j] < pivot) {
                        i++;
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                    }
                }
                [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
                return i + 1;
            }
            
            function quickSortRecursive(arr, low, high) {
                if (low < high) {
                    let pi = partition(arr, low, high);
                    quickSortRecursive(arr, low, pi - 1);
                    quickSortRecursive(arr, pi + 1, high);
                }
            }
            
            quickSortRecursive(arr, low, high);
            return comparisons;
        }
        
        // MergeSort
        function mergeSort(arr) {
            let comparisons = 0;
            
            function merge(left, right) {
                let result = [];
                let i = 0, j = 0;
                
                while (i < left.length && j < right.length) {
                    comparisons++;
                    if (left[i] <= right[j]) {
                        result.push(left[i]);
                        i++;
                    } else {
                        result.push(right[j]);
                        j++;
                    }
                }
                
                return result.concat(left.slice(i)).concat(right.slice(j));
            }
            
            function mergeSortRecursive(arr) {
                if (arr.length <= 1) return arr;
                
                const mid = Math.floor(arr.length / 2);
                const left = mergeSortRecursive(arr.slice(0, mid));
                const right = mergeSortRecursive(arr.slice(mid));
                
                return merge(left, right);
            }
            
            const sorted = mergeSortRecursive([...arr]);
            for (let i = 0; i < arr.length; i++) {
                arr[i] = sorted[i];
            }
            return comparisons;
        }
        
        // HeapSort
        function heapSort(arr) {
            let comparisons = 0;
            
            function heapify(arr, n, i) {
                let largest = i;
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                
                if (left < n) {
                    comparisons++;
                    if (arr[left] > arr[largest]) {
                        largest = left;
                    }
                }
                
                if (right < n) {
                    comparisons++;
                    if (arr[right] > arr[largest]) {
                        largest = right;
                    }
                }
                
                if (largest !== i) {
                    [arr[i], arr[largest]] = [arr[largest], arr[i]];
                    heapify(arr, n, largest);
                }
            }
            
            const n = arr.length;
            
            // Build heap
            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }
            
            // Extract elements
            for (let i = n - 1; i > 0; i--) {
                [arr[0], arr[i]] = [arr[i], arr[0]];
                heapify(arr, i, 0);
            }
            
            return comparisons;
        }
        
        // ShellSort
        function shellSort(arr) {
            const n = arr.length;
            let comparisons = 0;
            
            for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
                for (let i = gap; i < n; i++) {
                    let temp = arr[i];
                    let j;
                    for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                        comparisons++;
                        arr[j] = arr[j - gap];
                    }
                    if (j >= gap) comparisons++;
                    arr[j] = temp;
                }
            }
            return comparisons;
        }
        
        // CountSort
        function countSort(arr) {
            const max = Math.max(...arr);
            const min = Math.min(...arr);
            const range = max - min + 1;
            const count = new Array(range).fill(0);
            const output = new Array(arr.length);
            
            // Count occurrences
            for (let i = 0; i < arr.length; i++) {
                count[arr[i] - min]++;
            }
            
            // Cumulative count
            for (let i = 1; i < count.length; i++) {
                count[i] += count[i - 1];
            }
            
            // Build output array
            for (let i = arr.length - 1; i >= 0; i--) {
                output[count[arr[i] - min] - 1] = arr[i];
                count[arr[i] - min]--;
            }
            
            // Copy to original array
            for (let i = 0; i < arr.length; i++) {
                arr[i] = output[i];
            }
            
            return arr.length; // Operations count
        }
        
        // BucketSort
        function bucketSort(arr) {
            if (arr.length <= 1) return 0;
            
            const bucketCount = Math.floor(Math.sqrt(arr.length));
            const max = Math.max(...arr);
            const min = Math.min(...arr);
            const bucketSize = Math.ceil((max - min + 1) / bucketCount);
            
            const buckets = Array.from({ length: bucketCount }, () => []);
            
            // Distribute elements into buckets
            for (let i = 0; i < arr.length; i++) {
                const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
                buckets[Math.min(bucketIndex, bucketCount - 1)].push(arr[i]);
            }
            
            // Sort each bucket and concatenate
            let operations = 0;
            arr.length = 0;
            for (let bucket of buckets) {
                if (bucket.length > 0) {
                    operations += insertionSort(bucket);
                    arr.push(...bucket);
                }
            }
            
            return operations;
        }
        
        // BogoSort (apenas para arrays muito pequenos)
        function bogoSort(arr) {
            let operations = 0;
            const maxOperations = 1000000; // Limite de segurança
            
            function isSorted(arr) {
                operations++;
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] < arr[i - 1]) return false;
                }
                return true;
            }
            
            function shuffle(arr) {
                operations++;
                for (let i = arr.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            
            while (!isSorted(arr) && operations < maxOperations) {
                shuffle(arr);
            }
            
            return operations;
        }
        
        // Gerar arrays de teste
        function generateBestCase(size) {
            return Array.from({ length: size }, (_, i) => i + 1);
        }
        
        function generateAverageCase(size) {
            const arr = Array.from({ length: size }, (_, i) => i + 1);
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }
        
        function generateWorstCase(size) {
            return Array.from({ length: size }, (_, i) => size - i);
        }
        
        // Função para medir tempo de execução
        async function measureTime(sortFunction, arr, timeout = 5000) {
            return new Promise((resolve) => {
                const startTime = performance.now();
                let timeoutId;
                let completed = false;
                
                // Timeout handler
                timeoutId = setTimeout(() => {
                    if (!completed) {
                        completed = true;
                        resolve({ time: 'indefinido', operations: 'indefinido' });
                    }
                }, timeout);
                
                try {
                    const operations = sortFunction([...arr]);
                    const endTime = performance.now();
                    
                    if (!completed) {
                        completed = true;
                        clearTimeout(timeoutId);
                        resolve({ 
                            time: (endTime - startTime).toFixed(2), 
                            operations: operations 
                        });
                    }
                } catch (error) {
                    if (!completed) {
                        completed = true;
                        clearTimeout(timeoutId);
                        resolve({ time: 'erro', operations: 'erro' });
                    }
                }
            });
        }
        
        // Algoritmos disponíveis
        const algorithms = {
            bubbleSort: { func: bubbleSort, name: 'BubbleSort' },
            insertionSort: { func: insertionSort, name: 'InsertionSort' },
            selectionSort: { func: selectionSort, name: 'SelectionSort' },
            quickSort: { func: quickSort, name: 'QuickSort' },
            mergeSort: { func: mergeSort, name: 'MergeSort' },
            heapSort: { func: heapSort, name: 'HeapSort' },
            shellSort: { func: shellSort, name: 'ShellSort' },
            countSort: { func: countSort, name: 'CountSort' },
            bucketSort: { func: bucketSort, name: 'BucketSort' },
            bogoSort: { func: bogoSort, name: 'BogoSort' }
        };
        
        // Função para executar teste de um algoritmo
        async function runSingleTest() {
            const algorithmKey = document.getElementById('algorithmSelect').value;
            const sizesInput = document.getElementById('sizesInput').value;
            const timeout = parseInt(document.getElementById('timeoutInput').value);
            
            const sizes = sizesInput.split(',').map(s => parseInt(s.trim())).filter(s => !isNaN(s));
            
            if (sizes.length === 0) {
                alert('Por favor, insira tamanhos válidos.');
                return;
            }
            
            await runTest(algorithmKey, sizes, timeout);
        }
        
        // Função para executar todos os testes
        async function runAllTests() {
            const sizesInput = document.getElementById('sizesInput').value;
            const timeout = parseInt(document.getElementById('timeoutInput').value);
            
            const sizes = sizesInput.split(',').map(s => parseInt(s.trim())).filter(s => !isNaN(s));
            
            if (sizes.length === 0) {
                alert('Por favor, insira tamanhos válidos.');
                return;
            }
            
            const algorithmKeys = Object.keys(algorithms);
            
            showProgress();
            
            for (let i = 0; i < algorithmKeys.length; i++) {
                updateProgress((i / algorithmKeys.length) * 100, `Testando ${algorithms[algorithmKeys[i]].name}...`);
                await runTest(algorithmKeys[i], sizes, timeout);
                await new Promise(resolve => setTimeout(resolve, 100)); // Pequena pausa
            }
            
            hideProgress();
        }
        
        // Função principal de teste
        async function runTest(algorithmKey, sizes, timeout) {
            const algorithm = algorithms[algorithmKey];
            const results = [];
            
            for (const size of sizes) {
                // Limite de segurança para BogoSort
                if (algorithmKey === 'bogoSort' && size > 10) {
                    results.push({
                        size: size,
                        bestCase: { time: 'indefinido', operations: 'indefinido' },
                        averageCase: { time: 'indefinido', operations: 'indefinido' },
                        worstCase: { time: 'indefinido', operations: 'indefinido' }
                    });
                    continue;
                }
                
                const bestCaseArray = generateBestCase(size);
                const averageCaseArray = generateAverageCase(size);
                const worstCaseArray = generateWorstCase(size);
                
                const bestCase = await measureTime(algorithm.func, bestCaseArray, timeout);
                const averageCase = await measureTime(algorithm.func, averageCaseArray, timeout);
                const worstCase = await measureTime(algorithm.func, worstCaseArray, timeout);
                
                results.push({
                    size: size,
                    bestCase: bestCase,
                    averageCase: averageCase,
                    worstCase: worstCase
                });
            }
            
            displayResults(algorithm.name, results);
        }
        
        // Função para exibir resultados
        function displayResults(algorithmName, results) {
            const resultsDiv = document.getElementById('results');
            
            const table = document.createElement('table');
            table.innerHTML = `
                <h2>Teste de desempenho do ${algorithmName}</h2>
                <thead>
                    <tr>
                        <th>Tamanho da entrada</th>
                        <th>Melhor caso (ms)</th>
                        <th>Caso médio (ms)</th>
                        <th>Pior caso (ms)</th>
                    </tr>
                </thead>
                <tbody>
                    ${results.map(result => `
                        <tr>
                            <td>${result.size}</td>
                            <td class="${getTimeClass(result.bestCase.time)}">${result.bestCase.time}</td>
                            <td class="${getTimeClass(result.averageCase.time)}">${result.averageCase.time}</td>
                            <td class="${getTimeClass(result.worstCase.time)}">${result.worstCase.time}</td>
                        </tr>
                    `).join('')}
                </tbody>
            `;
            
            resultsDiv.appendChild(table);
        }
        
        // Função para classificar tempo por cor
        function getTimeClass(time) {
            if (time === 'indefinido' || time === 'erro') return 'timeout';
            const numTime = parseFloat(time);
            if (numTime < 1) return 'fast';
            if (numTime < 100) return 'medium';
            return 'slow';
        }
        
        // Funções de progresso
        function showProgress() {
            document.getElementById('progress').style.display = 'block';
        }
        
        function hideProgress() {
            document.getElementById('progress').style.display = 'none';
        }
        
        function updateProgress(percent, text) {
            document.getElementById('progressFill').style.width = percent + '%';
            document.getElementById('progressText').textContent = Math.round(percent) + '% - ' + text;
        }
        
        // Função para limpar resultados
        function clearResults() {
            document.getElementById('results').innerHTML = '';
        }
