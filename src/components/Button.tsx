import { styled } from "@stitches/react";
import React from "react";

interface Button extends React.DOMAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<Button> = (props) => {
  const ButtonStyle = styled("button", {});
  return <ButtonStyle>{props.children}</ButtonStyle>;
};
