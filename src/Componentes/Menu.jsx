import missao from '../assets/missao_tratado.png';
import mapa from '../assets/mapa_tratado.png';
import bau from '../assets/bau_tratado.png';
import camera from '../assets/camera_tratado.png';
import { Link } from 'react-router-dom'
export function Menu() {
    return (
        <div className='menu'>
            <ul>
                <li>
                    <Link to="missao">
                    <figure>
                        <img src={missao} alt="Missões photo" />
                        <figcaption>Missões</figcaption>
                    </figure>
                    </Link>
                </li>

                <li>
                    <Link to="inventario">
                    <figure>
                    <img src={bau} alt="Inventário photo" />
                    <figcaption>Inventário</figcaption>
                    </figure>
                    </Link>
                </li>

                <li>
                    <Link to="geolocalizacao">
                    <figure>
                    <img src={mapa} alt="GeoLocalização photo" />
                    <figcaption>GeoLocalização</figcaption>
                    </figure>
                    </Link>
                </li>

                <li>
                    <Link to="camera">
                    <figure>
                    <img src={camera} alt="Câmera" />
                    <figcaption>Câmera</figcaption>
                    </figure>
                    </Link>
                </li>
                </ul>

        </div>
    )
}