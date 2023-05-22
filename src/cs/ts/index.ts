function greeter (person: string) {
  return 'Hello, ' + person
}

let user = 'Jane User'
let a = greeter(user)
console.log(a)

// 函数
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub)
  return result > -1
}
console.log(mySearch('123', '2'))
