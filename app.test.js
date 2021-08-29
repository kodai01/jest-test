// テスト対象のコードファイルを取り込む
const myModule = require('./app');

// const sum = myModule.sum
// const hoge = myModule.hoge
const {sum, hoge} = myModule

// test内に試験の概要を記載することができます。
test('adds 1 + 2 to equal 3', () => {

  // expect内に試験対象のメソッドを記載し、期待する結果を続けて記載します。
  expect(sum(1, 2)).toStrictEqual({a: 1, b: 2});
  expect(sum(4, 2)).toStrictEqual({a: 4, b: 2});
  expect(sum(4, -2)).toStrictEqual({a: 4, b: -2});
  expect(sum(7, -7)).toStrictEqual({a: 7, b: -7});
});

test("hoge", () => {
  expect(hoge).toEqual({a: 1, b: 2})
})
