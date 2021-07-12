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
    //dropRight(array,[n = 1])创建一个切片数组，去除array尾部的n个元素
    function dropRight(array, n = 1) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            if (i < array.length - n) {
                arr.push(array[i])
            }
        }
        return arr
    }
    //join(array,[separator=','])将array中的所有元素转换为由separator分割的字符串
    function join(array, separator) {
        var str = '' + array[0]

        for (var i = 1; i < array.length; i++) {
            str += String(separator) + array[i]
        }
        return str
    }
    //uniq(array)创建一个去重后的array数组副本。
    function uniq(array) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            if (arr.indexOf(array[i]) == -1) {
                arr.push(array[i])
            }
        }
        return arr
    }
    //reverse(array)反转arra，使第一个元素变为最后一个元素，第二个元素变为倒数第二个元素
    function reverse(array) {
        var i = array.length - 1
        var j = 0
        while (j < i) {
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp
            j++
            i--
        }
        return array

    }
    //sum(array)计算array中值的和
    function sum(array) {
        var sum = 0
        for (var i = 0; i < array.length; i++) {
            sum += array[i]
        }
        return sum
    }
    //concat(array,...values)创建一个新数组，将array与任何数组的值连接在一起
    function concat(array, ...values) {
        var arr = []
        for (var i = 0; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                arr.push(...arguments[i])
            } else {
                arr.push(arguments[i])
            }
        }
        return arr
    }






















    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        drop: drop,
        dropRight: dropRight,
        join: join,
        uniq: uniq,
        reverse: reverse,
        sum: sum,
        concat: concat,


    }
}()