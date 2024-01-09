import { useNavigate } from "react-router-dom";
import styles from "./NaoEncontrada.module.css";
import erro404 from "assets/erro_404.png"

export default function NaoEncontrada(){
    const navegar = useNavigate();
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página nao encontrada</h1>
       
                <div className={styles.botaoContainer}>
                    <button onClick={()=> navegar(-1)}>Voltar</button>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            <div className={styles.espacoEmBranco}>

            </div>
        </>
    )
}