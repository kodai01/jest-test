// テスト対象のコードファイルを取り込む
const section3 = require('../section/section3/section3');
const {q1, q2, q3, q4, q5, q6, q7, q8, q9, q10} = section3

test('q1は正解したか？。', () => {
  expect(q1).toBeCustomMessage(2)
});

test('q2は正解したか？', () => {
  expect(q2).toBeCustomMessage(5);
});

test('q3は正解したか？', () => {
  expect(q3).toBeCustomMessage(4)
});

test('q4は正解したか？', () => {
  expect(q4).toBeCustomMessage(1)
});

test('q5は正解したか？', () => {
  expect(q5).toBeCustomMessage(6)
});

test('q6は正解したか？。', () => {
  expect(q6).toBeCustomMessage("!")
});

test('q7は正解したか？', () => {
  expect(q7).toBeCustomMessage("%");
});

test('q8は正解したか？', () => {
  expect(q8).toBeCustomMessage(false)
});

test('q9は正解したか？', () => {
  expect(q9).toBeCustomMessage(true)
});

test('q10は正解したか？', () => {
  expect(q10).toBeCustomMessage(true)
});

expect.extend({
  toBeCustomMessage(received, argument) {
    if (received === argument) {
      return { message: () => "正解", pass: true };
    } else {
      return { message: () => "不正解です。間違えた問題をやり直してください", pass: false };
    }
  },
});
