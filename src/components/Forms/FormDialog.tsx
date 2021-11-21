import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Props {
  open: boolean;
  handleClose: () => void;
}

interface State {}

class FormDialog extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"お問い合わせ画面モーダル。ここにフォームなどを追加予定"}
            <br />
            {"[はい]か[いいえ]を押すと閉じます"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose}>はい</Button>
          <Button onClick={this.props.handleClose} autoFocus>
            いいえ
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default FormDialog;
