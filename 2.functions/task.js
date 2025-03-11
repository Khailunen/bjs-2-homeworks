function getArrayParams(...arr) {
	let min = -Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			max = arr[i];
		}
		if (arr[i] > max) {
			min = arr[i];
		}
		sum += arr[i];
	}
	const avg = +(sum / arr.length).toFixed(2);
	return {
		min: min, 
		max: max, 
		avg: avg
	}
}
// console.log(getArrayParams(-99, 99, 10));
// console.log(getArrayParams(1, 2, 3, -100, 10));
// console.log(getArrayParams(5));

//должна находить сумму элементов массива и возвращать её
function summElementsWorker(...arr) {
	if (arr.length === 0)
		return 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

//для вычисления разницы максимального и минимального элементов
function differenceMaxMinWorker(...arr) {
	if (arr.length === 0)
		return 0;
	max = arr[0];
	min = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max - min;
}

//вычисления разницы сумм чётных и нечётных элементов
function differenceEvenOddWorker(...arr) {
	if (arr.length === 0)
		return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

//будет вычислять среднее значение чётных элементов
function averageEvenElementsWorker() {
	if (arr.length === 0)
		return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	if (countEvenElement === 0)
		return 0;
	return +(sumEvenElement / countEvenElement).toFixed(2);
}
// // summElementsWorker
// console.log(summElementsWorker()); // 0
// console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// // differenceMaxMinWorker
// console.log(differenceMaxMinWorker()); // 0
// console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// // differenceEvenOddWorker
// console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
// console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// // averageEvenElementsWorker
// console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
// console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

//из массива данных и насадки будет возвращать максимальный результат функции насадки
function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		console.log(result);
		if (maxWorkerResult < result) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}
const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
// console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
// console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
// console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
// console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
