import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from "./App.module.scss";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Samuel Condack" content="The megabliss mega post." />
          <Post author="Diego Fernandes" content="Super Post!" />
        </main>
      </div>
    </>
  );
}

export default App;
