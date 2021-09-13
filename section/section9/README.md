- まとめテスト

  [
  {userId: 1, id: 1, title: "hello world", body: "first letter."},
  {userId: 1, id: 2, title: "Dear Mr. Mike", body: "second body."},
  {userId: 30000, id: 3, title: "Special News!!", body: "third."},
  {userId: 123456, id: 4, title: "Trick Or Treat", body: "forth."},
  {userId: 123456, id: 5, title: "I'll invite you a party", body: "fifth message."},
  {userId: 123456, id: 6, title: "I want a gift for you", body: "this is a example message."},
  {userId: 123456, id: 7, title: "Happy new Year!!", body: "this is a comment."}
  ]

- 引数(array)を 1 つ用意し、userId だけを切り出した配列を戻り値とする関数を作ってください。ただし、同じ userId は 1 度だけ配列に入れ、重複がないようにしてください。
  e.g.上の配列が引数に入った場合、戻り値として[1, 30000, 123456]を返す
