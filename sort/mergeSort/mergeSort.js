// 归并排序：拆分——merge，先拆成两两数字比较的最小单元，排序这个最小单元，再将前后两组有序的最小单元合并，最终合并成一个有序的数组。

function mergeSort(arr) {
    let n = arr.length;
    var mid = Math.ceil(n / 2); // 向上取整，这里亦可以向下取整
    if (mid < n) {
        var arr1 = arr.slice(0, mid + 1);
        var arr2 = arr.slice(mid + 1, n - 1);
        mergeSort(arr1);
        mergeSort(arr2);
        merge(arr1, arr2);
    }
}

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let res = [];
    while(i <= arr1.length - 1 && j <= arr2.length - 1) {
        if (arr1[i] <= arr2[j]) {
            res.push(arr1[i++]);
        } else {
            res.push(arr2[j++]);
        }
    }
    if (i <= arr1.length - 1) {
        res.push(...arr1.slice(i, arr1.length));
    }
    if (j <= arr2.length - 1) {
        res.push(...arr2.slice(j, arr2.length));
    }
    return res;
}

/**
 * 上面的mergeSort方法存在两个问题：
 * 1 在拆分的时候 arr.slice又占用资源了 
 * 2 merge两个分开的数组arr1 arr2，并没有对原数组排序...
 * 
 * 修改如下：
 */
function mergeSortV2(arr) {
    if (arr.length <= 1) return arr;
    let n = arr.length;
    var mid = Math.ceil(n / 2); // 向上取整，这里亦可以向下取整
    var arr1 = arr.slice(0, mid);
    var arr2 = arr.slice(mid, n);
    return merge(mergeSortV2(arr1), mergeSortV2(arr2));
}

// console.log(mergeSortV2([11, 8, 3, 9, 7, 1, 2, 5]))
// console.log(mergeSortV2([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]))

/**
 * mergeSort还有另一种写法:
 * 1 拆分 在原数组上进行
 * 2 合并 也在原数组上进行
 * 
 * 如下：
 */
function mergeSortV3(arr, low, high) {
    if (high > low) {
        const mid = Math.ceil((low + high) / 2);
        mergeSortV3(arr, low, mid - 1);
        mergeSortV3(arr, mid, high);
        mergeV3(arr, low, mid, high);
    }
}

function mergeV3(arr, low, mid, high) {
    let i = low;
    let j = mid;
    let res = [];
    while(i <= mid - 1 && j <= high) {
        if (arr[i] <= arr[j]) {
            res.push(arr[i++])
        } else {
            res.push(arr[j++]);
        }
    }
    if (i <= mid - 1) {
        res.push(...arr.slice(i, mid));
    }
    if (j <= high) {
        res.push(...arr.slice(j, high + 1));
    }

    for(let k = 0; k <= res.length - 1; k++) {
        arr[k + low] = res[k];
    }
}
var arr = [11, 8, 3, 9, 7, 1, 2, 5];
mergeSortV3(arr, 0, 7);
var arr2 = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
mergeSortV3(arr2, 0, 14);

console.log(arr);
console.log(arr2);