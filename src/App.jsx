import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.scss";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  const posts = [
    {
      id: 1,
      author:{
        avatarUrl: 'https://avatars.githubusercontent.com/u/104593245?v=4',
        name: 'Samuel Condack',
        role: 'Web Developer'
      },
      content: [
        { type: 'paragraph', content:'Fala galeraa'},
        { type: 'paragraph', content:'Acabei de subir um projeto no meu GitHub.'},
        { type: 'link', content:'https://github.com/SamuelCondack/PostCm'},
      ],

      publishedAt: new Date('2024-08-23 14:21')
    },
    {
      id: 2,
      author:{
        avatarUrl: 'https://avatarfiles.alphacoders.com/295/thumb-1920-295288.jpg',
        name: 'John Dev',
        role: 'Front-end Developer'
      },
      content: [
        { type: 'paragraph', content:'Fala galeraa'},
        { type: 'paragraph', content:'Acabei de subir um projeto no meu portifólio.'},
        { type: 'link', content:'jane.design/doctorcare'},
      ],

      publishedAt: new Date('2024-08-21 14:21')
    },
  ]


  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
    </>
  );
}

export default App;
