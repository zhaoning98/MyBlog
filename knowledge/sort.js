var elements = [3, 1, 5, 7, 2, 4, 9, 6, 10, 8];

// 选择排序
function selectionSort(arr) {
	console.time('选择排序耗时');
	var minIndex, temp;
  for (var i = 0, len = arr.length; i < len - 1; i++) {
  	minIndex = i;
  	for (var j = i + 1; j < len; j++) {
  		if (arr[j] < arr[minIndex]) { // 寻找最小的数
  			minIndex = j; // 保存最小数的索引
  		}
  	}
  	temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
  }
  console.timeEnd('选择排序耗时');
  return arr;
}
console.log(selectionSort(elements))

// 冒泡排序
function bubbleSort(arr) {
	console.time('冒泡排序耗时');
	for (var i = 0, len = arr.length; i < len - 1; i++) {
		for (var j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	console.timeEnd('冒泡排序耗时');
	return arr;
}
console.log(bubbleSort(elements))

// 快速排序
function quickSort(arr) {
	var len = arr.length;
  if (len <= 1) {
  	return arr;
  }

  var pivotIndex = Math.floor(len / 2),
  		pivot = arr.splice(pivotIndex, 1)[0],
  		left = [],
  		right = [];

  for (var i = 0; i < arr.length; i++) {
  	if (arr[i] < pivot) {
  		left.push(arr[i]);
  	} else {
  		right.push(arr[i]);
  	}
  }

  return quickSort(left).concat([pivot], quickSort(right));
}
console.time('快速排序耗时');
console.log(quickSort(elements))
console.timeEnd('快速排序耗时');

// 插入排序
function insertionSort(arr) {
  console.time('插入排序耗时');
  for (var i = 1, len = arr.length; i < len; i++) {
    var temp = arr[i];
    var j = i - 1;
    while (arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }
  console.timeEnd('插入排序耗时');
  return arr;
}
console.log(insertionSort(elements))
