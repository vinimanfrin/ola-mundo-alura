import styles from './PostCard.module.css'
import { Link } from 'react-router-dom'

export default function PostCard(props){
    return (
        <Link to={`/posts/${props.post.id}`}>
            <div className={styles.post}>
                <img 
                    className={styles.capa} 
                    src={`/assets/posts/${props.post.id}/capa.png`}
                    alt='Imagem de capa do post'
                />
                <h3 className={styles.titulo}>{props.post.titulo}</h3>

                <button className={styles.botaoLer}>Ler</button>
            </div>
        </Link>
        
    )
}