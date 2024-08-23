import Trash from "phosphor-react"
import ThumbsUp from "phosphor-react"
import styles from './Comment.module.scss'
import { Avatar } from "./Avatar"

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/104593245?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={tyles.authorAndTime}>
                            <strong>Samuel Condack</strong>
                            <time title="22 de Agosto às 20:56" dateTime="2024-08-22 20:56:10">Cerca de 10 minutos atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}