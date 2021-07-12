var xupupeng = function() {
    //将数组array，拆分成多个size长度的区块，并将这些区块组成一个新数组，如果
    //最后无法分割则将剩余元素组成一个区块。
    function chunk(array, size) {
        var newArray = []
        var arr = []
        var count = 0
        for (var i = 0; i < array.length; i++) {
            count++
            arr.push(array[i])
            if (count == size) {
                newArray.push(arr)
                arr = []
                count = 0
            }
        }
        if (arr.length > 0) {
            newArray.push(arr)
        }
        return newArray
    }
    //创建一个新数组，包含原数组中所有非假值元素，false,null,0,""和NaN。
    function compact(array) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            if (array[i]) {
                arr.push(array[i])
            }
        }
        return arr
    }
    //difference(array,[values])创建一个具有唯一array值的数组，每个值不包含
    //在其他给定的数组中。
    function difference(array, [values]) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < values.length; j++) {
                if (array[i] != values[j]) {
                    arr.push(array[i])
                }
            }
        }
        return arr

    }
    //drop(array,[n])创建一个切片数组，去除array前面的n个元素。
    function drop(array, n = 1) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            if (i >= n) {
                arr.push(array[i])
            }
        }
        return arr
    }




















    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        drop: drop,

    }
}()