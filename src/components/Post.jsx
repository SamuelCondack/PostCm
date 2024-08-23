import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.scss"

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src="https://avatars.githubusercontent.com/u/104593245?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Samuel Condack</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="22 de Agosto às 20:34" dateTime="2024-08-22 20:34:46">Publicado há 2 minutos</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa</p>
                <p>Acabei de subir um projeto no meu portifólio.</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#nopvoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"/>

                <footer className={styles.postFooter}>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}