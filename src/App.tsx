import { useState } from 'react';

import logo from './logo.svg';

import styles from './App.module.scss';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src={logo}
          className={styles.logo}
          alt="logo"
        />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            className={styles.btn}
            onClick={() =>
              setCount(prevState => prevState + 1)
            }
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR
          updates.
        </p>
        <p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={styles.link}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}
