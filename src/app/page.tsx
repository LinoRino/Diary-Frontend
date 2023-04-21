import { Inter } from "next/font/google";
import styles from "./page.module.css";
import TxtField from "~/components/Input";
import { use } from "react";
import { globalCss } from "@stitches/react";
import Modal from "~/components/Modal";

const inter = Inter({ subsets: ["vietnamese"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hi, world!</h1>
      <p>Welcome back to LongPathes!</p>
      <TxtField label="Yellow" type="text" />
      <Modal>hello</Modal>
    </main>
  );
}
