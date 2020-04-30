// 冒泡排序：每次冒泡比较相邻两个数，看是否满足大小关系，如果满足，继续冒泡，如果不满足，交换其位置，以此为逻辑冒泡下去。
function bubbleSort(arr, len) {
    for(let i = 0; i < len - 1; i++) {
        if (arr[i] < arr[i + 1]) { // 比较
            continue;
        }
        let temp = arr[i + 1]; // 交换
        arr[i + 1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// 以上代码只能进行一次冒泡，无法得到结果，改下：
function bubbleSort(arr, len) {
    for(let i = 0; i < len - 1; i++) {
        if (arr[i] < arr[i + 1]) { // 比较
            continue;
        }
        let temp = arr[i + 1]; // 交换
        arr[i + 1] = arr[i];
        arr[i] = temp;
    }
    len--;
    if (len === 1) {
        return arr;
    }
    return bubbleSort(arr, len); // 第二次冒泡
}

// 优化：当一次冒泡没有任何数据交换的时候，可以结束了
function bubbleSort(arr, len) {
    let changeFlag = false;
    for(let i = 0; i < len - 1; i++) {
        if (arr[i] < arr[i + 1]) { // 比较
            continue;
        }
        let temp = arr[i + 1]; // 交换
        arr[i + 1] = arr[i];
        arr[i] = temp;
        changeFlag = true;
    }
    len--;
    if (len === 1) {
        return arr;
    }
    if (!changeFlag) {
        return arr;
    }
    return bubbleSort(arr, len); // 第二次冒泡
}

// 递归可能不太好看时间复杂度，改为循环
function bubbleSort(arr, len) {
    for(let j = 0; j < len - 1; j++) { // 一共循环len-1次
        for(let i = 0; i < len - 1 - j; i++) {
            if (arr[i] < arr[i + 1]) { // 比较
                continue;
            }
            let temp = arr[i + 1]; // 交换
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    }
    return arr; // 第二次冒泡
}

// 优化: 当一次冒泡没有任何数据交换的时候，可以结束了
function bubbleSort(arr, len) {
    for(let j = 0; j < len - 1; j++) { // 一共循环len-1次
        let changeFlag = false;
        for(let i = 0; i < len - 1 - j; i++) {
            if (arr[i] < arr[i + 1]) { // 比较
                continue;
            }
            let temp = arr[i + 1]; // 交换
            arr[i + 1] = arr[i];
            arr[i] = temp;
            changeFlag = true;
        }
        if (!changeFlag) {
            break;
        }
    }
    return arr; // 第二次冒泡
}

// 计算时间复杂度
// 最坏情况：O(n^2)
// 最好情况：O(n)
// 平均时间复杂度：O(n^2)
function bubbleSort(arr, len) {
    let changeFlag = false;
    for(let i = 0; i < len - 1; i++) { // n
        if (arr[i] < arr[i + 1]) {
            continue;
        }
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        changeFlag = true;
    }
    len--;
    if (len === 1) {
        return arr;
    }
    if (!changeFlag) { // 最好情况：冒泡一次就已经出结果。
        return arr;
    }
    return bubbleSort(arr, len); // 最坏的情况：changeFlag没有过false，也就是每次冒泡都有交换。n
}


// 以上情况有两个bug:
// 1.没有考虑到两两数对比相等的情况
// 2.i循环应该是从[0，len - 1]
function bubbleSort(arr, len) {
    let changeFlag = false;
    for(let i = 0; i < len; i++) {
        if (arr[i] <= arr[i + 1]) { // 两两比较相等，不动
            continue;
        }
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        changeFlag = true;
    }
    len--;
    if (len === 1) {
        return arr;
    }
    if (!changeFlag) {
        return arr;
    }
    return bubbleSort(arr, len);
}
function bubbleSort(arr, len) {
    for(let j = 0; j <= len - 1; j++) { // 一共循环len次
        let changeFlag = false;
        for(let i = 0; i <= len - 1 - j; i++) {
            if (arr[i] < arr[i + 1]) { // 比较
                continue;
            }
            let temp = arr[i + 1]; // 交换
            arr[i + 1] = arr[i];
            arr[i] = temp;
            changeFlag = true;
        }
        if (!changeFlag) {
            break;
        }
    }
    return arr; // 第二次冒泡
}