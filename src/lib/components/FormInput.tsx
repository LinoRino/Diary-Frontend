import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  ComponentWithAs,
  InputElementProps,
} from "@chakra-ui/react";
import { HTMLInputTypeAttribute, LegacyRef, ReactNode } from "react";

interface FormInput {
  label: string;
  children?: ReactNode;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  required: boolean;
  ref: LegacyRef<HTMLInputElement>;
  pattern?: string;
}

export default function FormInput(props: FormInput) {
  return (
    <FormControl isRequired={props.required}>
      <FormLabel>{props.label}</FormLabel>
      <InputGroup>
        <Input
          ref={props.ref}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          pattern={props.pattern}
        />
        {props.children}
      </InputGroup>
    </FormControl>
  );
}
