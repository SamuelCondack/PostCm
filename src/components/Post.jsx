import { format, formatDistanceToNow } from 'date-fns'
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.scss"
import { useState } from 'react'

export function Post({ author, publishedAt, content }){    
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event){
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event){
        setNewCommentText(event.target.value)      
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0

    const publishedDateFormatted = format(publishedAt, "LLLL',' d 'at' HH:mm'h'")
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
    })

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
               {content.map(line => {
                if(line.type === "paragraph"){
                    return <p key={line.content}>{line.content}</p>
                } else if (line.type === "link"){
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>feedback</strong>

                <textarea 
                required
                value={newCommentText}
                placeholder="Leave a comment"
                onChange={handleNewCommentChange}
                />

                <footer className={styles.postFooter}>
                    <button 
                    disabled={isNewCommentEmpty} type="submit"
                    >
                    Publish
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment 
                     key={comment} 
                     content={comment}
                     onDeleteComment={deleteComment}
                    />
                    )
                })}
            </div>
        </article>
    )
}