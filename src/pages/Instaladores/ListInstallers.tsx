import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { BoxInstallers } from '../../components/BoxInstallers/BoxInstallers'
import { api } from "../api"
import './ListInstallers.css'
import iconBack from '../../assets/img/arrow-icon.png'
import { Installers } from "../../types/Installers"

export const ListInstallers = () => {
    const [plans, setPlans] = useState<Installers[]>([])
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        loadInstallers();
    }, [])


    const loadInstallers=async () => {
        setLoading(true)
        let json = await api.getAllInstallers(Number(params.idPlan));
        setLoading(false)
        setPlans(json)
    }

    const handleBackButton = () => {
        navigate(`/planos/`)
    }
    return (
        <div className="Installers">
            <div className="ins-skew">
                <div>
                    <button onClick={handleBackButton}><img src={iconBack} className='btn-back'/></button>
                    <div className="ins-title">
                        <h2>Escolha o Instalador</h2>
                    </div>
                </div>
            </div>
            <div className='ins-container'>
                {loading && 
                    <div>CARREGANDO...</div>
                }
                <div className='ins-container-interna'>
                    {!loading && plans.length > 0 &&
                        <div className="ins-container">
                            {plans.map((item, index) => (
                                <BoxInstallers data={item}/>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}