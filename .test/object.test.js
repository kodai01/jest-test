// テスト対象のコードファイルを取り込む
const myModule = require('../example/object');
const {array, arrayTwoIndex, obj, baz} = myModule

test ('4つとも定義されています。', () => {
  expect(array).toBeDefined()
  expect(arrayTwoIndex).toBeDefined()
  expect(obj).toBeDefined()
  expect(baz).toBeDefined()
})

test('配列操作ができています', () => {
  expect(array).toStrictEqual(["html", "css", "javascript"])
  expect(arrayTwoIndex).toBe("javascript")
});

test("連想配列の操作ができています", () => {
  expect(obj).toStrictEqual({ foo: "hoge", bar: "hogehoge", baz: "hogehogehoge" })
  expect(baz).toBe("hogehogehoge")
})
