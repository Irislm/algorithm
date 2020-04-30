// 选择排序：存在两个区间，有序区间和无序区间。一开始，有序区间为空，数组都在无序区间中，找出无序区间中最小的数放在有序区间的末尾，直到无序区间为空。

// 希望这次能一次过
function selectionSort(arr, len) {
    for(let i = 0; i < len - 1; i++) { // 只循环len - 1次就够了
        let minIndex = i;
        for (let j = i + 1; j <= len - 1; j++) { // 循环i以后的元素，找到最小数，记录index
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i]; // 最小的放有序区间末尾
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}


// 时间复杂度分析
// 最好、最坏、平均都是O(n^2)
function selectionSort(arr, len) {
    for(let i = 0; i < len - 1; i++) { // 循环n-1次
        let minIndex = i;
        for (let j = i + 1; j <= len - 1; j++) { // 要找最小的，所以都要查看一遍，所以这里是n/n-1/.../2/1次
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}