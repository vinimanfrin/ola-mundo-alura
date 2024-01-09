import styles from './Post.module.css'


export default function Post(props){
    return (
        <div className={styles.post}>
            <img 
                className={styles.capa} 
                src={`/assets/posts/${props.post.id}/capa.png`}
                alt='Imagem de capa do post'
            />
            <h3 className={styles.titulo}>{props.post.titulo}</h3>

            <button className={styles.botaoLer}>Ler</button>
        </div>
    )
}