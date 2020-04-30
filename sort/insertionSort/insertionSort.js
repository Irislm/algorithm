// 插入排序：在数组的第一个数和第二个数中间划一条分界线，界线前为有序区间，界线后为无序区间，将无序区间中的数字分别插入到有序区间，并在插入的过程中保持其有序。

// 拆解为子问题：将一个数插入到有序数组中，并在插入的过程中保持其有序。
function insertionSort(arr, len, value) {
    let insertIdx = -1;
    for(let i = 0; i < len; i++) {
        if (value >= arr[i]) { 
            continue;
        } else {
            if (insertIdx === -1) { 
                insertIdx = i; // 记录插入位置 i
            }
            arr[i + 1] = arr[i];  // 有问题行
        }
    }

    arr[insertIdx] = value;
    return arr;
}

// 以上代码是有两个bug
// 1 “有问题行”修改了下次循环的arr[i]
// 2 会丢失最后一个数
// 修改如下：
function insertionSort(arr, len, value) {
    for(let i = 0; i < len; i++) {
        if (arr[i] > value) {  // 找到第一个大于value的值，它的位置就是value要插入的位置，暂时不考虑相等的情况
            break;
        }
    }
    for (let j = len - 1; j >= i; j--) {
        arr[j + 1] = arr[j]; // 将插入位置及其以后的值，都往后移动，从最后一个数字开始往后移动，直到第i个数字移动完成
    }
    arr[i] = value;
    return arr;
}

// 以上代码有一个经典的JS bug
// ES6中，for循环有个块级作用域，使用let声明变量，那它只能在块级作用域中使用
function insertionSort(arr, len, value) {
    let insertIdx = -1;
    for(let i = 0; i < len; i++) {
        if (arr[i] > value) {  // 找到第一个大于value的值，它的位置就是value要插入的位置，暂时不考虑相等的情况
            insertIdx = i;
            break;
        }
    }
    for (let j = len - 1; j >= insertIdx; j--) {
        arr[j + 1] = arr[j]; // 将插入位置及其以后的值，都往后移动，从最后一个数字开始往后移动，直到第i个数字移动完成
    }
    arr[insertIdx] = value;
    return arr;
}

// 考虑两两比较相等的情况，对数据在其前插入还是在其后插入？
// 解答：最好是插入到后面，这样可以保持稳定性
function insertionSort(arr, len, value) {
    let insertIdx = -1;
    for(let i = 0; i < len; i++) {
        if (arr[i] > value) {  // 相等的情况并不视为找到了插入位置，插入到相等数据之后
            insertIdx = i;
            break;
        }
    }
    for (let j = len - 1; j >= insertIdx; j--) { 
        arr[j + 1] = arr[j];
    }
    arr[insertIdx] = value;
    return arr;
}

// 上面的代码是从前往后找插入位置，试试从后往前找，对比下哪个计算效率更高
function insertionSort(arr, len, value) {
    for (let i = len - 1; i >= 0; i--) {
        if (arr[i] > value) { // 比较
            arr[i + 1] = arr[i]; // 移动
        } else {
            arr[i + 1] = value; // 插入
            break;
        }
    }
    return arr;
}

// 以上代码完成了子问题的解答，应用在插入排序中，先验证下第一次插入的结果是否正确：
function insertionSort(arr, len, value) {
    let j = 1;
    let value = arr[j];
    for (let i = len - 1; i >= 0; i--) {
        if (arr[i] > value) { // 比较
            arr[i + 1] = arr[i]; // 移动
        } else {
            arr[i + 1] = value; // 插入
            break;
        }
    }
    return arr;
}

// 上面的代码跑出来的结果并不正确，
// 问题出在：在循环内部插入，如果所有数都走了大于条件，插入的步骤都走不到...（我哭了...)
function insertionSort(arr, len) {
    let j = 1;
    let value = arr[j];

    let i = j - 1;
    for (; i >= 0; i--) {
        if (arr[i] > value) { // 比较
            arr[i + 1] = arr[i]; // 移动
        } else {
            break;
        }
    }
    arr[i + 1] = value; // 插入
    return arr;
}

// 以上代码终于完成了子问题的解答，应用在插入排序中：
function insertionSort(arr, len) {
    for (let j = 1; j < len; j++) {
        let value = arr[j];

        let i = j - 1;
        for (; i >= 0; i--) {
            if (arr[i] > value) { // 比较
                arr[i + 1] = arr[i]; // 移动
            } else {
                break;
            }
        }
        arr[i + 1] = value; // 插入
    }
    return arr;
}

// 时间复杂度
// 最好情况：O(n)，最坏情况：(n(n+1)/2=O(n^2)，
// 平均时间复杂度：内部是一次插入操作，插入操作的平均时间复杂度O(n)，循环执行n-1次插入操作，所以平均时间复杂度是O(n^2)
function insertionSort(arr, len) {
    for (let j = 1; j < len; j++) { // n-1
        let value = arr[j];

        let i = j - 1;
        for (; i >= 0; i--) { // 最好情况：1，最坏情况：数组是倒序的，每次都要循环1/2/3/.../n次
            if (arr[i] > value) {
                arr[i + 1] = arr[i];
            } else {
                break;
            }
        }
        arr[i + 1] = value;
    }
    return arr;
}