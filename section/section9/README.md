- まとめテスト

  [
  {userId: 1, id: 1, title: "hello world", body: "first letter."},
  {userId: 1, id: 2, title: "Dear Mr. Mike", body: "second body."},
  {userId: 30000, id: 3, title: "Special News!!", body: "third."},
  {userId: 123456, id: 4, title: "Trick Or Treat", body: "forth."},
  {userId: 123456, id: 5, title: "I'll invite you a party", body: "fifth message."},
  {userId: 123456, id: 6, title: "I want a gift for you", body: "this is a example message."},
  {userId: 30000, id: 7, title: "Happy new Year!!", body: "this is a comment."}
  ]

- q1: 引数(array)を 1 つ用意し、userId だけを切り出した配列を戻り値とする関数を作ってください。ただし、同じ userId は 1 度だけ配列に入れ、重複がないようにしてください。
  e.g.上の配列が引数に入った場合、戻り値として[1, 30000, 123456]を返す

- 難しい問題なのでヒントを示しますが、取り組みから 15 分程度はヒントなしで考えてみて、解決できなそうであればヒントを見てください。それでもわからない場合は、ヒントを見たり各自で調べたりしたことから何を実行したかを記して質問してください。また、ヒントはあくまで一例なので、ヒント通りに解かなければならないということはありません。

<details><summary>Hint1(方針が全くわからない人向け)</summary>userIdの情報を取得するためには、配列の中のオブジェクト(連想配列)を取得した上で、そのuserIdというkeyを取る必要があります。配列の中の各要素を取り出す方法は何種類かありますが、データの加工に向いている方法はどれか考えてみてください。まずは、重複を許してuserIdを配列に入れることを目標にしてみてください。</details>
<details><summary>Hint2(途中までできた人向け)</summary>重複を許して配列に入れることができたら、その状態で重複しているuserIdを取り除けば良いですよね。もしくは、新しく配列を作っておいて、重複がないように値を追加するという方法もあります。</details>
- q2: 最初のようなデータ構造から、userId と、その userId の人が書いた title と body と id をまとめた配列に組み直してください。
<details><summary>Hint1(方針が全くわからない人向け)</summary>想定する挙動から判断して、前問の戻り値は使えないか考えてみてください。</details>
<details><summary>Hint2(途中までできた人向け)</summary>Hint1で紹介した配列の各要素と、引数の配列内のオブジェクトのuserIdを比較して同じuserIdであるものを抽出してみましょう。</details>
