// テスト対象のコードファイルを取り込む
const section6 = require('../section/section6/section6');
const {sum} = section6


describe('test sum function', () => {
  test('case (4, 7)', () => {
    expect(sum(4, 7)).toBe(22)
  });
  test('case (2, -1)', () => {
    expect(sum(2, -1)).toBe(2)
  });
  test('case (3, 3)', () => {
    expect(sum(3, 3)).toBe(3)
  });
})
