// 生成器函数
let g = function* () {
  try {
    console.log(13)
    yield
    console.log(2)
  } catch (e) {
    console.log('内部捕获', e)
  }
}

let i = g()
i.next()

try {
  i.throw('a')
  i.throw('b')
} catch (e) {
  console.log('外部捕获', e)
}
// 内部捕获 a
// 外部捕获 b

var g2 = function* () {
  try {
    yield
  } catch (e) {
    console.log(e)
  }
}

var i2 = g2()
i2.next()
i2.throw(new Error('出错了！'))

var g3 = function* () {
  while (true) {
    try {
      yield
    } catch (e) {
      if (e !== 'a') throw e
      console.log('内部捕获', e)
    }
  }
}

var i3 = g3()
i3.next()

try {
  throw new Error('a')
  // eslint-disable-next-line no-unreachable
  throw new Error('b')
} catch (e) {
  console.log('外部捕获', e)
}
