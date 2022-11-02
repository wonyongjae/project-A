import { Button } from "@nextui-org/react";
import styles from '../app/page.module.css';

export default function MyButton() {
  return (
      <>
      <Button>
        <div className={styles.grid}>
          <a href="hhttps://wonyongjae.github.io/" className={styles.card}>
            <h2>Welcome to &rarr;</h2>
            <p>My GitHub!</p>
          </a>
        </div>
      </Button>
     <Button>
        <div className={styles.grid}>
          <a href="https://www.notion.so/wonyongjae/" className={styles.card}>
            <h2>And then &rarr;</h2>
            <p>My Notion!</p>
          </a>
        </div>
      </Button>;
     <Button>
        <div className={styles.grid}>
          <a href="http://localhost:3000/dashboard" className={styles.card}>
            <h2>Go to &rarr;</h2>
            <p>DashBoard!</p>
          </a>
        </div>
      </Button>;
    </>
  );
};
