import { Text } from "@chakra-ui/react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Text fontSize="6xl" as="h1">
        Hello User!
      </Text>
      <p>Welcome back to LongPathes!</p>
    </main>
  );
}
