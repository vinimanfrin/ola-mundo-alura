import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.png'
export default function Banner(){
    return (
        <div className={styles.banner} >
            <div className={styles.apresentacao} >
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou o Vinicius Manfrin,<br/> curso análise e desenvolvimento de sistemas na Fiap,<br/> e este é um projeto feito para aprimorar meus conhecimentos em React
                </p>
            </div>

            <div className={styles.imagem}>
                

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto minha sorrindo'
                />

            </div>
        </div>
    )
}