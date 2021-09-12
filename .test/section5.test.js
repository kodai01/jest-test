// テスト対象のコードファイルを取り込む
const section5 = require('../section/section5/section5');
const {score} = section5

describe('test score function', () => {  
  test('case: 100', () => {
    expect(score(100)).toBe("合格")
  });
  test('case: 99', () => {
    expect(score(99)).toBe("合格")
  });
  test('case: 80', () => {
    expect(score(80)).toBe("合格")
  });
  test('case: 79', () => {
    expect(score(79)).toBe("追試")
  });
  test('case: 60', () => {
    expect(score(60)).toBe("追試")
  });
  test('case: 59', () => {
    expect(score(59)).toBe("不合格")
  });
  test('case: 0', () => {
    expect(score(0)).toBe("不合格")
  });
  test('case string argument', () => {
    expect(score("文字列だよ")).toBe("0以上100未満の数字を入れてください")
  });
  test('case over 100', () => {
    expect(score(101)).toBe("0以上100未満の数字を入れてください")
  });
  test('case under 0', () => {
    expect(score(-1)).toBe("0以上100未満の数字を入れてください")
  });
  test('case undefined', () => {
    expect(score()).toBe("後日受験")
  });
})
