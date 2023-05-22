// ·exec：一个用来搜索一个匹配的RegEx方法。
// ·match：一个用来匹配一个字符串的String方法。
// ·replace：一个用来完成替换操作的String方法。
// ·search：一个用来测试在某给定字符串里是否存在着一个匹配的String方法。
// ·split：一个用来把一个字符串拆分为多个子串的String方法
// ·test：一个用来测试在某给定字符串里是否存在着一个匹配的RegEx方法。
// const regex1 = RegExp('foo*', 'g')
// const str1 = 'table football, foosball'
// let array1 = regex1.exec(str1)
// console.log(array1)
//
//
//
// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.'
// const regex2 = /[A-Z]/g
// const found = paragraph.match(regex2)
// console.log(found)
//
// const paragraph1 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
//
// // any character that is not a word character or whitespace
// const regex3 = /[^\w\s]/g
//
// console.log(paragraph1.search(regex3))

const str = 'u__1234567456'
const regex = new RegExp('^u__\\d*$')
console.log(regex.test(str))
