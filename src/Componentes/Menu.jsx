
import esfera1 from "../assets/esfera1.png"
import esfera2 from "../assets/esfera2.png"
import esfera3 from "../assets/esfera3.png"
import esfera4 from "../assets/esfera4.png"
import { Link } from 'react-router-dom'
export function Menu() {
    return (
        <div className='menu'>
            <ul>
                <li>
                    <Link to="missao">
                    <figure>
                        <img src={esfera1} alt="Esfera 01 icone" />
                        <figcaption>Missões</figcaption>
                    </figure>
                    </Link>
                </li>

                <li>
                    <Link to="inventario">
                    <figure>
                    <img src={esfera2} alt="Esfera 02 icone" />
                    <figcaption>Inventário</figcaption>
                    </figure>
                    </Link>
                </li>

                <li>
                    <Link to="geolocalizacao">
                    <figure>
                    <img src={esfera3} alt="Esfera 03 icone" />
                    <figcaption>GeoLocalização</figcaption>
                    </figure>
                    </Link>
                </li>

                <li>
                    <Link to="camera">
                    <figure>
                    <img src={esfera4} alt="Esfera 04 icone" />
                    <figcaption>Câmera</figcaption>
                    </figure>
                    </Link>
                </li>
                </ul>

        </div>
    )
}