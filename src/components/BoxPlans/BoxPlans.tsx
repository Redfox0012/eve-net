import { useNavigate } from 'react-router-dom'
import { Plans } from '../../types/Plans'
import './BoxPlans.css'
import {MD5} from '../../pages/md5'

type Props = {
    data: Plans
}

export const BoxPlans = ({ data }: Props) => {
    const navigate = useNavigate()
    const handleClickContratar = () => {
        let id:number = data.id
        let isp:string = data.isp.toLowerCase()
        navigate(`/planos/${isp}/contrato/${id}`)
    }
    return (
        <div className='BoxPlan'>
            <div className='boxplan-my_link'>
                <header>plano</header>
                <hr />
                <div className='bp-info-space'>
                <div className='bp-info-area'>
                    <span className='bp-info-name'>sobre:</span>
                    <span className='bp-info'>{data.description}</span>
                </div>
                <div className='bp-info-area'>
                    <span className='bp-info-name'>Vel. download:</span>
                    <span className='bp-info'>{data.download_speed} Mbps</span>
                </div>
                <div className='bp-info-area'>
                    <span className='bp-info-name'>Vel. upload:</span>
                    <span className='bp-info'>{data.upload_speed} Mbps</span>
                </div>
                <div className='bp-info-area'>
                    <span className='bp-info-name'>tipo:</span>
                    <span className='bp-info'>{data.type_of_internet}</span>
                </div>
                { data.data_capacity != undefined &&
                <div className='bp-info-area'>
                    <span className='bp-info-name'>Capacidade:</span>
                    <span className='bp-info'>{data.data_capacity}</span>
                </div>
                }
                <div className='bp-info-area'>
                    <span className='bp-info-name'>Preço:</span>
                    <span className='bp-info'>{data.price_per_month} R$/Mês</span>
                </div>
                </div>
                <footer>
                    <div className='bp-btn-contratar' onClick={handleClickContratar}>Contratar</div>
                </footer>
            </div>
        </div>
    );
}