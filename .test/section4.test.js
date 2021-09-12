const section4 = require('../section/section4/section4');
const {echoDiv, reply} = section4


describe('test echoDiv function', () => {
  test('case: (14, 3)', () => {
    expect(echoDiv(14, 3)).toBe("商: 4, 余り: 2")
  });
  test('case: (30, 6)', () => {
    expect(echoDiv(30, 6)).toBe("商: 5, 余り: 0")
  });
  test('case: (2, 7)', () => {
    expect(echoDiv(2, 7)).toBe("商: 0, 余り: 2")
  });
})

describe('test reply function', () => {
  test('case: "example test"', () => {
    expect(reply("example test")).toBe("example test")
  });
  test('case: undefined', () => {
    expect(reply()).toBe("返信なし")
  });
  test('case: ""', () => {
    expect(reply("")).toBe("")
  });
})
