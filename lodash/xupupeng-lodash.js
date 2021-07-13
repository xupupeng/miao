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
    function difference(array, ...values) {
        var arr = []
        var res = [].concat(...values)
        for (var i = 0; i < array.length; i++) {
            if (res.indexOf(array[i]) == -1) {
                arr.push(array[i])
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
    //head(array)获取数组array的第一个元素
    function head(array) {
        return array[0]
    }
    //fill使用value值来填充替换array，从start位置开始到end位置结束，但不包含end位置
    function fill(array, value, start = 0, end = array.length) {
        for (var i = 0; i < array.length; i++) {
            if (i >= start && i < end) {
                array[i] = value
            }
        }
        return array
    }
    //flattenDeep(array)将array递归为一维数组
    function flatrenDeep(array) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            var item = array[i]
            if (Array.isArray(item)) {
                item = flatrenDeep(item)
                for (var j = 0; j < item.length; j++) {
                    arr.push(item[j])
                }
            } else {
                arr.push(item)
            }
        }
        return arr
    }
    //last(array)获取array中的最后一个元素
    function last(array) {
        return array[array.length - 1]
    }
    //fromPairs(pairs)返回一个由键值对pairs构成的对象
    function formPairs(pairs) {
        var obj = {}
        for (var i = 0; i < pairs.length; i++) {
            var a = pairs[i]
            obj[a[0]] = a[1]
        }
        return obj
    }
    //indexOf(array,value,[fromIndex=0])返回首次在数组array中被找到的索引值，如果为负值，从尾部进行

    function indexOf(array, value, fromIndex = 0) {
        if (Math.abs(fromIndex) > array.length) {
            fromIndex = Math.ceil(fromIndex / array.length)
        }
        if (fromIndex < 0) {
            fromIndex = -fromIndex
            for (var i = array.length - 1; i >= 0; i--) {
                if (i <= array.length - fromIndex && array[i] == value) {
                    return i
                }
            }
        }
        for (var i = 0; i < array.length; i++) {
            if (i <= fromIndex && array[i] == value) {
                return i
            }
        }
        return -1
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
        head: head,
        fill: fill,
        flatrenDeep: flatrenDeep,
        last: last,
        formPairs: formPairs,
        indexOf: indexOf,



    }
}()