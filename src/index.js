module.exports = function reverse (n) {
    let arr = [];
    let str ='';
    str = n.toString();
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return Number.parseInt(arr.reverse().join(''));
}
