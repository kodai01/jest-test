// テスト対象のコードファイルを取り込む
const section7 = require("../section/section7/section7");
const { character, addMP, updateHP, LookUpName } = section7;

describe('test q1', () => {
  test("whether you can make object", () => {
    expect(character).toEqual({
      id: 1,
      name: "スライム",
      hp: 50,
    });
  });
})

describe('test q2', () => {
  test("whether you can add key and value", () => {
    expect(addMP(10)).toEqual({
      id: 1,
      name: "スライム",
      hp: 50,
      mp: 10,
    });
  });
})

describe('test q3', () => {
  test("whether you can update value", () => {
    expect(updateHP(10)).toEqual({
      id: 1,
      name: "スライム",
      hp: 35,
    });
  });
})

describe('test q4', () => {
  test("whether you can extract name property", () => {
    expect(LookUpName()).toBe("スライム");
  });
})


