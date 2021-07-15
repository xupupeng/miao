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
    function fromPairs(pairs) {
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
            if (i >= fromIndex && array[i] == value) {
                return i
            }
        }
        return -1
    }
    //initial()获取数组中除了最后一个元素之外的所有元素
    function initial(array) {
        array.pop()
        return array
    }
    //forEach 调用iterattee函数遍历集合中的元素
    function forEach(collection, iteratee) {
        for (var i in collection) {
            iteratee(collection[i], i, collection)
        }
        return collection
    }
    //zip 创建一个打包所有元素后的数组，第一个元素包含所有提供数组的第一个元素
    //第二个包含所以提供数组的第二个元素，以此类推
    function zip(...array) {
        var result = []
        var a = arguments[0].length
        var b = 0
        while (a) {
            var arr = []
            for (var i = 0; i < arguments.length; i++) {
                arr.push(arguments[i][b])
            }
            a--
            b++
            result.push(arr)
        }
        return result

    }
    //unzip它接收一个打包后的数组并还原打包前的状态
    function unzip(array) {
        var result = []
        for (var i = 0; i < array[0].length; i++) {
            var arr = []
            for (var j = 0; j < array.length; j++) {
                arr.push(array[j][i])
            }
            result.push(arr)

        }
        return result
    }
    //pull(array,[values])移除数组中values的值

    function pull(array, ...value) {
        var arr = []
        for (var i = 0; i < array.length; i++) {
            var ok = true
            for (var j = 0; j < value.length; j++) {
                if (array[i] == value[j]) {
                    ok = false
                }
            }
            if (ok) {
                arr.push(array[i])
            }
        }
        return arr
    }
    //lastIndexOf从右到左遍历元素。
    function lastIndexOf(array, value, fromIndex = array.length - 1) {
        for (var i = array.length; i >= 0; i--) {
            if (i <= fromIndex && array[i] == value) {
                return i
            }
        }
        return -1
    }
    //add(augend,addend)相加这两个参数
    function add(augend, addend) {
        return augend + addend
    }
    //max(array)计算数组中的最大值
    function max(array) {
        if (!array) return undefined
        var max = array[0]
        for (var i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i]
            }
        }
        return max
    }
    //mean(array)计算数组的平均值
    function mean(array) {
        var sum = 0
        for (var i = 0; i < array.length; i++) {
            sum += array[i]
            var m = sum / array.length
        }
        return m
    }
    //min(array)计算array中的最小值
    function min(array) {
        if (!array) return undefined
        var min = array[0]
        for (var i = 0; i < array.length; i++) {
            if (min < array[i]) {
                min = array[i]
            }
        }
        return min
    }
    // subtract(minuend,subtrahend)两个数相减。
    function subtract(minuend, subtrahend) {
        return minuend - subtrahend
    }
    // pullAll(array,values)移除values的值在数组中
    function pullAll(array, values) {
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < values.length; j++) {
                if (array[i] == values[j]) {
                    array.splice(i, 1)
                }
            }
        }
        return array
    }
    //flatten向上一级展平数组嵌套
    function flatten(array) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                for (var j = 0; j < array[i].length; j++) {
                    result.push(array[i][j])
                }
            } else {
                result.push(array[i])
            }
        }
        return result
    }
    //flattenDeep(array)递归展平数组
    function flattenDeep(array) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            var item = array[i]
            if (Array.isArray(item)) {
                item = flattenDeep(item)
                for (var j = 0; j < item.length; j++) {
                    result.push(item[j])
                }
            } else {
                result.push(item)
            }
        }
        return result
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
        fromPairs: fromPairs,
        indexOf: indexOf,
        initial: initial,
        forEach: forEach,
        zip: zip,
        unzip: unzip,
        pull: pull,
        lastIndexOf: lastIndexOf,
        add: add,
        max: max,
        mean: mean,
        min: min,
        subtract: subtract,
        pullAll: pullAll,
        flatten: flatten,
        flattenDeep: flattenDeep,




    }
}()