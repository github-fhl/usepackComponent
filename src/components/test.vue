<template>
  <div class="test">
    <form name="forma">
      <input type="hidden" value="123" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'test',
  created () {
    this.cs()
    function inherit (p) {
      if (p == null) throw TypeError()// p是一个对象，但不能是null
      if (Object.create) { return Object.create(p) }// 直接使用它
      var t = typeof p// 否则进行进一步检测
      if (t !== 'object' && t !== 'function') throw TypeError()
      function Func () {};// 定义一个空构造函数
      Func.prototype = p// 将其原型属性设置为p
      return new Func()// 使用f()创建p的继承对象
    }
    // 第一种方法继承 类和原型
    function range (from, to) { // 使用inherit()函数来创建对象，这个对象继承自在下面定义的原型对象
      // 原型对象作为函数的一个属性存储，并定义所有"范围对象"所共享的方法(行为)
      let r = inherit(range.methods)// 存储新的"范围对象"的起始位置和结束位置(状态)
      // 这两个属性是不可继承的，每个对象都拥有唯一的属性
      r.from = from
      r.to = to// 返回这个新创建的对象
      return r
    }
    // 原型对象定义方法，这些方法为每个范围对象所继承
    range.methods = {// 如果x在范围内，则返回true；否则返回false
      // 这个方法可以比较数字范围，也可以比较字符串和日期范围
      includes: function (x) { return this.from <= x && x <= this.to }, // 对于范围内的每个整数都调用一次f
      // 这个方法只可用做数字范围
      foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++)f(x)
      }, // 返回表示这个范围的字符串
      toString: function () { return '(' + this.from + '...' + this.to + ')' }
    }// 这里是使用"范围对象"的一些例子
    let r = range(1, 3)// 创建一个范围对象
    r.includes(2)// =＞true:2在这个范围内
    r.foreach(console.log)// 输出1 2 3
    console.log(r)// 输出(1...3)

    // 第二种方法继承 类和构造函数
    function Range (from, to) { // 存储"范围对象"的起始位置和结束位置(状态)
      // 这两个属性是不可继承的，每个对象都拥有唯一的属性
      this.from = from
      this.to = to
    }
    // 所有的"范围对象"都继承自这个对象
    // 注意，属性的名字必须是"prototype"
    Range.prototype = {// 如果x在范围内，则返回true；否则返回false
      // 这个方法可以比较数字范围，也可以比较字符串和日期范围
      includes: function (x) { return this.from <= x && x <= this.to }, // 对于范围内的每个整数都调用一次f
      // 这个方法只可用于数字范围
      foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++)f(x)
      }, // 返回表示这个范围的字符串
      toString: function () { return '(' + this.from + '...' + this.to + ')' }
    }// 这里是使用"范围对象"的一些例子
    var rTwo = range(1, 3)// 创建一个范围对象
    rTwo.includes(2)// =＞true:2在这个范围内
    rTwo.foreach(console.log)// 输出1 2 3

    var p = {// x和y是普通的可读写的数据属性
      x: 1.0,
      y: 1.0, // r是可读写的存取器属性，它有getter和setter.
      // 函数体结束后不要忘记带上逗号
      get r () { return Math.sqrt(this.x * this.x + this.y * this.y) },
      set r (newvalue) {
        var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y)
        var ratio = newvalue / oldvalue
        this.x *= ratio
        this.y *= ratio
      }, // theta是只读存取器属性，它只有getter方法
      get theta () { return Math.atan2(this.y, this.x) }
    }
    let q = inherit(p)
    q.x = 2
    q.y = 2
    console.log(q)
    let o = {}
    Object.defineProperty(o, 'x', {value: 1,
      writable: true,
      enumerable: false,
      configurable: true})
    console.log(o.x)
    console.log(Object.keys(o))
    Object.defineProperty(o, 'x', {writable: false})// 试图更改这个属性的值
    console.log(o.x)
    Object.defineProperty(o, 'x', {value: 2})
    console.log(o.x)
    Object.defineProperty(o, 'x', {get: function () { return 0 }})
    console.log(o.x)
    /*
*把p中的可枚举属性复制到o中，并返回o
*如果o和p中含有同名属性，则覆盖o中的属性
*这个函数并不处理getter和setter以及复制属性
*/
    function extend (o, p) {
      for (let prop in p) { // 遍历p中的所有属性
        o[prop] = p[prop]// 将属性添加至o中
      }
      return o
    }/*
*将p中的可枚举属性复制至o中，并返回o
*如果o和p中有同名的属性，o中的属性将不受影响
*这个函数并不处理getter和setter以及复制属性
*/
    function merge (o, p) {
      for (let prop in p) { // 遍历p中的所有属性
        if (o.hasOwnProperty[prop]) continue// 过滤掉已经在o中存在的属性
        o[prop] = p[prop]// 将属性添加至o中
      }
      return o
    }/*
*如果o中的属性在p中没有同名属性，则从o中删除这个属性
*返回o
*/
    function restrict (o, p) {
      for (let prop in o) { // 遍历o中的所有属性
        if (!(prop in p)) delete o[prop]// 如果在p中不存在，则删除之
      }
      return o
    }/*
*如果o中的属性在p中存在同名属性，则从o中删除这个属性
*返回o
*/
    function subtract (o, p) {
      for (let prop in p) { // 遍历p中的所有属性
        delete o[prop]// 从o中删除(删除一个不存在的属性不会报错)
      }
      return o
    }/*
*返回一个新对象，这个对象同时拥有o的属性和p的属性
*如果o和p中有重名属性，使用p中的属性值
*/
    function union (o, p) { return extend(extend({}, o), p) }/*
*返回一个新对象，这个对象拥有同时在o和p中出现的属性
*很像求o和p的交集，但p中属性的值被忽略
*/
    function intersection (o, p) { return restrict(extend({}, o), p) }/*
*返回一个数组，这个数组包含的是o中可枚举的自有属性的名字
*/
    function keys (o) {
      if (typeof o !== 'object') throw TypeError()// 参数必须是对象
      var result = []// 将要返回的数组
      for (let prop in o) { // 遍历所有可枚举的属性
        if (o.hasOwnProperty(prop)) { result.push(prop) }// 将属性名添加至数组中
      }
      return result// 返回这个数组
    }
    merge()
    subtract()
    union()
    keys(null)
    intersection()
    let table = new Array(10)
    for (var i = 0; i < table.length; i++) {
      table[i] = new Array(10)
    }
    for (let row = 0; row < table.length; row++) {
      for (let col = 0; col < table[row].length; col++) {
        table[row][col] = row * col
      }
    }
    console.log(table)
    let objects = [{x: 1, a: 1}, {y: 2, a: 2}, {z: 3, a: 3}]
    let leftunion = objects.reduce(union)// {x:1,y:2,z:3,a:1}
    console.log(leftunion)

    //
    var reduce = Array.prototype.reduce
      ? function (a, f, initial) { // 如果reduce()方法存在的话
        if (arguments.length > 2) { return a.reduce(f, initial) } else return a.reduce(f)// 否则没有初始值
      }
      : function (a, f, initial) { // 这个算法来自ES5规范
        let i = 0; let len = a.length; let accumulator// 以特定的初始值开始，否则第一个值取自a
        if (arguments.length > 2)accumulator = initial
        else { // 找到数组中第一个已定义的索引
          if (len === 0) throw TypeError()
          while (i < len) {
            if (i in a) {
              accumulator = a[i++]
              break
            } else i++
          }
          if (i === len) throw TypeError()
        }
        // 对于数组中剩下的元素依次调用f()
        while (i < len) {
          if (i in a) {
            // accumulator = f.call(undefined, accumulator, a[i], i, a)
          } i++
        }
        return accumulator
      }
    // 使用定义的map()和reduce()函数，计算平均值和标准差的代码看起来像这样：
    var data = [1, 1, 3, 5, 5]
    var sum = function (x, y) { return x + y }
    var mean = reduce(data, sum) / data.length
    console.log(mean)
    //
    function compose (f, g) {
      return function () { // 需要给f()传入一个参数，所以使用f()的call()方法
        // 需要给g()传入很多参数，所以使用g()的apply()方法
        return f.call(this, g.apply(this, arguments))
      }
    }
    let squareTwo = function (x) { return x * x }
    let sumTwo = function (x, y) { return x + y }
    var squareofsum = compose(squareTwo, sumTwo)
    squareofsum(2, 3)// =＞25

    // 鸭式辩型
    function quacks (o/*, ... */) {
      for (var i = 1; i < arguments.length; i++) { // 遍历o之后的所有参数
        var arg = arguments[i]
        switch (typeof arg) { // 如果参数是：
          case 'string':// string:直接用名字做检查
            if (typeof o[arg] !== 'function') return false
            continue
          case 'function':// function:检查函数的原型对象上的方法
            // 如果实参是函数,则使用它的原型
            arg = arg.prototype// 进入下一个case
            continue
          case 'object':// object:检查匹配的方法
            for (var m in arg) { // 遍历对象的每个属性
              if (typeof arg[m] !== 'function') continue// 跳过不是方法的属性
              if (typeof o[m] !== 'function') return false
            }
            break
        }
      }
      // 如果程序能执行到这里，说明o实现了所有的方法
      return true
    }
    quacks(r)
    this.handleSet()
  },
  methods: {
    cs () {
      // 这是一个简单的Node HTTP服务器，能处理当前目录的文件，
      // 并能实现两种特殊的URL用于测试
      // 用http://localhost:8000 或 http://127.0.0.1:8000 连接这个服务器
      // 首先，加载所有要用的模块
      var http = require('http') // HTTP服务器API
      var fs = require('fs') // 用于处理本地文件
      var server = new http.Server() // 创建新的HTTP服务器
      server.listen(8083) // 在端口8000上运行它
      // Node使用"on()"方法注册事件处理程序，
      // 当服务器得到新请求，则运行函数处理它
      server.on('request', function (request, response) {
        // 解析请求的URL
        var url = require('url').parse(request.url)
        // 特殊URL会让服务器在发送响应前先等待
        // 此处用于模拟缓慢的网络连接
        if (url.pathname === '/test/delay') {
        // 使用查询字符串来获取延迟时长，或者2000毫秒
          var delay = parseInt(url.query) || 2000
          // 设置响应状态码和头
          response.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'})
          // 立即开始编写响应主体
          response.write('Sleeping for ' + delay + ' milliseconds...')
          // 在之后调用的另一个函数中完成响应
          setTimeout(function () {
            response.write('done.')
            response.end()
          }, delay)
        } else if (url.pathname === '/test/mirror') { // 若请求是"/test/mirror"，则原文返回它
        // 当需要看到这个请求头和主体时，会很有用
        // 响应状态和头
          response.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'})
          // 用请求的内容开始编写响应主体
          response.write(request.method + ' ' + request.url +
                       ' HTTP/' + request.httpVersion + '\r\n')
          // 所有的请求头
          for (var h in request.headers) {
            response.write(h + ': ' + request.headers[h] + '\r\n')
          }
          response.write('\r\n') // 使用额外的空白行来结束头
          // 在这些事件处理程序函数中完成响应：
          // 当请求主体的数据块完成时，把其写入响应中
          request.on('data', function (chunk) { response.write(chunk) })
          // 当请求结束时，响应也完成
          request.on('end', function (chunk) { response.end() })
        } else { // 否则，处理来自本地目录的文件
        // 获取本地文件名，基于其扩展名推测内容类型
          var filename = url.pathname.substring(1) // 去掉前导"/"
          var type
          switch (filename.substring(filename.lastIndexOf('.') + 1)) { // 扩展名
            case 'html':
            case 'htm': type = 'text/html; charset=UTF-8'; break
            case 'js': type = 'application/javascript; charset=UTF-8'; break
            case 'css': type = 'text/css; charset=UTF-8'; break
            case 'txt' : type = 'text/plain; charset=UTF-8'; break
            case 'manifest':type = 'text/cache-manifest; charset=UTF-8'; break
            default: type = 'application/octet-stream'; break
          }
          // 异步读取文件，并将内容作为单独的数据块传给回调函数
          // 对于确实很大的文件，使用流API fs.createReadStream()更好
          fs.readFile(filename, function (err, content) {
            if (err) { // 如果由于某些原因无法读取该文件
              response.writeHead(404, { // 发送404未找到状态码
                'Content-Type': 'text/plain; charset=UTF-8'})
              response.write(err.message) // 简单的错误消息主体
              response.end() // 完成
            } else { // 否则，若读取文件成功
              response.writeHead(200, // 设置状态码和MIME类型
                {'Content-Type': type})
              response.write(content)// 把文件内容作为响应主体发送
              response.end() // 完成
            }
          })
        }
      })
    },
    open () {
      console.log(111)
      document.forma.submit()
    },
    handleNineNineOne () {
      // 声明全局变量Set，使用一个函数的返回值给它赋值
      // 函数结束时紧跟的一对圆括号说明这个函数定义后立即执行
      // 它的返回值将赋值给Set，而不是将这个函数赋值给Set
      // 注意它是一个函数表达式，不是一条语句，因此函数"invocation"并没有创建全局变量
      var Set = (function invocation () {
        function Set () { // 这个构造函数是局部变量
          this.values = {} // 这个对象的属性用来保存这个集合
          this.n = 0 // 集合中值的个数
          this.add.apply(this, arguments) // 将所有的参数都添加至集合中
        }
        // 给Set.prototype定义实例方法
        // 这里省略了详细代码
        Set.prototype.contains = function (value) {
        // 注意我们调用了v2s()，而不是调用带有笨重的前缀的set._v2s()
          return this.values.hasOwnProperty(v2s(value))
        }
        Set.prototype.size = function () { return this.n }
        Set.prototype.add = function () { /* ... */ }
        Set.prototype.remove = function () { /* ... */ }
        Set.prototype.foreach = function (f, context) { /* ... */ }
        // 这里是上面的方法用到的一些辅助函数和变量
        // 它们不属于模块的共有API，但它们都隐藏在这个函数作用域内
        // 因此我们不必将它们定义为Set的属性或使用下划线作为其前缀
        function v2s (val) { /* ... */ }
        // function objectId (o) { /* ... */ }
        // var nextId = 1
        // 这个模块的共有API是Set()构造函数
        // 我们需要把这个函数从私有命名空间中导出来
        // 以便在外部也可以使用它，在这种情况下，我们通过返回这个构造函数来导出它
        // 它变成第一行代码所指的表达式的值
        return Set
      }()) // 定义函数后立即执行
      Set()
    },
    handleNineSix () {
      /*
 * 给Object.prototype定义properties()方法，
 * 这个方法返回一个表示调用它的对象上的属性名列表的对象
 * （如果不带参数调用它，就表示该对象的所有属性）
 * 返回的对象定义了4个有用的方法：toString()、 descriptors()、hide()和 show()
 */
      (function namespace () { // 将所有逻辑闭包在一个私有函数作用域中
        // 这个函数成为所有对象的方法
        function properties () {
          var names // 属性名组成的数组// 所有的自有属性 //名字组成的数组// 参数列表本身就是名字
          if (arguments.length === 0) { names = Object.getOwnPropertyNames(this) } else if (arguments.length === 1 && Array.isArray(arguments[0])) { names = arguments[0] } else { names = Array.prototype.splice.call(arguments, 0) }
          // 返回一个新的Properties对象，用以表示属性名字
          return new Properties(this, names)
        }
        properties()
        // 将它设置为Object.prototpye的新的不可枚举的属性
        // 这是从私有函数作用域导出的唯一一个值
        // Object.defineProperty(Object.prototype, 'properties', {
        //   value: properties(),
        //   enumerable: false,
        //   writable: true,
        //   configurable: true
        // })
        // 这个构造函数是由上面的properties()函数所调用的
        // Properties类表示一个对象的属性集合
        function Properties (o, names) {
          this.o = o // 属性所属的对象
          this.names = names // 属性的名字
        }
        // 将代表这些属性的对象设置为不可枚举的
        Properties.prototype.hide = function () {
          let o = this.o; let hidden = { enumerable: false }
          this.names.forEach(function (n) {
            if (o.hasOwnProperty(n)) { Object.defineProperty(o, n, hidden) }
          })
          return this
        }
        // 将这些属性设置为只读的和不可配置的
        Properties.prototype.freeze = function () {
          let o = this.o; let frozen = { writable: false, configurable: false }
          this.names.forEach(function (n) {
            if (o.hasOwnProperty(n)) { Object.defineProperty(o, n, frozen) }
          })
          return this
        }
        // 返回一个对象，这个对象是名字到属性描述符的映射表
        // 使用它来复制属性，连同属性特性一起复制
        // Object.defineProperties(dest, src.properties().descriptors());
        Properties.prototype.descriptors = function () {
          var o = this.o; let desc = {}
          this.names.forEach(function (n) {
            if (!o.hasOwnProperty(n)) return
            desc[n] = Object.getOwnPropertyDescriptor(o, n)
          })
          return desc
        }
        // 返回一个格式化良好的属性列表
        // 列表中包含名字、值和属性特性，使用"permanent"表示不可配置
        // 使用"readonly"表示不可写，使用"hidden"表示不可枚举
        // 普通的可枚举、可写和可配置属性不包含特性列表
        Properties.prototype.toString = function () {
          var o = this.o // 在下面嵌套的函数中使用
          var lines = this.names.map(nameToString)
          return '{\n ' + lines.join(',\n ') + '\n}'
          function nameToString (n) {
            var s = ''; let desc = Object.getOwnPropertyDescriptor(o, n)
            if (!desc) return 'nonexistent ' + n + ': undefined'
            if (!desc.configurable) s += 'permanent '
            if ((desc.get && !desc.set) || !desc.writable) s += 'readonly '
            if (!desc.enumerable) s += 'hidden '
            if (desc.get || desc.set) s += 'accessor ' + n
            else {
              s += n + ': ' + ((typeof desc.value === 'function') ? 'function'
                : desc.value)
            }
            return s
          }
        }
        // 最后，将原型对象中的实例方法设置为不可枚举的
        // 这里用到了刚定义的方法
        Properties.prototype.properties().hide()
      }()) // 立即执行这个匿名函数
    },
    handleBelong () {
      function Range (from, to) {
        // 如果from大于to
        if (from > to) throw new Error('Range: from must be <= to')
        // 定义存取器方法以维持不变
        function getFrom () { return from }
        function getTo () { return to }
        function setFrom (f) { // 设置from的值时，不允许from大于to
          if (f <= to) from = f
          else throw new Error('Range: from must be <= to')
        }
        function setTo (t) { // 设置to的值时，不允许to小于from
          if (t >= from) to = t
          else throw new Error('Range: to must be >= from')
        }
        // 将使用取值器的属性设置为可枚举的、不可配置的
        Object.defineProperties(this, {
          from: { get: getFrom, set: setFrom, enumerable: true, configurable: false },
          to: { get: getTo, set: setTo, enumerable: true, configurable: false }
        })
      }
      // 和前面的例子相比，原型对象没有做任何修改
      // 实例方法可以像读取普通的属性一样读取from和to
      function hideProps (o) {
        var props = (arguments.length === 1) // 如果只有一个参数
          ? Object.getOwnPropertyNames(o) // 使用所有的属性
          : Array.prototype.splice.call(arguments, 1) // 否则传入了指定名字的属性
        props.forEach(function (n) { // 将它们设置为不可枚举的
        // 忽略不可配置的属性
          if (!Object.getOwnPropertyDescriptor(o, n).configurable) return
          Object.defineProperty(o, n, { enumerable: false })
        })
        return o
      }
      Range.prototype = hideProps({
        constructor: Range,
        includes: function (x) { return this.from <= x && x <= this.to },
        foreach: function (f) { for (var x = Math.ceil(this.from); x <= this.to; x++) f(x) },
        toString: function () { return '(' + this.from + '...' + this.to + ')' }
      })
    },
    handleTool () {
      // 将o的指定名字（或所有）的属性设置为不可写的和不可配置的
      function freezeProps (o) {
        var props = (arguments.length === 1) // 如果只有一个参数
          ? Object.getOwnPropertyNames(o) // 使用所有的属性
          : Array.prototype.splice.call(arguments, 1) // 否则传入了指定名字的属性
        props.forEach(function (n) { // 将它们都设置为只读的和不可变的
        // 忽略不可配置的属性
          if (!Object.getOwnPropertyDescriptor(o, n).configurable) return
          Object.defineProperty(o, n, { writable: false, configurable: false })
        })
        return o // 所以我们可以继续使用它
      }
      // 将o的指定名字（或所有）的属性设置为不可枚举的和可配置的
      function hideProps (o) {
        var props = (arguments.length === 1) // 如果只有一个参数
          ? Object.getOwnPropertyNames(o) // 使用所有的属性
          : Array.prototype.splice.call(arguments, 1) // 否则传入了指定名字的属性
        props.forEach(function (n) { // 将它们设置为不可枚举的
        // 忽略不可配置的属性
          if (!Object.getOwnPropertyDescriptor(o, n).configurable) return
          Object.defineProperty(o, n, { enumerable: false })
        })
        return o
      }
      hideProps()
      freezeProps()
    },
    handleRead () {
      // 这个方法可以使用new调用，也可以省略new，它可以用做构造函数也可以用做工厂函数
      function Range (from, to) {
        // 这些是对from和to只读属性的描述符
        var props = {
          from: {value: from, enumerable: true, writable: false, configurable: false},
          to: {value: to, enumerable: true, writable: false, configurable: false}
        }
        if (this instanceof Range) { Object.defineProperties(this, props) } else {
          return Object.create(Range.prototype, // 创建并返回这个新Range对象，
            props)
        } // 属性由props指定
      }
      // 如果用同样的方法给Range.prototype对象添加属性
      // 那么我们需要给这些属性设置它们的特性
      // 因为我们无法识别出它们的可枚举性、可写性或可配置性，这些属性特性默认都是false
      Object.defineProperties(Range.prototype, {
        includes: {
          value: function (x) { return this.from <= x && x <= this.to }
        },
        foreach: {
          value: function (f) {
            for (var x = Math.ceil(this.from); x <= this.to; x++) f(x)
          }
        },
        toString: {
          value: function () { return '(' + this.from + '...' + this.to + ')' }
        }
      })
    },
    handleSeting () {
      // 将代码包装在一个匿名函数中，这样定义的变量就在这个函数作用域内
      (function () {
        // 定义一个不可枚举的属性objectId，它可以被所有对象继承
        // 当读取这个属性时调用getter函数
        // 它没有定义setter，因此它是只读的
        // 它是不可配置的，因此它是不能删除的
        // Object.defineProperty(Object.prototype, 'objectId', {
        //   get: idGetter, // 取值器
        //   enumerable: false, // 不可枚举的
        //   configurable: false // 不可删除的
        // })
        // 当读取objectId的时候直接调用这个getter函数
        function idGetter () { // getter函数返回该id
          if (!(idprop in this)) { // 如果对象中不存在id
            if (!Object.isExtensible(this)) { throw Error("Can't define id for nonextensible objects") }
            Object.defineProperty(this, idprop, { // 给它一个值
              value: nextid++, // 就是这个值
              writable: false, // 只读的
              enumerable: false, // 不可枚举的
              configurable: false // 不可删除的
            })
          }
          return this[idprop] // 返回已有的或新的值
        };
        idGetter()// 用到了这些变量，这些都属于私有变量
        var idprop = '|**objectId**|' // 假设这个属性没有用到
        var nextid = 1 // 给它设置初始值
      }()) // 立即执行这个包装函数
    },
    handleChouxiang () {
      // 这个函数可以用做任何抽象方法，非常方便
      function abstractmethod () { throw new Error('abstract method') }
      /*
 * AbstractSet类定义了一个抽象方法：contains()
 */
      function AbstractSet () { throw new Error("Can't instantiate abstract classes") }
      AbstractSet.prototype.contains = abstractmethod
      /*
 * NotSet是AbstractSet的一个非抽象子类
 * 所有不在其他集合中的成员都在这个集合中
 * 因为它是在其他集合是不可写的条件下定义的
 * 同时由于它的成员是无限个，因此它是不可枚举的
 * 我们只能用它来检测元素成员的归属情况
 * 注意，我们使用了Function.prototype.extend()方法来定义这个子类
 */
      var NotSet = AbstractSet.extend(
        function NotSet (set) { this.set = set },
        {
          contains: function (x) { return !this.set.contains(x) },
          toString: function (x) { return '~' + this.set.toString() },
          equals: function (that) {
            return that instanceof NotSet && this.set.equals(that.set)
          }
        }
      )
      /*
 * AbstractEnumerableSet 是AbstractSet的一个抽象子类
 * 它定义了抽象方法size()和foreach()
 * 然后实现了非抽象方法isEmpty()、toArray()、to[Locale]String()和equals()方法
 * 子类实现了contains()、size()和foreach()，这三个方法可以很轻易地调用这5个非抽象方法
 */
      var AbstractEnumerableSet = AbstractSet.extend(
        function () { throw new Error("Can't instantiate abstract classes") },
        {
          size: abstractmethod,
          foreach: abstractmethod,
          isEmpty: function () { return this.size() === 0 },
          toString: function () {
            var s = '{'; let i = 0
            this.foreach(function (v) {
              if (i++ > 0) s += ', '
              s += v
            })
            return s + '}'
          },
          toLocaleString: function () {
            var s = '{'; let i = 0
            this.foreach(function (v) {
              if (i++ > 0) s += ', '
              if (v == null) s += v // null和undefined
              else s += v.toLocaleString() // 其他的情况
            })
            return s + '}'
          },
          toArray: function () {
            var a = []
            this.foreach(function (v) { a.push(v) })
            return a
          },
          equals: function (that) {
            if (!(that instanceof AbstractEnumerableSet)) return false
            // 如果它们的大小不同，则它们不相等
            if (this.size() !== that.size()) return false
            // 检查每一个元素是否也在that中
            try {
              this.foreach(function (v) { if (!that.contains(v)) return false })
              return true // 所有的元素都匹配: 集合相等
            } catch (x) {
              if (x === false) return false // 集合不相等
              throw x // 发生了其他的异常：重新抛出异常
            }
          }
        })
      /*
 * SingletonSet是AbstractEnumerableSet的非抽象子类
 * singleton集合是只读的，它只包含一个成员
 */
      var SingletonSet = AbstractEnumerableSet.extend(
        function SingletonSet (member) { this.member = member },
        {
          contains: function (x) { return x === this.member },
          size: function () { return 1 },
          foreach: function (f, ctx) { f.call(ctx, this.member) }
        }
      )
      SingletonSet()
      /*
 * AbstractWritableSet是AbstractEnumerableSet的抽象子类
 * 它定义了抽象方法add()和remove()
 * 然后实现了非抽象方法union()、intersection()和 difference()
 */
      var AbstractWritableSet = AbstractEnumerableSet.extend(
        function () { throw new Error("Can't instantiate abstract classes") },
        {
          add: abstractmethod,
          remove: abstractmethod,
          union: function (that) {
            var self = this
            that.foreach(function (v) { self.add(v) })
            return this
          },
          intersection: function (that) {
            var self = this
            this.foreach(function (v) { if (!that.contains(v)) self.remove(v) })
            return this
          },
          difference: function (that) {
            var self = this
            that.foreach(function (v) { self.remove(v) })
            return this
          }
        })
      /*
 * ArraySet是AbstractWritableSet的非抽象子类
 * 它以数组的形式表示集合中的元素
 * 对于它的contains()方法使用了数组的线性查找
 * 因为contains()方法的算法复杂度是O(n)而不是O(1)
 * 它非常适用于相对小型的集合，注意，这里的实现用到了ES5的数组方法indexOf()和forEach()
 */
      var ArraySet = AbstractWritableSet.extend(
        function ArraySet () {
          this.values = []
          this.add.apply(this, arguments)
        },
        {
          contains: function (v) { return this.values.indexOf(v) !== -1 },
          size: function () { return this.values.length },
          foreach: function (f, c) { this.values.forEach(f, c) },
          add: function () {
            for (var i = 0; i < arguments.length; i++) {
              var arg = arguments[i]
              if (!this.contains(arg)) this.values.push(arg)
            }
            return this
          },
          remove: function () {
            for (var i = 0; i < arguments.length; i++) {
              var p = this.values.indexOf(arguments[i])
              if (p === -1) continue
              this.values.splice(p, 1)
            }
            return this
          }
        }
      )
      function StringSet () {
        this.set = Object.create(null) // 创建一个不包含原型的对象
        this.n = 0
        this.add.apply(this, arguments)
      }
      // 注意，使用Object.create()可以继承父类的原型
      // 而且可以定义单独调用的方法，因为我们没有指定属性的可写性、可枚举性和可配置性
      // 因此这些属性特性的默认值都是false
      // 只读方法让这个类难于子类化（被继承）
      StringSet.prototype = Object.create(AbstractWritableSet.prototype, {
        constructor: { value: StringSet },
        contains: { value: function (x) { return x in this.set } },
        size: { value: function (x) { return this.n } },
        foreach: { value: function (f, c) { Object.keys(this.set).forEach(f, c) } },
        add: {
          value: function () {
            for (var i = 0; i < arguments.length; i++) {
              if (!(arguments[i] in this.set)) {
                this.set[arguments[i]] = true
                this.n++
              }
            }
            return this
          }
        },
        remove: {
          value: function () {
            for (var i = 0; i < arguments.length; i++) {
              if (arguments[i] in this.set) {
                delete this.set[arguments[i]]
                this.n--
              }
            }
            return this
          }
        }
      })
      ArraySet()
    },
    handleInherit () {
      function inherit (p) {
        if (p == null) throw TypeError()// p是一个对象，但不能是null
        if (Object.create) { return Object.create(p) }// 直接使用它
        var t = typeof p// 否则进行进一步检测
        if (t !== 'object' && t !== 'function') throw TypeError()
        function Func () {};// 定义一个空构造函数
        Func.prototype = p// 将其原型属性设置为p
        return new Func()// 使用f()创建p的继承对象
      }
      function extend (o, p) {
        for (let prop in p) { // 遍历p中的所有属性
          o[prop] = p[prop]// 将属性添加至o中
        }
        return o
      }
      extend()
      let B = {}
      let A = {}
      B.prototype = inherit(A.prototype) // 子类派生自父类
      B.prototype.constructor = B // 重载继承来的constructor属性
      /*
 * 实现一个FilteredSet，它包装某个指定的"集合"对象，
 * 并对传入add()方法的值应用了某种指定的过滤器
 * "范围"类中其他所有的核心方法延续到包装后的实例中
 */
      var FilteredSet = Set.extend(
        function FilteredSet (set, filter) { // 构造函数
          this.set = set
          this.filter = filter
        },
        { // 实例方法
          add: function () {
            // 如果已有过滤器，直接使用它
            if (this.filter) {
              for (var i = 0; i < arguments.length; i++) {
                var v = arguments[i]
                if (!this.filter(v)) {
                  throw new Error('FilteredSet: value ' + v +
                                     ' rejected by filter')
                }
              }
            }
            // 调用set中的add()方法
            this.set.add.apply(this.set, arguments)
            return this
          },
          // 剩下的方法都保持不变
          remove: function () {
            this.set.remove.apply(this.set, arguments)
            return this
          },
          contains: function (v) { return this.set.contains(v) },
          size: function () { return this.set.size() },
          foreach: function (f, c) { this.set.foreach(f, c) }
        })
      FilteredSet()
    },
    handleSet () {
      function Set () { // 这是一个构造函数
        this.values = {}// 集合数据保存在对象的属性里
        this.n = 0// 集合中值的个数
        this.add.apply(this, arguments)// 把所有参数都添加进这个集合
      }
      // 将每个参数都添加至集合中
      Set.prototype.add = function () {
        for (var i = 0; i < arguments.length; i++) { // 遍历每个参数
          var val = arguments[i]// 待添加到集合中的值
          var str = Set._v2s(val)// 把它转换为字符串
          if (!this.values.hasOwnProperty(str)) { // 如果不在集合中
            this.values[str] = val// 将字符串和值对应起来
            this.n++// 集合中值的计数加一
          }
        }
        return this// 支持链式方法调用
      }// 从集合删除元素，这些元素由参数指定
      Set.prototype.remove = function () {
        for (var i = 0; i < arguments.length; i++) { // 遍历每个参数
          var str = Set._v2s(arguments[i])// 将字符串和值对应起来
          if (this.values.hasOwnProperty(str)) { // 如果它在集合中
            delete this.values[str]// 删除它
            this.n--// 集合中值的计数减一
          }
        }
        return this// 支持链式方法调用
      }// 如果集合包含这个值，则返回true；否则，返回false
      Set.prototype.contains = function (value) {
        return this.values.hasOwnProperty(Set._v2s(value))
      }// 返回集合的大小
      Set.prototype.size = function () {
        return this.n
      }// 遍历集合中的所有元素，在指定的上下文中调用f
      Set.prototype.foreach = function (f, context) { // 遍历集合中的所有字符串
        for (var s in this.values) {
          if (this.values.hasOwnProperty(s)) { f.call(context, this.values[s]) }// 忽略继承的属性
        }// 调用f，传入value
      }// 这是一个内部函数，用以将任意JavaScript值和唯一的字符串对应起来
      Set._v2s = function (val) {
        switch (val) {
          case undefined:return 'u'// 特殊的原始值
          case null:return 'n'// 值只有一个字母
          case true:return 't'// 代码
          case false:return 'f'
          default:switch (typeof val) {
            case 'number':return '#' + val// 数字都带有#前缀
            case 'string':return '"' + val// 字符串都带有"前缀
            default:return '@' + objectId(val)// Objs and funcs get@
          }
        }
        // 对任意对象来说，都会返回一个字符串
        // 针对不同的对象，这个函数会返回不同的字符串
        // 对于同一个对象的多次调用，总是返回相同的字符串
        // 为了做到这一点，它给o创建了一个属性，在ES5中，这个属性是不可枚举且是只读的
        function objectId (o) {
          var prop = '|**objectid**|'// 私有属性，用以存放id
          if (!o.hasOwnProperty(prop)) { o[prop] = Set._v2s.next++ }// 将下一个值赋给它
          return o[prop]// 返回这个id
        }
      }
      Set._v2s.next = 100// 设置初始id的值
      let setTwo = new Set(1, 2, 3)
      console.log(setTwo)
    },
    handleTenOneFour () {

    }
  }
}
</script>

<style lang="scss" scoped></style>
