import { styled } from "$/stitches.config";
import React from "react";

export interface Text {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "body";
}

const Txt: React.FC<Text> = (props) => {
  const selectComponent = () => {
    switch (props.variant) {
      case "body": {
      }
    }
  };
  const TextStyle = styled("p", {});
  return <TextStyle>{props.children}</TextStyle>;
};

export default Txt;
