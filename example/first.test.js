// テスト対象のコードファイルを取り込む
const myModule = require('./first');

// const sum = myModule.sum
// const hoge = myModule.hoge
const {year, pythagoras, useFor, useForEach} = myModule

test ('yearとpythagorasが定義されています。', () => {
  expect(year).toBeDefined()
  expect(pythagoras).toBeDefined()
})

// test内に試験の概要を記載することができます。
test('ピタゴラスの定理が成立しています', () => {

  // expect内に試験対象のメソッドを記載し、期待する結果を続けて記載します。
  expect(pythagoras(3, 4)).toBe(5);
  expect(pythagoras(12, 5)).toBe(13);
  expect(pythagoras(Math.sqrt(7), Math.sqrt(2))).toBeCloseTo(3);
  expect(pythagoras(Math.sin(30), Math.cos(30))).toBeCloseTo(1);
});

test("閏年の判定ができてます", () => {
  expect(year(2000)).toBe(true)
  expect(year(1000)).toBe(false)
  expect(year(2012)).toBe(true)
  expect(year(2021)).toBe(false)
  expect(year(2002)).toBe(false)
})

test("for文が使えます", () => {
  expect(useFor(8)).toBe(36)
  expect(useFor(12)).toBe(78)
  expect(useFor(100)).toBe(5050)
})

test("配列の文字の長さを取得できています", () => {
  expect(useForEach(["japan", "nippon"])).toStrictEqual([5, 6])
  expect(useForEach(["html", "css", "javascript", "react"])).toStrictEqual([4, 3, 10, 5])
  expect(useForEach([""])).toStrictEqual([0])
})
