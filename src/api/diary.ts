interface Diary {
  title: string;
  content: string;
  date: string;
}

async function getDiary(user: any) {
  const headers: ResponseInit = {
    headers: {
      "User-ID": user.id,
    },
  };
  let result: any;
  await fetch("https://localhost:1000/diary", headers)
    .then(async (res) => {
      return await res.json().then((data) => {
        return data;
      });
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
  return result;
}
