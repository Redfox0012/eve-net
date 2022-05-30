import { useEffect } from 'react'
import { useState } from 'react'
import './ProvidersList.css'
import {api} from '../api'
import {Provider} from '../../types/Provider'
import { BoxProviders } from '../../components/BoxProviders/BoxProviders'
import iconLupa from '../../assets/img/lupa.png'
export const ProvidersList = () => {
    const [providers, setProviders] = useState<Provider[]>([])
    const [loading, setLoading] = useState(false)
    const [estado, setEstado] = useState<string>('')
    useEffect(() => {
        loadProviders();
    }, [])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEstado(e.target.value)
    }

    const loadProviders =async () => {
        setLoading(true)
        let json = await api.getAllProviders(estado);
        setLoading(false)
        setProviders(json)
    }

    const lpHandleClick =async () => {
        setLoading(true)
        let json = await api.getAllProviders(estado);
        setLoading(false)
        setProviders(json)
    }

    return (
        <div className="ProvidersList">
           <div className="pl-skew">
                <div>
                    <h2 className='pl-title'>Provedoras Encontradas</h2>
                </div>
            </div>
            <div className='pl-row'>
                <input type="text" onChange={handleInput} className='pl-dropdown' placeholder="Estado (ex: MG)" />
                <button className='lp-search' onClick={lpHandleClick} ><img src={iconLupa}/></button>
            </div>
            <div className='pl-container'>
                {loading && 
                    <div>CARREGANDO...</div>
                }
                <div className='pl-container-interna'>
                    {!loading && providers.length > 0 &&
                        <div>
                            {providers.map((item, index) => (
                                <BoxProviders data={item} estado={estado} />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}