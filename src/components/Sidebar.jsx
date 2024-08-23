import { PencilLine } from 'phosphor-react'
import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.scss"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/104593245?v=4"/>
                <strong>Samuel Condack</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}></PencilLine>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}