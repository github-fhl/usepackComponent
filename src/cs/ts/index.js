function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'Jane User';
var a = greeter(user);
console.log(a);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.log(mySearch('123', '2'));
