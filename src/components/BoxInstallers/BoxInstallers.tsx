import { useNavigate } from 'react-router-dom'
import { Installers } from '../../types/Installers'
import { useState, useEffect } from 'react'
import './BoxInstallers.css'
import {MD5} from '../../pages/md5'
const my_lat = -18.7
const my_lng = -51.6
type Props = {
    data: Installers
}

export const BoxInstallers = ({ data }: Props) => {
    const [price, setPrice] = useState<number>(0)
    const navigate = useNavigate()

    useEffect(() => {
        calcPrice();
    }, [])

    const handleClickSolicitar = () => {
        alert("status do Pedido alterado para\n<Esperando Instalador Aceitar>")
    }

    const calcDistInKm = () => {
        var deg2rad = function (deg: number) { return deg * (Math.PI / 180); },
        R = 6371,
        dLat = deg2rad(my_lat - data.lat),
        dLng = deg2rad(my_lng - data.lng),
        a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
            + Math.cos(deg2rad(data.lat))
            * Math.cos(deg2rad(data.lat))
            * Math.sin(dLng / 2) * Math.sin(dLng / 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return ((R * c * 1).toFixed());
    }

    const calcPrice = () => {
        let dist = calcDistInKm()
        setPrice(Number(dist) * data.price_per_km)

    }
    
    return (
        <div className='BoxInstallers'>
            <div className='bi-my_link'>
                <header>{data.name}</header>
                <hr />
                <div className='bi-info-space'>
                    <div className='bi-info-area-photo'>
                        <div className='bi-photo'><img/></div>
                    </div>
                    <div className='bi-info-area'>
                        <span className='bi-info-name'>Estrelas:</span>
                        <span className='bi-info'>{data.rating}</span>
                    </div>
                    <div className='bi-info-area'>
                        <span className='bi-info-name'>Preço:</span>
                        <span className='bi-info'>R$ {price + 150}</span>
                    </div>
                </div>
                <footer>
                    <div className='bi-btn-contratar' onClick={handleClickSolicitar}>Solicitar <br />Instalação</div>
                </footer>
            </div>
        </div>
    );
}