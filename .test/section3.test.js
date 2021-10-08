// テスト対象のコードファイルを取り込む
const section3 = require("../section/section3/section3");
const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12 } = section3;

test("Whether your q1 answer is right.", () => {
  expect(q1).toBeCustomMessage(2);
});

test("Whether your q2 answer is right.", () => {
  expect(q2).toBeCustomMessage(5);
});

test("Whether your q3 answer is right.", () => {
  expect(q3).toBeCustomMessage(4);
});

test("Whether your q4 answer is right.", () => {
  expect(q4).toBeCustomMessage(1);
});

test("Whether your q5 answer is right.", () => {
  expect(q5).toBeCustomMessage(6);
});

test("Whether your q6 answer is right.", () => {
  expect(q6).toBeCustomMessage("!");
});

test("Whether your q7 answer is right.", () => {
  expect(q7).toBeCustomMessage("%");
});

test("Whether your q8 answer is right.", () => {
  expect(q8).toBeCustomMessage(false);
});

test("Whether your q9 answer is right.", () => {
  expect(q9).toBeCustomMessage(true);
});

test("Whether your q10 answer is right.", () => {
  expect(q10).toBeCustomMessage(true);
});

test("Whether your q11 answer is right.", () => {
  expect(q11).toBeCustomMessage(false);
});

test("Whether your q12 answer is right.", () => {
  expect(q12).toBeCustomMessage(false);
});

expect.extend({
  toBeCustomMessage(received, argument) {
    if (received === argument) {
      return { message: () => "正解", pass: true };
    } else {
      return {
        message: () => "You have a mistake. Please fix your answer.",
        pass: false,
      };
    }
  },
  toRegCustomMessage(received, argument1, argument2) {
    const fixedReceived = received
      .replace(/\r?\n/g, "")
      .replace(/ {2,}/g, "")
      .replace(/\;/g, "");
    if (fixedReceived.match("var")) {
      return {
        message: () => 'Can you use "var"?',
        pass: false,
      };
    } else if (
      fixedReceived.match(argument1) ||
      fixedReceived.match(argument2)
    ) {
      return { pass: true };
    } else {
      return {
        message: () => "You have a mistake. Please fix your answer.",
        pass: false,
      };
    }
  },
});
