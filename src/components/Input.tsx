import { styled } from "$/stitches.config";
import React from "react";

export interface Input extends React.DOMAttributes<HTMLInputElement> {
  /**
   * select type of TxtField
   */
  type?: "text" | "url" | "password" | "email";
  label: string;
  placeholder?: string;
  id?: string;
}

const TxtField: React.FC<Input> = (props) => {
  const LabelStyled = styled("label", {
    "& span": {
      marginRight: 6,
    },
    "& input": {
      padding: 6,
      borderRadius: 4,
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "black",
    },
  });
  return (
    <LabelStyled htmlFor={props.id ? props.id : undefined}>
      <span>{props.label}</span>
      <input {...props} />
    </LabelStyled>
  );
};

export default TxtField;
