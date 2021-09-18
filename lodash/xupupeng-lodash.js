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
    //differenceBy(array,values,iteratee)这个方法类似difference，除了它接受一个iteratee调用每一个数组和值，iteratee会传入一个参数value
    function differenceBy(array, ...values) {
        const iteratee = values.pop()
        const value = [].concat(...values)
        const result = []
        let array2, value2
        if (typeof iteratee == 'function') {
            array2 = array.map(it => iteratee(it))
            value2 = value.map(it => iteratee(it))
        }
        if (typeof iteratee == 'string') {
            array2 = array.map(it => it[iteratee])
            value2 = value.map(it => it[iteratee])
        }
        if (Array.isArray(iteratee)) {
            array2 = array
            if (values.length > 0) {
                value2 = value.concat(iteratee)
            } else {
                value2 = [].concat(iteratee)
            }

        }

        for (let i = 0; i < array.length; i++) {
            let index
            if (!(value2.includes(array2[i]))) {
                index = array2.indexOf(array2[i])
                result.push(array[index])
            }

        }
        return result
    }
    //differenceWith(array,values,comparator)这个方法类似difference，除了它接受一个comparator调用每一个数组元素的值，comparator会传入两个参数（arrVal,othVal)
    function differenceWith(array, ...values) {
        const comparator = values.pop()
        const value = [].concat(...values)
        const result = []
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < value.length; j++) {
                if (comparator(array[i], value[j]) === false) {
                    result.push(array[i])
                }
            }
        }
        return result
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
        if (array.length === 0) {
            return undefined
        }
        return Math.min(...array)
    }
    // subtract(minuend,subtrahend)两个数相减。
    function subtract(minuend, subtrahend) {
        return minuend - subtrahend
    }
    // pullAll(array,values)移除values的值在数组中
    function pullAll(array, values) {
        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (values[i] == array[j]) {
                    array.splice(j, 1)
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
    //flattenDeepth根据deepth递归展平数组的层级
    function flattenDepth(array, depth = 1) {
        const result = []
        if (depth == 0) {
            return array
        }
        for (let i = 0; i < array.length; i++) {
            let item = array[i]
            if (Array.isArray(item)) {
                item = flattenDepth(item, depth - 1)
                for (let j = 0; j < item.length; j++) {
                    result.push(item[j])
                }
            } else {
                result.push(item)
            }
        }
        return result
    }
    //slice(array,start,end),创建一个裁剪后的数组，从start到end的位置但不包括end本身的位置
    function slice(array, start = 0, end = array.length) {
        var result = []
        for (var i = start; i < end; i++) {
            result.push(array[i])
        }
        return result
    }
    //property(path)创建一个返回给定对象的path的值的函数
    //传入什么属性名，它返回的函数就用来获取这个对象的属性名
    function property(path) {
        return function(obj) {
            return obj[path]
        }
    }
    //创建一个深入比较的方法来比较给定的对象和source对象。
    //如果给定的对象拥有相同的属性值返回true。否则false
    function matches(source) {
        return function(obj) {
            for (let key in obj) {
                if (source[key] != obj[key]) {
                    return false
                }
            }
            return true
        }
    }
    //matcesProperty创建一个深比较的方法来比较给定对象的path值
    //是否是srcValue。如果是返回TRUE，否则返回false。
    function matchesProperty(ary) {
        let m = ary[0]
        let n = ary[1]
        return function(obj) {
            return obj[m] == n
        }

    }
    //map 创建一个经过后面处理的集合中每一个元素的结果数组。返回一个新数组
    function map(ary, mapper) {
        if (typeof mapper == 'string') {
            mapper = property(mapper)
        }
        if (Array.isArray(mapper)) {
            mapper = matchesProperty(...mapper)
        }
        if (typeof mapper == 'object') {
            mapper = matches(...mapper)
        }

        const res = []
        for (let i in ary) {
            res.push(mapper(ary[i], i, ary))
        }
        return res
    }
    //解析JSON
    function parseJson(str) {
        i = 0
        return parseValue()

        function parseValue() {
            if (str[i] == 't') {
                return parseTrue()
            }
            if (str[i] == 'f') {
                return parseFalse()
            }
            if (str[i] == 'n') {
                return parseNull()
            }
            if (str[i] == '"') {
                return parseString()
            }
            if (str[i] == '[') {
                return parseArray()
            }
            if (str[i] == '{') {
                return parseObject()
            }
            return parseNumber()
        }

        function parseTrue() {
            i += 4
            return true
        }

        function parseFalse() {
            i += 5
            return false
        }

        function parseNull() {
            i += 4
            return null
        }

        function parseString() {
            i++
            let result = ''
            while (str[i] != '"') {
                result += str[i++]
            }
            i++
            return result
        }

        function parseArray() {
            i++
            const result = []
            while (str[i] != ']') {
                let value = parseValue()
                result.push(value)
                if (str[i] == ',') {
                    i++
                }
            }
            i++
            return result
        }

        function parseObject() {
            i++
            const result = {}
            while (str[i] != '}') {
                let key = parseString()
                i++
                let value = parseValue()
                result[key] = value
                if (str[i] == ',') {
                    i++
                }
            }
            i++
            return result
        }

        function parseNumber() {
            let result = ''
            while (str[i] >= '0' && str[i] <= '9') {
                result += str[i++]
            }
            return Number(result)
        }
    }
    //toPath 创建value为属性路径的数组
    function toPath(value) {
        let reg = new RegExp(/\w/g)
        return value.match(reg)

    }
    //matches 创建一个深比较的方法来比较给定对象和source对象。
    //如果给定的对象拥有相同的属性值返回true，否则返回false
    function matches(source) {
        return function(object) {
            for (let key in source) {
                if (source[key] != object[key]) {
                    return false
                }
            }
            return true
        }
    }
    //identity(value)这个方法返回首个提供的参数
    function identity(value) {
        return value
    }
    //创建一个返回给定对象的path的值的函数
    //返回这个函数接收的对象，返回这个对象传入的路径为属性的属性值
    function property(path) {
        return function(object) {
            return object[path]
        }
    }
    //repeat，重复N次的字符串
    function repeat(String = '', n = 0) {
        let result = ''
        for (let i = 0; i < n; i++) {
            result += String
        }
        return result
    }
    //nth 返回索引，有负数
    function nth(array, index) {
        if (index < 0) {
            return array[index + array.length]
        } else {
            return array[index]
        }
    }
    //intersection([arrays])创建一个包含所有使用SameValueZero进行等值比较后筛选的唯一值数组

    function intersection(array, ...arrays) {
        const res = new Set()
        let val

        for (let i = 0; i < arrays.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (arrays[i].indexOf(array[j]) == -1) {
                    val = array[j]
                } else {
                    if (val != array[j]) {
                        res.add(array[j])
                    }

                }
            }
        }
        return Array.from(res)
    }
    //keyBy,创建一个对象的组成，key是经过iteratee处理的结果，value是产生key的元素，iteratee会传入一个参数（value）
    function keyBy(collection, iteratee) {
        const obj = {}
        if (typeof iteratee == 'function') {
            collection.forEach(it => {
                obj[iteratee(it)] = it
            })
        } else {
            collection.forEach(it => {
                obj[it[iteratee]] = it
            })
        }
        return obj
    }
    //sortedIndex(array,value) 使用二进制的方式检索来决定value应该插在数组中的位置，它的index应该尽可能的小以保证数组的排序。
    function sortedIndex(array, value) {
        let left = 0
        let right = array.length - 1
        if (array[right] < value) {
            return array.length
        }
        if (array[left] > value) {
            return 0
        }
        while (left < right) {
            let mid = (left + right) >> 1
            if (array[mid] >= value) {
                right = mid
            }
            if (array[mid] < value) {
                left = mid + 1
            }
        }
        return left
    }
    // sortedIndexBy(array,value,iteratee),它除了接受一个iteratee调用每个数组和值来计算排序，iteratee会传入一个参数value
    function sortedIndexBy(array, value, iteratee) {
        if (typeof iteratee == 'string') {
            return sortedIndex(array.map(it => it[iteratee]), value[iteratee])
        }
        if (typeof iteratee == 'function') {
            return sortedIndex(array.map(it => iteratee(it)), iteratee(value))
        }

    }

    //sortedIndexOf(array,value),这个方法类似于indexOf，除了他是执行二进制来检索已经排序的数组
    function sortedIndexOf(array, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i
            }
        }
        return -1
    }
    //sortedLastIndex(array,value)这个方法类似sortedIndex，除了它返回在value中尽可能大的index位置
    function sortedLastIndex(array, value) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] <= value) {
                return i + 1
            }
        }
        return 0
    }
    //sortedLastIndexBy(array,value,iteratee)这个方法类似于sortedLastIndex，除了它接受一个iteratee调用每一数组和值来计算排序，iteratee会传入一个参数（value）
    function sortedLastIndexBy(array, value, iteratee) {
        if (typeof iteratee == 'string') {
            return sortedLastIndex(array.map(it => it[iteratee]), value[iteratee])
        }
        if (typeof iteratee == 'function') {
            return sortedLastIndex(array.map(it => iteratee(it)), iteratee(value))
        }
    }
    //sortedLastIndexOf(array,value)这个方法类似indexof，除了他是执行二进制来检索已经排序的数组的
    function sortedLastIndexOf(array, value) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] == value) {
                return i
            }
        }
        return -1
    }
    //sortedUniq(array)排序并优化数组，返回一个不重复的数组
    function sortedUniq(array) {
        let result = []
        for (let i = 0; i < array.length; i++) {
            if (!result.includes(array[i])) {
                result.push(array[i])
            }
        }
        return result.sort((a, b) => a - b)
    }
    //sortedUniqBy(array,iteratee)除了它接受一个iteratee调用每一个数组和值来排序并优化数组
    function sortedUniqBy(array, iteratee) {
        const ary = []
        const result = []
        for (let i = 0; i < array.length; i++) {
            let number = iteratee(array[i])
            if (ary.indexOf(number) == -1) {
                ary.push(number)
                result.push(array[i])
            }
        }
        return result
    }
    //tail(array)获取数组中除了第一个元素的剩余数组
    function tail(array) {
        const result = []
        for (let i = 1; i < array.length; i++) {
            result.push(array[i])
        }
        return result
    }
    //take(array,n=1)从数组的起始元素开始提取N个元素
    function take(array, n = 1) {
        let result = []
        if (n == 0) return []
        if (n >= array.length) return array
        for (let i = 0; i < n; i++) {
            result.push(array[i])
        }
        return result
    }
    //takeRight(array,n=1)从数组的结束元素开始提取N个元素
    function takeRight(array, n = 1) {
        let result = []
        if (n == 0) return []
        if (n >= array.length) return array
        for (let i = array.length - 1; i >= array.length - n; i--) {
            result.push(array[i])
        }
        return result.reverse()
    }
    //union([arrays]),创建顺序排列的唯一值组成的数组。
    function union(...arrays) {
        const result = []
        for (let i = 0; i < arrays.length; i++) {
            let ary = arrays[i]
            for (let j = 0; j < ary.length; j++) {
                if (!result.includes(ary[j])) {
                    result.push(ary[j])
                }
            }
        }
        return result
    }
    //unionBy([arrays],iteratee)这个方法类似union，除了它接受一个iteratee调用每一个数组和值，iteratee会传入一个参数（value）
    function unionBy(...arrays) {
        const result = []
        const array = []
        let iteratee = arrays.pop()
        if (typeof iteratee == 'function') {
            for (let i = 0; i < arrays.length; i++) {
                let ary = arrays[i]
                for (let j = 0; j < ary.length; j++) {
                    let number = iteratee(ary[j])
                    if (!array.includes(number)) {
                        array.push(number)
                        result.push(ary[j])
                    }
                }
            }
        }
        if (typeof iteratee == 'string') {
            let ary = []
            for (let i = 0; i < arrays.length; i++) {
                ary.push(...arrays[i])
            }

            for (let i = 0; i < ary.length; i++) {
                let number = ary[i][iteratee]
                if (!array.includes(number)) {
                    array.push(number)
                    result.push(ary[i])
                }
            }
        }
        return result
    }
    //without(array,value)创建一个移除了所有提供的values的数组。
    function without(array, ...value) {
        const result = []
        for (let i = 0; i < array.length; i++) {
            if (!value.includes(array[i])) {
                result.push(array[i])
            }
        }
        return result
    }
    //xor(...array)创建一个包含了所有唯一值的数组。
    function xor(...array) {
        const result = []
        const ary1 = []
        let ary = [].concat(...array)

        for (let i = 0; i < ary.length; i++) {
            let count = 0
            for (let j = i + 1; j < ary.length; j++) {
                if (ary[i] == ary[j]) {
                    count = 1
                    ary1.push(ary[i])
                }
            }
            if (count == 0 && !ary1.includes(ary[i])) {
                result.push(ary[i])
            }

        }
        return result
    }
    //xorBy(...arrays,iteratee),这个方法类似于.xor,除了它接受一个iteratee调用每一个数组和值，iteratee会传入一个参数（value）
    function xorBy(...arrays) {
        const array = [].concat(...arrays)
        let iteratee = array.pop()

        const result = []
        const result2 = []
        const result3 = []
        if (typeof iteratee == 'function') {
            for (let i = 0; i < array.length; i++) {
                result.push(iteratee(array[i]))
            }
        }
        if (typeof iteratee == 'string') {
            for (let i = 0; i < array.length; i++) {
                result.push(array[i][iteratee])
            }
        }
        for (let i = 0; i < result.length; i++) {
            let count = 0
            for (let j = i + 1; j < result.length; j++) {
                if (result[i] == result[j]) {
                    count = 1
                    result2.push(result[i])
                }
            }
            if (count == 0 && !result2.includes(result[i])) {
                result3.push(array[i])
            }
        }
        return result3
    }
    //zipObject(props=[],values=[])它接受2个数组，一个作为属性名，一个作为属性值
    function zipObject(props = [], values = []) {
        const obj = {}
        for (let i = 0; i < props.length; i++) {
            obj[props[i]] = values[i]
        }
        return obj
    }
    //zipWith(...arrays)这个方法类似zip，除了它接受一个iteratee决定如何重组值，iteratee会调用每一组元素。
    function zipWith(...arrays) {
        const iteratee = arrays.pop()
        const result = []
        for (let i = 0; i < arrays[0].length; i++) {
            const ary = []
            for (let j = 0; j < arrays.length; j++) {
                ary.push(arrays[j][i])
            }
            result.push(iteratee(...ary))
        }
        return result
    }
    //countBy(collection,iteratee)创建一个组成对象key是经过iteratee处理的集合jieguo，value是处理结果的次数。iteratee会传入一个参数（value）
    function countBy(collection, iteratee) {
        const obj = {}
        const ary = []
        if (typeof iteratee == 'function') {
            for (let i = 0; i < collection.length; i++) {
                ary.push(iteratee(collection[i]))
            }
        }
        if (typeof iteratee == 'string') {
            for (let i = 0; i < collection.length; i++) {
                ary.push(collection[i][iteratee])
            }
        }
        for (let i = 0; i < ary.length; i++) {
            let key = ary[i]
            if (key in obj) {
                obj[key]++
            } else {
                obj[key] = 1
            }
        }
        return obj
    }
    //groupBy(collection,iteratee)创建一个对象组成，key是经过iteratee处理的结果，value是产生key的元素数组，iteratee会传入1个参数（value）
    function groupBy(collection, iteratee) {
        const obj = {}
        if (typeof iteratee == 'function') {
            for (let i = 0; i < collection.length; i++) {
                let key = iteratee(collection[i])

                if (!(key in obj)) {
                    obj[key] = []
                }
                obj[key].push(collection[i])
            }
        }
        if (typeof iteratee == 'string') {
            for (let i = 0; i < collection.length; i++) {
                let key = collection[i][iteratee]

                if (!(key in obj)) {
                    obj[key] = []
                }
                obj[key].push(collection[i])
            }
        }
        return obj
    }
    //includes(collection,value,fromIndex=0)检查值是否在集合中，如果集合是字符串，那么检查值是否在字符串中，
    function includes(collection, value, fromIndex = 0) {
        if (Array.isArray(collection)) {
            for (let i = fromIndex; i < collection.length; i++) {
                if (collection[i] === value) return true
            }
        } else if (typeof collection == 'object') {
            for (let key in collection) {
                if (collection[key] === value) return true
            }
        } else if (typeof collection == 'string') {
            let result = new RegExp(value)
            return result.test(collection)
        }
        return false
    }
    //castArray(value)如果value不是数组，那么强制转换为数组
    function castArray(value) {
        if (Array.isArray(value)) return value
        if (arguments.length == 0) return []
        return [value]
    }
    //eq(value,other)比较两者的值确定他们是否相等
    function eq(value, other) {
        return value === other || (value !== value && other !== other)
    }
    //reduce(collection,iteratee,accumulator)通过iteratee遍历集合中的每个元素，每次返回的值会作为下一次iteratee使用，如果没有accumulator，则集合中的第一个元素作为zccumulator，iteratee会传入4个参数
    function reduce(collection, iteratee, accumulator = collection[0]) {
        let result = accumulator
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                result = iteratee(result, collection[i])
            }
        } else if (typeof collection == 'object') {
            for (let key in collection) {
                iteratee(result, collection[key], key)
            }
        }
        return result
    }
    //reduceRight(collection,iteratee,accumulator),这个方法类似reduce，除了他是从右到左遍历的。
    function reduceRight(collection, iteratee, accumulator) {
        let result = accumulator
        for (let i = collection.length - 1; i >= 0; i--) {
            result = iteratee(result, collection[i])
        }
        return result
    }
    //sample(collection)从集合中水机获得元素
    function sample(collection) {
        if (Array.isArray(collection)) {
            return collection[Math.floor(Math.random() * collection.length)]
        }
    }
    //sampleSize(collection,n = 0)获得从集合中随机获得的N个元素
    function sampleSize(collection, n = 0) {
        let result = []
        if (Array.isArray(collection)) {
            if (n > collection.length) n = collection.length
            for (let i = 0; i < n; i++) {
                result.push(sample(collection))
            }
        }
        return result
    }
    //size(collection)返回集合的长度或对象中可枚举的个数
    function size(collection) {
        if (typeof collection == 'string' || Array.isArray(collection)) return collection.length
        if (typeof collection == 'object' && !Array.isArray(collection)) return Object.keys(collection).length
    }
    //conformsTo(object,source)通过调用具有的相应属性值的属性object来检查是否符合
    function conformsTo(object, source) {
        let key = Object.keys(source)
        const f = source[key]
        return f(object[key])
    }
    //gt(value,other)检查value是否大于other
    function gt(value, other) {
        return value > other ? true : false
    }
    //gte(value,other)检查value是否大于等于other
    function gte(value, other) {
        return value >= other ? true : false
    }
    //isArguments(value)检查value是否是类arguments对象。
    function isArguments(value) {
        return Object.prototype.toString.call(value) == '[object Arguments]'
    }
    //isArray(value)检查value是否是Array类对象
    function isArray(value) {
        return Object.prototype.toString.call(value) == '[object Array]'
    }
    //isArrayBuffer(value)检查value是否是ArrayBuffer对象
    function isArrayBuffer(value) {
        return Object.prototype.toString.call(value) == '[object ArrayBuffer]'
    }
    //isArrayLike(value)检查value是否是类数组。如果是类数组的话，应该不是一个函数，而且value.length是个整数，大于等于0
    function isArrayLike(value) {
        return typeof value !== 'function' || value.length >= 0
    }
    //isArrayLikeObject(value) 这个方法类似与isArrayLike,除了它还检查值是否是个对象
    function isArrayLikeObject(value) {
        return isArrayLike(value) && typeof value == 'object'
    }
    //isBoolean(value)检查value是否是原始boolean类型或者duixiang
    function isBoolean(value) {
        return Object.prototype.toString.call(value) == '[object Boolean]'
    }
    //isDate(value)检查value是否是个Date类型
    function isDate(value) {
        return Object.prototype.toString.call(value) == '[object Date]'
    }
    //isElement(value)检查value是否可能是DOM元素
    function isElement(value) {
        return Object.prototype.toString.call(value) == '[object HTMLBodyElement]'
    }
    //isEmpty(value)检查value是否为空，判断的依据是除非是有枚举属性的对象，length大于0的arguments object，array，string或者类jquery选择器
    function isEmpty(value) {
        if (value == null || typeof value === 'undefined' || typeof value === 'boolean' || value !== value || typeof value === 'number') return true
        if (typeof value == 'string') return value.length
        if (typeof value == 'object') {
            if (Array.isArray(value)) {
                return value.length == 0
            } else {
                return Object.keys(value).length == 0
            }
        }
    }
    //isEqual(value,other)执行深比较来决定两者的值是否相等。
    function isEqual(value, other) {
        if (value === other) return true
        if (typeof value !== typeof other) return false
        if (typeof value == 'object' && typeof other == 'object') {
            if (Object.keys(value).length !== Object.keys(other).length) return false
            for (let key in value) {
                if (!isEqual(value[key], other[key])) return false
                if (!(key in other)) return false
            }
            return true
        }
        return false
    }
    //isError(value)检查value是否是Error,EvalError,TangeError,TeferenceError,SyntaxError,TypeError,或者URIError object
    function isError(value) {
        return Object.prototype.toString.call(value) == '[object Error]'
    }
    //isFinite(value) 检查value是否是原始finite number  是否是一个有穷数
    function isFinite(value) {
        return Number.isFinite(value)
    }
    //isFunction(value) 检查value的值是否是Function对象
    function isFunction(value) {
        return typeof value == 'function'
    }
    //isInteger(value)检查value是否为整数
    function isInteger(value) {
        return typeof value == 'number' && Math.floor(value) == value && value !== Infinity
    }
    //isLength(value)检查value是否是有效长度
    function isLength(value) {
        return value >= 0 && isInteger(value)
    }
    //isMap(value)检查value是否是个Map对象
    function isMap(value) {
        return Object.prototype.toString.call(value) == '[object Map]'
    }
    //isMatch(object,source)执行一个深比较来确定object是否包含有source的属性值。
    function isMatch(object, source) {
        if (object === source) return true
        if (typeof object !== 'object' || typeof source !== 'object') return false
        for (let key in source) {
            if (typeof source[key] !== 'object' && source[key]) {
                if (source[key] !== object[key]) return false
            } else if (source[key]) {
                return isMatch(object[key], source[key])
            }

        }
        return true
    }
    //isNaN(value)检查value是否为NaN
    function isNaN(value) {
        if (typeof value == 'object') return value.valueOf !== value.valueOf && Number.isNaN(value)
    }
    //isNative(value)检查value是否是原生函数
    function isNative(value) {
        return typeof value == 'function' && Function.prototype.toString.call(value).includes('[native code]')
    }
    //isNil(value)检查value是否是null或者undefined
    function isNil(value) {
        return value === undefined || value === null
    }
    //isNull(value)检查value是否是null
    function isNull(value) {
        return value === null
    }
    //isNumber(value)检查value是否是原始数值型或者对象
    function isNumber(value) {
        // return Object.prototype.toString.call(value) == '[object number]'
        return value == Infinity || value == -Infinity || isNaN(value) || isFinite(value)
    }
    //isObject(value)检查value是否是Objec。
    function isObject(value) {
        return value !== null && (typeof value == 'function' || typeof value == 'object')
    }
    //isObjectLike检查value是否是类对象，类对象应该不是null以及typeof的结果是'object'
    function isObjectLike(value) {
        return value !== null && typeof value == 'object'
    }
    //isRegExp(value)检查value是否是RegExp对象
    function isRegExp(value) {
        return Object.prototype.toString.call(value) == '[object RegExp]'
    }
    //isSet(value) 检查value是否为Set对象
    function isSet(value) {
        return Object.prototype.toString.call(value) == '[object Set]'
    }
    //isString(value)检查value是否是原始字符串或者对象
    function isString(value) {
        return typeof value == 'string'
    }
    //isSymbol(vaule)检查value是否是Symbol或者对象
    function isSymbol(value) {
        return typeof value == 'symbol'
    }
    //isUndefined(value)检查value是否是undefined
    function isUndefined(value) {
        return value === undefined
    }
    //isWeakMap(value)检查value是否是WeakMap对象
    function isWeakMap(value) {
        return Object.prototype.toString.call(value) == '[object WeakMap]'
    }
    //isWeakSet(value)检查value是否是WeakSet对象
    function isWeakSet(value) {
        return Object.prototype.toString.call(value) == '[object WeakSet]'
    }
    //It(value,other)检查value是否小于other
    function It(value, other) {
        return value < other
    }
    //Ite(value,other) 检查value是否小于等于other
    function Ite(value, other) {
        return value <= other
    }
    //toArray(value)转换value为数组
    function toArray(value) {
        const result = []
        if (typeof value == 'object' && !Array.isArray(value)) {
            for (let key in value) {
                result.push(value[key])
            }
            return result
        }
        if (typeof value == 'string') return value.split('')
        if (Array.isArray(value)) return value
        return []
    }
    //ceil(number,precision=0)根据precision向上舍入number
    function ceil(number, precision = 0) {
        let a = Math.ceil(number * Math.pow(10, precision))
        let b = Math.pow(10, precision)
        return a / b
    }
    //floor(number,precision=0)根据precision向下保留number
    function floor(number, precision = 0) {
        let a = Math.floor(number * Math.pow(10, precision))
        let b = Math.pow(10, precision)
        return a / b
    }
    //divide(dividend,divisor)
    function divide(dividend, divisor) {
        return dividend / divisor
    }
    //meanBy(array,iteratee)
    function meanBy(array, iteratee) {
        let result
        if (typeof iteratee == 'function') {
            result = array.map(it => iteratee(it))
        }
        if (typeof iteratee == 'string') {
            result = array.map(it = it[iteratee])
        }
        return mean(result)
    }
    //maxBy(array,iteratee)这个方法类似与max除了它接受iteratee调用每个元素，根据返回的value决定排序准则。iterat会传入一个参数（value）
    function maxBy(array, iteratee) {
        let result
        if (typeof iteratee == 'function') {
            result = array.map(it => iteratee(it))
            let index = result.indexOf(Math.max(...result))
            return array[index]
        }
        if (typeof iteratee == 'string') {
            result = array.map(it => it(iteratee))
            let index = result.indexOf(Math.max(...result))
            return array[index]
        }
    }
    //minBy(array,iteratee)这个方法类似min，除了它接受iteratee调用每一个元素，根据返回的value决定排序准则，iteratee会传入一个参数(value)
    function minBy(array, iteratee) {
        let result
        if (typeof iteratee == 'function') {
            result = array.map(it => iteratee(it))
            let index = result.indexOf(Math.min(...result))
            return array[index]
        }
        if (typeof iteratee == 'string') {
            result = array.map(it => it[iteratee])
            let index = result.indexOf(Math.min(...result))
            return array[index]
        }
    }
    //multiply(multiplier,multiplicand) 两个数相乘
    function multiply(multiplier, multiplicand) {
        return multiplier * multiplicand
    }
    //round(number,precision=0)根据四舍五入number
    function round(number, precision = 0) {
        let a = Math.round(number * Math.pow(10, precision))
        let b = Math.pow(10, precision)
        return a / b
    }
    //subtract(minuend,subtrahend)两数相减
    function subtract(minuend, subtrahend) {
        return minuend - subtrahend
    }
    //sumBy(array,iteratee)这个方法类似sum，除了它接受iteratee调用每一个元素，根据返回的value决定如何计算，iteratee会传入一个参数（value）
    function sumBy(array, iteratee) {
        let result
        if (typeof iteratee == 'function') {
            result = array.map(it => iteratee(it))
            return sum(result)
        }
        if (typeof iteratee == 'string') {
            result = array.map(it => it[iteratee])
            return sum(result)
        }
    }
    //clamp(number,min,max)返回限制在min和max之间的值
    function clamp(number, min, max) {
        if (number == Math.max(number, min, max)) return Math.max(min, max)
        if (number == Math.min(number, min, max)) return Math.min(min, max)
    }
    //inRange(number,start=0,end)检查number是否在start与end之间，但不包括end，如果end没有指定，那么start设置为0.如果start大于end，那么参数会交换以便支持负范围。
    function inRange(number, start = 0, end) {
        if (arguments.length == 2) {
            start = 0
            end = arguments[1]
        }
        if (end >= start) {
            return number >= start && number < end
        }
        if (end <= start) {
            return number > end && number <= start
        }
    }
    //assign(object,...sources)分配来源对象的可枚举属性到目标对象上。来源对象的应用规则是从左到右，随后的下一个对象的属性会覆盖上一个对象的属性
    function assignIn(object, ...sources) {
        for (let i = 0; i < sources.length; i++) {
            let source = sources[i]
            if (typeof source == 'object') {
                for (let key in source) {
                    object[key] = source[key]
                }
            }
        }
        return object
    }
    //defaults(object,...sources)分配来源对象的可枚举属性到目标对象所有解析为undefined的属性上，来源对象从左到右应用，一旦设置了相同属性的值，后续的将被忽略掉。
    function defaults(object, ...sources) {
        for (let s of sources) {
            for (let key in s) {
                if (!(key in object)) {
                    object[key] = s[key]
                }
            }
        }
        return object
    }
    //defaultsDeep(object,...sources)这个方法类似defaults，他会递归分配默认属性
    function defaultsDeep(object, ...sources) {
        for (let s of sources) {
            for (let key in s) {
                if (typeof object[key] == 'object') {
                    defaultsDeep(object[key], s[key])
                } else {
                    if (!(key in object)) {
                        object[key] = s[key]
                    }
                }
            }
        }
        return object
    }
    //forIn(object,iteratee)使用iteratee遍历对象的自身和继承的可枚举属性，iteratee会传入三个参数（value,key,object），若返回false，iteratee会提前退出遍历
    function forIn(object, iteratee) {
        for (let key in object) {
            if (iteratee(object[key], key, object) === false) {
                break
            }
        }
        return object
    }
    //forInRight(object,iteratee)这个类似forIn，除了他是反方向开始遍历的
    function forInRight(object, iteratee) {
        const array = Object.keys(object)
        for (let i = array.length; i >= 0; i--) {
            if (iteratee(object[array[i]], array[i], object) === false) break
        }
        return object
    }
    //forOwn(object,iteratee)使用iteratee遍历自身可枚举属性，iteratee会传入3个参数，value，key，object，如果返回false，iteratee会提前退出遍历
    function forOwn(object, iteratee) {
        for (let key in object) {
            if (iteratee(object[key], key, object) === false) break
        }
        return object
    }
    //forOwnRight(object,iteratee)这个方法类似forOwn，除了他是反方向遍历的
    function forOwnRight(object, iteratee) {
        const array = Object.keys(object)
        for (let i = array.length; i >= 0; i--) {
            if (iteratee(object[array[i]], array[i], object)) break
        }
        return object
    }
    //functions(object)返回一function对象自身可枚举属性名的数组
    function functions(object) {
        const result = []
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                result.push(key)
            }
        }
        return result
    }
    //functionsIn(object)返回一个function对象自身和继承的可枚举属性名的数组
    function functionsIn(object) {
        const result = []
        for (let key in object) {
            if (typeof object[key] == 'function') result.push(key)
        }
        return result
    }
    //omit(object,props)反向版pick，这个方法返回忽略属性之外的自身和继承的可枚举属性
    function omit(object, props) {
        const result = {}
        for (let key in object) {
            if (!(props.includes(key))) {
                result[key] = object[key]
            }
        }
        return result
    }
    //pick(object,props)创建一个从object中选中的属性对象
    function pick(object, props) {
        const result = {}
        for (let key in object) {
            if (props.includes(key)) {
                result[key] = object[key]
            }
        }
        return result
    }
    //omitBy(object,predicate)反向版pickBy，这个方法返回经predicate判断不是真值的属性自身和继承和可枚举属性。
    function omitBy(object, predicate) {
        const result = {}
        for (let key in object) {
            if (!predicate(object[key])) {
                result[key] = object[key]
            }
        }
        return result
    }
    //pickBy(object,predicate)创建一个从object中经predicate判断为真值的属性为对象，predicate会传入一个参数（value）
    function pickBy(object, predicate) {
        const result = {}
        for (let key in object) {
            if (predicate(object[key])) {
                result[key] = object[key]
            }
        }
        return result
    }
    //toPairs(object)创建一个对象自身可枚举属性的键值对数组
    function toPairs(object) {
        const result = []
        for (let key in object) {
            result.push([key, object[key]])
        }
        return result

    }
    //findIndex(array,predicate)这个方法类似find，除了它返回最先通过predicate判断为真值的元素index，而不是元素本身。
    function findIndex(array, predicate) {
        if (typeof predicate == 'function') {
            for (let i = 0; i < array.length; i++) {
                let obj = array[i]
                if (predicate(obj)) {
                    return i
                }
            }
        }
        if (!Array.isArray(predicate) && typeof predicate == 'object') {
            for (let i = 0; i < array.length; i++) {
                if (isEqual(array[i], predicate)) {
                    return i
                }
            }
        }
        if (Array.isArray(predicate)) {
            for (let i = 0; i < array.length; i++) {
                let obj = array[i]
                for (let key in obj) {
                    if (key == predicate[0] && obj[key] == predicate[1]) {
                        return i
                    }
                }
            }
        }
        if (typeof predicate == 'string') {
            for (let i = 0; i < array.length; i++) {
                let obj = array[i]
                if (obj[predicate]) {
                    return i
                }
            }
        }
        return -1

    }
    //findLastIndex(array,predicate)这个方式类似findIndex，不过它是从右到左的
    function findLastIndex(array, predicate) {
        if (typeof predicate == 'function') {
            for (let i = array.length - 1; i >= 0; i--) {
                let obj = array[i]
                for (let key in obj) {
                    if (predicate(obj)) {
                        return i
                    }
                }
            }
        }
        if (!Array.isArray(predicate) && typeof predicate == 'object') {
            for (let i = array.length - 1; i >= 0; i--) {
                if (isEqual(array[i], predicate)) {
                    return i
                }
            }
        }
        if (Array.isArray(predicate)) {
            for (let i = array.length - 1; i >= 0; i--) {
                let obj = array[i]
                for (let key in obj) {
                    if (key == predicate[0] && obj[key] == predicate[1]) {
                        return i
                    }
                }
            }
        }
        if (typeof predicate == 'string') {
            for (let i = array.length - 1; i >= 0; i--) {
                let obj = array[i]
                if (obj[predicate]) {
                    return i
                }
            }
        }
        return -1
    }
    //dropRightWhile(array,predicate)从右边开始裁剪数组，起点从predicate返回假值开始。predicate会传入3个参数（value，index，array）。
    function dropRightWhile(array, predicate) {
        let result
        if (typeof predicate == 'function') {
            for (let i = array.length - 1; i >= 0; i--) {
                let data = predicate(array[i])
                if (!data) {
                    result = array.slice(0, i + 1)
                    break
                }
            }
            return result
        }
        if (typeof predicate == 'object' && !Array.isArray(predicate)) {
            for (let i = array.length - 1; i >= 0; i--) {
                if (!isEqual(array[i], predicate)) {
                    result = array.slice(0, i + 1)
                    break
                }
            }
            return result
        }
        if (Array.isArray(predicate)) {
            for (let i = array.length - 1; i >= 0; i--) {
                let data = array[i]
                for (let key in data) {
                    if (!(key == predicate[0] && data[key] == predicate[1])) {
                        result = array.slice(0, i + 1)
                        break

                    }
                }
            }
            return result
        }
        if (typeof predicate == 'string') {
            for (let i = array.length - 1; i >= 0; i--) {
                if (!array[i][predicate]) {
                    result = array.slice(0, i + 1)
                    break
                }
            }
            return result
        }
    }
    //dropWhile(array,predicate)裁剪数组，起点从predicate返回假值开始，predicate会传入3个参数(value,index,array)
    function dropWhile(array, predicate) {
        let result
        if (typeof predicate == 'function') {
            for (let i = 0; i < array.length; i++) {
                let data = predicate(array[i])
                if (!data) {
                    result = array.slice(0, i + 1)
                    break
                }
            }
            return result
        }
        if (typeof predicate == 'object' && !Array.isArray(predicate)) {
            for (let i = 0; i < array.length; i++) {
                if (!isEqual(array[i], predicate)) {
                    result = array.slice(0, i + 1)
                    break
                }
            }
            return result
        }
        if (Array.isArray(predicate)) {
            for (let i = 0; i < array.length; i++) {
                let data = array[i]
                for (let key in data) {
                    if (!(key == predicate[0] && data[key] == predicate[1])) {
                        result = array.slice(0, i + 1)
                        break

                    }
                }
            }
            return result
        }
        if (typeof predicate == 'string') {
            for (let i = 0; i < array.length; i++) {
                if (!array[i][predicate]) {
                    result = array.slice(0, i + 1)
                    break
                }
            }
            return result
        }
    }
    //intersectionBy(arrays,iteratee)这个方法类似intersection，除了它接受一个iter调用每一个数组和值，iteratee会传入一个参数(value)
    function intersectionBy(...arrays) {
        const iteratee = arrays.pop()
        const array = arrays[0]
        const others = arrays[1]
        const result = []
        if (typeof iteratee == 'function') {
            for (let i = 0; i < array.length; i++) {
                let m = iteratee(array[i])
                for (let j = 0; j < others.length; j++) {
                    let n = iteratee(others[j])
                    if (m == n) {
                        result.push(array[i])
                    }
                }
            }
            return result
        }
        if (typeof iteratee == 'string') {
            for (let i = 0; i < array.length; i++) {
                let m = array[i][iteratee]
                for (let j = 0; j < others.length; j++) {
                    let n = others[j][iteratee]
                    if (m == n) {
                        result.push(array[i])
                    }
                }
            }
            return result
        }
    }
    //intersectionWith(...arrays)这个方法类似intersection，除了它接受一个comparator调用每一个数组和值，iteratee会传入2个参数（arrVal,othVal)
    function intersectionWith(...arrays) {
        const iteratee = arrays.pop()
        const array = arrays[0]
        const others = arrays[1]
        const result = []
        for (let i = 0; i < array.length; i++) {
            let m = array[i]
            for (let j = 0; j < others.length; j++) {
                let n = others[j]
                if (iteratee(m, n)) {
                    result.push(m)
                }
            }
        }
        return result
    }
    //pullAllBy(array,values,iteatee)这个方法类似pullAll，除了它接受一个comparator调用每一个数组元素的值，comparator会传入一个参数(value)
    function pullAllBy(array, values, iteratee) {

        if (typeof iteratee == 'string') {
            const ary = array.map(it => it[iteratee])
            const val = values.map(it => it[iteratee])
            for (let i = 0; i < array.length; i++) {
                if (val.includes(ary[i])) {
                    array.splice(i, 1)
                    ary.splice(i, 1)
                    i--
                }
            }
        }
        return array
    }
    //pullAllWith(array,values,iteratee)
    function pullAllWith(array, values, iteratee) {
        if (typeof iteratee == 'function') {
            for (let i = 0; i < array.length; i++) {
                let obj = array[i]
                for (let j = 0; j < values.length; j++) {
                    let value = values[j]
                    if (iteratee(obj, value)) {
                        array.splice(i, 1)
                        i--
                    }
                }
            }
        }
        return array
    }













    return {
        chunk: chunk,
        compact: compact,
        difference: difference,
        differenceBy: differenceBy,
        differenceWith: differenceWith,
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
        flattenDepth: flattenDepth,
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
        slice: slice,
        property: property,
        matches: matches,
        matchesProperty: matchesProperty,
        parseJson: parseJson,
        toPath: toPath,
        matches: matches,
        identity: identity,
        property: property,
        repeat: repeat,
        nth: nth,
        intersection: intersection,
        keyBy: keyBy,
        sortedIndex: sortedIndex,
        sortedIndexBy: sortedIndexBy,
        sortedIndexOf: sortedIndexOf,
        sortedLastIndex: sortedLastIndex,
        sortedLastIndexBy: sortedLastIndexBy,
        sortedLastIndexOf: sortedLastIndexOf,
        sortedUniq: sortedUniq,
        sortedUniqBy: sortedUniqBy,
        tail: tail,
        take: take,
        takeRight: takeRight,
        union: union,
        unionBy: unionBy,
        without: without,
        xor: xor,
        xorBy: xorBy,
        zipObject: zipObject,
        zipWith: zipWith,
        countBy: countBy,
        groupBy: groupBy,
        includes: includes,
        eq: eq,
        reduce: reduce,
        reduceRight: reduceRight,
        sample: sample,
        sampleSize: sampleSize,
        size: size,
        conformsTo: conformsTo,
        castArray: castArray,
        gt: gt,
        gte: gte,
        isArguments: isArguments,
        isArray: isArray,
        isArrayBuffer: isArrayBuffer,
        isArrayLike: isArrayLike,
        isArrayLikeObject: isArrayLikeObject,
        isBoolean: isBoolean,
        isDate: isDate,
        isElement: isElement,
        isEmpty: isEmpty,
        isEqual: isEqual,
        isError: isError,
        isFinite: isFinite,
        isFunction: isFunction,
        isInteger: isInteger,
        isLength: isLength,
        isMap: isMap,
        isMatch: isMatch,
        isNaN: isNaN,
        isNative: isNative,
        isNil: isNil,
        isNull: isNull,
        isNumber: isNumber,
        isObject: isObject,
        isObjectLike: isObjectLike,
        isRegExp: isRegExp,
        isSet: isSet,
        isString: isString,
        isSymbol: isSymbol,
        isUndefined: isUndefined,
        isWeakMap: isWeakMap,
        isWeakSet: isWeakSet,
        It: It,
        Ite: Ite,
        toArray: toArray,
        map: map,
        ceil: ceil,
        floor: floor,
        divide: divide,
        meanBy: meanBy,
        maxBy: maxBy,
        minBy: minBy,
        multiply: multiply,
        round: round,
        sumBy: sumBy,
        subtract: subtract,
        clamp: clamp,
        inRange: inRange,
        assignIn: assignIn,
        defaults: defaults,
        defaultsDeep: defaultsDeep,
        forIn: forIn,
        forInRight: forInRight,
        forOwn: forOwn,
        forOwnRight: forOwnRight,
        functions: functions,
        functionsIn: functionsIn,
        omit: omit,
        pick: pick,
        omitBy: omitBy,
        pickBy: pickBy,
        toPairs: toPairs,
        findIndex: findIndex,
        findLastIndex: findLastIndex,
        dropRightWhile: dropRightWhile,
        dropWhile: dropWhile,
        intersectionBy: intersectionBy,
        intersectionWith: intersectionWith,
        pullAllBy: pullAllBy,
        pullAllWith: pullAllWith,



    }
}()