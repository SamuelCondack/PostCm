import {Header} from './components/Header'
import { Post } from "./Post";
import './global.css'

function App() {
  return (
    <>
      <Header/>
      <Post
        author="Samuel Condack"
        content="The megabliss mega post."
      />
    </>
  );
}

export default App;
