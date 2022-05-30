import { useNavigate } from 'react-router-dom'
import { Provider } from '../../types/Provider'
import './BoxProviders.css'

type Props = {
    data: Provider,
    estado: string
}

export const BoxProviders = ({ data, estado }: Props) => {
    const navigate = useNavigate()
    const handleClickButton = () => {
        let isp:string = data.isp.toLowerCase()
        navigate(`/planos/${isp}/${estado}`)
    }
    return (
        <div className='BoxProvider'>
            <div className='boxp-my_link' onClick={handleClickButton}>
                <p>{data.isp}</p>
            </div>
        </div>
    );
}