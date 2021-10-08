// テスト対象のコードファイルを取り込む
const section1 = require("../section/section1/section1");
const { q1, q2, q3, q4, q5, q6 } = section1;

test("Whether your q1 answer is right.", () => {
  expect(q1).toBeCustomMessage("//");
});

test("Whether your q2 answer is right.", () => {
  expect(q2).toBeCustomMessage("var");
});

test("Whether your q3 answer is right.", () => {
  expect(q3).toRegCustomMessage('let country = "Japan"country = "America"');
});

test("Whether your q4 answer is right.", () => {
  expect(q4).toRegCustomMessage(
    'const japan = {id: 1,capital: "東京"}japan.lang = "日本語"'
  );
});

test("Whether your q5 answer is right.", () => {
  expect(q5).toMultipleCustomMessage([2, 5, 6]);
});

test("Whether your q6 answer is right.", () => {
  expect(q6).toBeCustomMessage("キャメルケース");
});

expect.extend({
  toBeCustomMessage(received, argument) {
    if (received === argument) {
      return { pass: true };
    } else {
      return {
        message: () => "You have a mistake. Please fix your answer.",
        pass: false,
      };
    }
  },

  toRegCustomMessage(received, argument) {
    const fixedReceived = received
      .replace(/\r?\n/g, "")
      .replace(/ {2,}/g, "")
      .replace(/\;/g, "");
    if (fixedReceived.match("var")) {
      return {
        message: () => 'Can you use "var"?',
        pass: false,
      };
    } else if (fixedReceived.match('capital: "東京",')) {
      return {
        message: () => "Please omit ,",
        pass: false,
      };
    } else if (fixedReceived.match(argument)) {
      return { pass: true };
    } else {
      return {
        message: () => "You have a mistake. Please fix your answer.",
        pass: false,
      };
    }
  },
  toMultipleCustomMessage(received, argument) {
    const fixedReceived = received.sort();
    if (JSON.stringify(fixedReceived) === JSON.stringify(argument)) {
      return { pass: true };
    } else {
      return {
        message: () => "You have a mistake. Please fix your answer.",
        pass: false,
      };
    }
  },
});
