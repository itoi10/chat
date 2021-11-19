import React from 'react';
import  defaultDataset from './data/dataset'
import './assets/styles/style.css'
import { AnswersList } from './components/index'



export interface Chats {
  // チャット本文
  text: string
  // 質問or回答
  type: string
}

export interface Answers {
  // 回答内容
  content: string
  // 次の質問のID
  nextId: string
}

export interface Dataset {
  id:       string;
  answers:  Array<Answers>;
  question: string;
}


interface Props {
}

interface State {
  // 回答コンポーネントに表示するデータ
  answers: Array<Answers>
  // チャットコンポーネントに表示するデータ
  chats: Array<string>
  // 現在の質問ID
  currentId: string,
  // 質問と回答のデータセット
  dataset: Array<Dataset>,
  // 問い合わせフォーム用モーダルの開閉
  open: boolean
}

class App extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);

    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    }
  }


  render(): React.ReactNode {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList/>
        </div>
      </section>
    );
  }
}

export default App;
