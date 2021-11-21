import React from "react";
import defaultDataset from "./data/dataset";
import "./assets/styles/style.scss";
import { AnswersList, Chats, FormDialog } from "./components/index";

interface Props {}

export interface ChatsContent {
  // チャット本文
  text: string;
  // 質問or回答
  type: "question" | "answer";
}

export interface AnswersContent {
  // 回答内容
  content: string;
  // 次の質問のID
  nextId: string;
}

export interface Dataset {
  answers: AnswersContent[];
  question: string;
}

interface State {
  // 回答コンポーネントに表示するデータ
  answers: AnswersContent[];
  // チャットコンポーネントに表示するデータ
  chats: ChatsContent[];
  // 現在の質問ID
  currentId: string;
  // 質問と回答のデータセット
  dataset: { [key: string]: Dataset };
  // 問い合わせフォーム用モーダルの開閉
  open: boolean;
  // 回答ボタン無効
  disabledAnswer: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
      disabledAnswer: false,
    };
    // コールバック関数, bindすると再作成されずパフォーマンス的に良い
    this.selectAnswer = this.selectAnswer.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  // 次の質問を表示
  displayNextQuestion = (nextQuestionId: string) => {
    const chats = this.state.chats;
    // チャットに質問追加
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: "question",
    });
    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    });
  };

  // 回答選択, propsで各選択肢のonClickに渡される
  selectAnswer = (answer: AnswersContent) => {
    const selectedAnswer = answer.content;
    const nextQuestionId = answer.nextId;

    // チャット表示に選択した回答を追加
    const chats = this.state.chats;
    chats.push({
      text: selectedAnswer,
      type: "answer",
    });
    this.setState({
      chats: chats,
    });

    switch (true) {
      // お問い合わせモーダルを開く
      case nextQuestionId === "contact":
        this.handleClickOpen();
        break;

      // nextIdがhttp〜ならリンクを開く
      case /^https?:*/.test(nextQuestionId):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.click();
        break;

      // 一般的な回答処理
      default:
        // 少し待ってから次の質問を表示。その間回答ボタンは無効化する
        this.setState({ disabledAnswer: true });
        setTimeout(() => {
          this.displayNextQuestion(nextQuestionId);
          this.setState({ disabledAnswer: false });
        }, 500);
    }
  };

  // 初期化後の処理
  componentDidMount() {
    // 最初の質問表示
    this.displayNextQuestion(this.state.currentId);
  }

  // コンポーネント更新直後の処理
  componentDidUpdate(prevProps: Props, prevState: State) {
    // 一番下にスクロール, #scroll-areaはChatsの属性
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTo({
        top: scrollArea.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(): React.ReactNode {
    return (
      <section className="c-section">
        <p style={{ textAlign: "center", marginTop: "2rem" }}>Test Deploy</p>
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} disabled={this.state.disabledAnswer} select={this.selectAnswer} />
          <FormDialog open={this.state.open} handleClose={this.handleClose} />
        </div>
      </section>
    );
  }
}

export default App;
