interface User {
  id: string;
  name: string;
  mail: string;
  birthday: string;
}

export class Auth {
  constructor(url: string) {}

  async login(mail: string, password: string) {
    if (mail && password) {
      return null;
    }
    const headers: RequestInit = {
      method: "POST",
      headers: {
        Mail: mail,
        Password: password,
      },
    };
    await fetch("https://localhost:1000", headers)
      .then(async (res) => {
        await res.json().then((data: User) => {
          return data;
        });
      })
      .catch((err) => {
        console.error(err);
        return null;
      });
  }
  readonly user: User | null;
}
