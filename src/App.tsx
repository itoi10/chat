import React from 'react';
import  defaultDataset from './data/dataset'
import './assets/styles/style.css'
import { AnswersList, Chats } from './components/index'


export interface ChatsContent {
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
  answers:  Answers[];
  question: string;
}


interface Props {
}

interface State {
  // 回答コンポーネントに表示するデータ
  answers: Array<Answers>
  // チャットコンポーネントに表示するデータ
  chats: Array<ChatsContent>
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

  initAnswer = () => {
    const initDataset = this.state.dataset[0]
    const initAnswers = initDataset.answers
    this.setState({
      answers: initAnswers
    })
  }

  initChats = () => {
    const initDataset = this.state.dataset[0]
    const chat:ChatsContent = {
      text: initDataset.question,
      type: 'question'
    }
    const chats = this.state.chats
    chats.push(chat)
    this.setState({
      chats: chats
    })
  }

  // 初期化後の処理
  componentDidMount() {
    this.initChats()
    this.initAnswer()
  }

  render(): React.ReactNode {
    return (
      <section className="c-section">
        <p style={{textAlign: 'center', marginTop: '2rem'}}>Test Deploy</p>
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers}/>
        </div>
      </section>
    );
  }
}

export default App;
