// √x^2 + y ^ 2 の値を返す関数を作る
// 関数と宣言：https://jsprimer.net/basic/function-declaration/
const pythagoras = (x, y) => {
  return Math.sqrt(x * x + y * y)
}

// yearという名前の関数を作り、引数に入れた数字の年が閏年か判定する。
// 閏年 -> true 閏年じゃない -> false
// 条件分岐：https://jsprimer.net/basic/condition/
const year = (number) => {
  if (number % 400 === 0) {
    return true
  } else if (number % 100 === 0) {
    return false
  } else if (number % 4 === 0) {
    return true
  } else {
    return false
  }
}

// ループと反復処理 https://jsprimer.net/basic/loop/

const useFor = (number) => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i
  }
  return sum
}

const useForEach = (values) => {
  let newArray = []
  values.forEach(value => {
    newArray.push(value.length)
  });
  return newArray
}

module.exports = {pythagoras, year, useFor, useForEach}
