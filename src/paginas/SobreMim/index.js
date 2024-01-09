import styles from "./SobreMim.module.css"
import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/minha_foto.png";

export default function SobreMim (){
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim" >
            <h3 className={styles.subtitulo}>
                Olá , eu sou o Vinícius!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto minha sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum porro ab deleniti quaerat neque quis quod, libero dolor veritatis repellat a est quas laboriosam quos ex numquam distinctio deserunt at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam amet qui quam soluta exercitationem, a fugit enim voluptatibus ducimus dolorum sequi. Magni ea, nam sed soluta beatae aspernatur quis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum porro ab deleniti quaerat neque quis quod, libero dolor veritatis repellat a est quas laboriosam quos ex numquam distinctio deserunt at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam amet qui quam soluta exercitationem, a fugit enim voluptatibus ducimus dolorum sequi. Magni ea, nam sed soluta beatae aspernatur quis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum porro ab deleniti quaerat neque quis quod, libero dolor veritatis repellat a est quas laboriosam quos ex numquam distinctio deserunt at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam amet qui quam soluta exercitationem, a fugit enim voluptatibus ducimus dolorum sequi. Magni ea, nam sed soluta beatae aspernatur quis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum porro ab deleniti quaerat neque quis quod, libero dolor veritatis repellat a est quas laboriosam quos ex numquam distinctio deserunt at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam amet qui quam soluta exercitationem, a fugit enim voluptatibus ducimus dolorum sequi. Magni ea, nam sed soluta beatae aspernatur quis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum porro ab deleniti quaerat neque quis quod, libero dolor veritatis repellat a est quas laboriosam quos ex numquam distinctio deserunt at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam amet qui quam soluta exercitationem, a fugit enim voluptatibus ducimus dolorum sequi. Magni ea, nam sed soluta beatae aspernatur quis.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum porro ab deleniti quaerat neque quis quod, libero dolor veritatis repellat a est quas laboriosam quos ex numquam distinctio deserunt at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam amet qui quam soluta exercitationem, a fugit enim voluptatibus ducimus dolorum sequi. Magni ea, nam sed soluta beatae aspernatur quis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum porro ab deleniti quaerat neque quis quod, libero dolor veritatis repellat a est quas laboriosam quos ex numquam distinctio deserunt at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam amet qui quam soluta exercitationem, a fugit enim voluptatibus ducimus dolorum sequi. Magni ea, nam sed soluta beatae aspernatur quis.
            </p>
        </PostModelo>
    )
}