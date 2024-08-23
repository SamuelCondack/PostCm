import styles from "./Avatar.module.scss"

export function Avatar({ hasBorder = true, src}){
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
    )
}