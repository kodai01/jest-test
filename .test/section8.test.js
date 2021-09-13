// テスト対象のコードファイルを取り込む
const section8 = require("../section/section8/section8");
const {
  firstIndex,
  countArrayLength,
  extractArray,
  makeMark,
  onlyString,
  addNumber,
} = section8;

describe("test firstIndex function", () => {
  test("case: [1, 3, 10]", () => {
    expect(firstIndex([1, 3, 10])).toBe(1);
  });
  test("case: []", () => {
    expect(firstIndex([])).toBe(undefined);
  });
  test('case: [true, "a", "b", null]', () => {
    expect(firstIndex([true, "a", "b", null])).toBe(true);
  });
});

describe("test countArrayLength function", () => {
  test("case: [1, 3, 10]", () => {
    expect(countArrayLength([1, 3, 10])).toBe(
      "この配列は3個のデータを持っています"
    );
  });
  test("case: []", () => {
    expect(countArrayLength([])).toBe("この配列は空配列です");
  });
  test('case: [true, "a", "b", null]', () => {
    expect(countArrayLength([true, "a", "b", null])).toBe(
      "この配列は4個のデータを持っています"
    );
  });
  test("case: [undefined]", () => {
    expect(countArrayLength([undefined])).toBe(
      "この配列は1個のデータを持っています"
    );
  });
  test("case: 14", () => {
    expect(countArrayLength(14)).toBe("これは配列ではありません");
  });
  test('case: "example"', () => {
    expect(countArrayLength("example")).toBe("これは配列ではありません");
  });
  test("case: {}", () => {
    expect(countArrayLength({})).toBe("これは配列ではありません");
  });
});

describe("test extractArray function", () => {
  test("case: [1, 3, 10]", () => {
    expect(extractArray([1, 3, 10])).toEqual([3, 10]);
  });
  test("case: [1, 3]", () => {
    expect(extractArray([1, 3])).toEqual([3]);
  });
  test("case: []", () => {
    expect(extractArray([])).toEqual([]);
  });
  test('case: [true, "a", "b", null]', () => {
    expect(extractArray([true, "a", "b", null])).toEqual(["a", "b"]);
  });
});

describe("test makeMark function", () => {
  test('case: ("○", 4)', () => {
    expect(makeMark("○", 4)).toEqual(["○", "○", "○", "○"]);
  });
  test('case: ("*", 2)', () => {
    expect(makeMark("*", 2)).toEqual(["*", "*"]);
  });
  test('case: ("◆", 1)', () => {
    expect(makeMark("◆", 1)).toEqual(["◆"]);
  });
});

describe("test onlyString function", () => {
  test('case: [2, "日本", "東京"]', () => {
    expect(onlyString([2, "日本", "東京"])).toEqual(["日本", "東京"]);
  });
  test('case: [undefined, null, 0, "", true]', () => {
    expect(onlyString([undefined, null, 0, "", true])).toEqual([""]);
  });
  test('case: ["html", "css", "JavaScript"]', () => {
    expect(onlyString(["html", "css", "JavaScript"])).toEqual([
      "html",
      "css",
      "JavaScript",
    ]);
  });
});

describe("test addNumber function", () => {
  test('case: ["東京", "神田", "秋葉原"]', () => {
    expect(addNumber(["東京", "神田", "秋葉原"])).toEqual([
      "1: 東京",
      "2: 神田",
      "3: 秋葉原",
    ]);
  });
  test('case: ["html"]', () => {
    expect(addNumber(["html"])).toEqual(["1: html"]);
  });
  test("case: []", () => {
    expect(addNumber([])).toEqual([]);
  });
});
