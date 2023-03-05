import styles from './page.module.css';
import SplitSentence from '@/app/features/split-sentence/split-sentence';

export default function Home() {
  return (
    <main className={styles.main}>
      <SplitSentence />
    </main>
  );
}
