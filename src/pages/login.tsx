import {
  Button,
  Card,
  IconButton,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { RefObject, useRef, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import FormInput from "~/lib/components/Form";
import { Login } from "~/lib/api/user";

/**An email & password login form using chakra ui */
export default function LoginForm() {
  const [hide, setHide] = useState(true);
  const inputEls = useRef<RefObject<HTMLInputElement>[]>([]);
  const inputElCurrent = inputEls.current;
  return (
    <Stack
      height="100vh"
      p={6}
      backgroundSize="cover"
      justifyContent="center"
      alignItems="center"
    >
      <Card p={8} width="full" maxW="2xl">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (inputElCurrent[0].current && inputElCurrent[1].current)
              await Login(
                inputElCurrent[0].current.value,
                inputElCurrent[1].current.value
              )
                .then(() => alert("done!"))
                .catch((err) => alert(err));
          }}
        >
          <Stack spacing={4}>
            <Text fontSize="3xl" fontWeight="bold">
              Welcome back!
            </Text>
            <FormInput
              ref={inputEls.current[0]}
              label="Email"
              type="email"
              name="mail"
              placeholder="xxx@example.com"
              required
            />
            <FormInput
              ref={inputEls.current[1]}
              label="Password"
              placeholder="password"
              name="password"
              type={hide ? "password" : "text"}
              required
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=\[\]{}|\;"
            >
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  size="sm"
                  aria-label={hide ? "show password" : "hide password"}
                  onClick={() => setHide(!hide)}
                >
                  {hide ? <ViewIcon /> : <ViewOffIcon />}
                </IconButton>
              </InputRightElement>
            </FormInput>
            <Button type="submit">Log in</Button>
            <Text>
              Already have an account?{" "}
              <Link href="/signup">Then click here to sign up!</Link>
            </Text>
          </Stack>
        </form>
      </Card>
    </Stack>
  );
}
