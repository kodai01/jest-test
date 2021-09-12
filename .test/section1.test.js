// テスト対象のコードファイルを取り込む
const section1 = require("../section/section1/section1");
const { q1, q2, q3, q4, q5, q6 } = section1;

test("q1は正解したか？。", () => {
  expect(q1).toBeCustomMessage("//");
});

test("q2は正解したか？", () => {
  expect(q2).toBeCustomMessage("var");
});

test("q3は正解したか？", () => {
  expect(q3).toRegCustomMessage("let country = 1;country = 2");
});

test("q4は正解したか？", () => {
  expect(q4).toRegCustomMessage(
    'const japan = {id: 1,capital: "東京"};japan.lang = "日本語"'
  );
});

test("q5は正解したか？", () => {
  expect(q5).toMultipleCustomMessage([2, 5, 6]);
});

test("q6は正解したか？", () => {
  expect(q6).toBeCustomMessage("キャメルケース");
});

expect.extend({
  toBeCustomMessage(received, argument) {
    if (received === argument) {
      return { pass: true };
    } else {
      return {
        message: () => "不正解です。間違えた問題をやり直してください",
        pass: false,
      };
    }
  },

  toRegCustomMessage(received, argument) {
    const fixedReceived = received.replace(/\r?\n/g, "").replace(/ {2,}/g, "");
    if (fixedReceived.match("var")) {
      return {
        message: () => "varって使えるかな？",
        pass: false,
      };
    } else if (fixedReceived.match(argument)) {
      return { pass: true };
    } else {
      return {
        message: () => "不正解です。タイプミスや、文法ミスはありませんか？",
        pass: false,
      };
    }
  },
  toMultipleCustomMessage(received, argument) {
    const fixedReceived = received.sort()
    if (JSON.stringify(fixedReceived) === JSON.stringify(argument)) {
      return { pass: true };
    } else {
      return {
        message: () => "不正解です。選び直してください",
        pass: false,
      };
    }
  }
});
