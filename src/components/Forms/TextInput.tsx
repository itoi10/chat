import * as React from "react";
import TextField from "@mui/material/TextField";

interface Props {
  label: string;
  multiline: boolean;
  rows: number;
  value: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({ label, multiline, rows, value, type, onChange }) => {
  return (
    <TextField
      fullWidth={true}
      label={label}
      margin={"dense"}
      multiline={multiline}
      rows={rows}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
};

export default TextInput;
