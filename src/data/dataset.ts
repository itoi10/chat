const defaultDataset = {
  init: {
    answers: [
      { content: "リンクを開く", nextId: "q1" },
      { content: "回答２", nextId: "q2" },
      { content: "回答３", nextId: "q3" },
      { content: "回答４", nextId: "q4" },
    ],
    question: "こんにちは！ご用件は何でしょうか？",
  },
  q1: {
    answers: [
      { content: "🔗　天気を知りたい", nextId: "https://tenki.jp/" },
      { content: "🔗　Googleで検索したい", nextId: "https://www.google.com/" },
      { content: "🔗　Reactについて知りたい", nextId: "https://ja.reactjs.org/" },
      { content: "最初に戻る", nextId: "init" },
    ],
    question: "リンクを開きます",
  },
  q2: {
    answers: [
      { content: "Answer 2-1 (最初に戻る)", nextId: "init" },
      { content: "Answer 2-2 (最初に戻る)", nextId: "init" },
      { content: "Answer 2-3 (最初に戻る)", nextId: "init" },
      { content: "Answer 2-4 (最初に戻る)", nextId: "init" },
    ],
    question: "質問２",
  },
  q3: {
    answers: [
      { content: "Answer 3-1 (最初に戻る)", nextId: "init" },
      { content: "Answer 3-2 (最初に戻る)", nextId: "init" },
      { content: "Answer 3-3 (最初に戻る)", nextId: "init" },
      { content: "Answer 3-4 (最初に戻る)", nextId: "init" },
    ],
    question: "質問３",
  },
  q4: {
    answers: [
      { content: "Answer 4-1 (最初に戻る)", nextId: "init" },
      { content: "Answer 4-2 (最初に戻る)", nextId: "init" },
      { content: "Answer 4-3 (最初に戻る)", nextId: "init" },
      { content: "Answer 4-4 (最初に戻る)", nextId: "init" },
    ],
    question: "質問４",
  },
};

export default defaultDataset;
