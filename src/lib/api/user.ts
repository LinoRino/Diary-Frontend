interface User {
  id: string;
  token: string;
  name: string;
  mail: string;
  birthday: string;
}

/**
 * Request server to get JWT token then save it to localstorage
 * @param mail user's mail
 * @param password user's password
 */
export async function Login(
  mail: string,
  password: string
): Promise<User | null> {
  const init: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      mail,
      password,
    }),
  };
  const result: Response | null = await fetch(
    "https://localhost:3000/auth/login",
    init
  ).catch((err: Error) => {
    console.error(err);
    return null;
  });
  if (!result) return null;
  else {
    const userData: User = await result.json();
    sessionStorage.setItem("user", JSON.stringify(userData));
    return userData;
  }
}

export async function SignUp(mail: string) {}
