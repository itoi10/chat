import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextInput from "./TextInput";

interface Props {
  open: boolean;
  handleClose: () => void;
}

interface State {
  name: string;
  email: string;
  description: string;
  validation: string[];
}

class FormDialog extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
      validation: [],
    };
    // bind
    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // 入力変更
  inputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  inputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  inputDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ description: e.target.value });
  };

  // 閉じる
  closeForm = () => {
    this.props.handleClose();
    this.setState({ validation: [] });
  };

  // 決定
  submitForm = () => {
    const name = this.state.name;
    const email = this.state.email;
    const description = this.state.description;

    this.setState({ validation: [] });
    // 空白チェック
    const valid: string[] = [];
    for (const [val, col] of [
      [name, "お名前"],
      [email, "メールアドレス"],
      [description, "お問い合わせ内容"],
    ]) {
      if (val === "") {
        valid.push(`${col}を入力してください`);
      }
    }
    // メールアドレスチェック http://emailregex.com/
    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email !== "" && !pattern.test(email)) {
      valid.push("メールアドレスの形式が間違っています");
    }
    if (valid.length !== 0) {
      this.setState({ validation: valid });
      return;
    }
    // 送信
    const payload = {
      text:
        `チャットボットからお問い合わせがありました\n` +
        `・お名前\n${name}\n` +
        `・Email\n ${email}\n` +
        `・お問い合わせ内容\n${description}`,
    };

    // Slack通知。デプロイ時は無効にしておく
    if (false) {
      // SlackのWebhook URL取得手順
      // https://qiita.com/vmmhypervisor/items/18c99624a84df8b31008
      const url = "<Slack Webhook URL>";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
      }).then(() => {
        alert("送信が完了しました！");
        this.props.handleClose();
        this.setState({ name: "", email: "", description: "" });
      });
    }
    // テスト用
    else {
      alert(`入力チェックOK!\n\n` + `___メッセージ内容___\n` + `${payload.text}\n` + `_________________`);
      this.props.handleClose();
      this.setState({ name: "", email: "", description: "" });
    }
    console.log(payload);
  };

  render(): React.ReactNode {
    return (
      <Dialog
        open={this.props.open}
        // onClose={this.closeForm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <DialogContentText>※テストなので実際に送信はしません</DialogContentText>
          {this.state.validation &&
            this.state.validation.map((val, key) => (
              <DialogContentText key={key.toString()} sx={{ color: "orange" }}>
                {val}
              </DialogContentText>
            ))}
          <DialogContentText id="alert-dialog-description">
            <TextInput
              label={"お名前"}
              multiline={false}
              rows={1}
              value={this.state.name}
              type={"text"}
              onChange={this.inputName}
            />
            <TextInput
              label={"メールアドレス"}
              multiline={false}
              rows={1}
              value={this.state.email}
              type={"email"}
              onChange={this.inputEmail}
            />
            <TextInput
              label={"お問い合わせ内容"}
              multiline={true}
              rows={5}
              value={this.state.description}
              type={"text"}
              onChange={this.inputDescription}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.closeForm}>キャンセル</Button>
          <Button onClick={this.submitForm} autoFocus>
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default FormDialog;
