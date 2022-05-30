import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { Plans } from "../../types/Plans"
import { BoxPlans } from '../../components/BoxPlans/BoxPlans'
import { api } from "../api"
import './PlansProvider.css'
import iconBack from '../../assets/img/arrow-icon.png'
export const PlansProviter = () => {
    const [plans, setPlans] = useState<Plans[]>([])
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        loadPlansProvider();
    }, [])


    const loadPlansProvider =async () => {
        setLoading(true)
        console.log(params.provider)
        let est:string = '' 
        if(params.estado != undefined)
            est = params.estado
        console.log(params.estado)
        let json = await api.getAllPlansProvider(String(params.provider), String(est));
        setLoading(false)
        setPlans(json)
    }

    const handleBackButton = () => {
        navigate(`/planos/`)
    }
    return (
        <div className="PlansProvider">
            <div className="pp-skew">
                <div>
                    <button onClick={handleBackButton}><img src={iconBack} className='btn-back'/></button>
                    <div className="pp-title">
                        <h2>Planos {params.provider}</h2>
                    </div>
                </div>
            </div>
            <div className='pp-container'>
                {loading && 
                    <div>CARREGANDO...</div>
                }
                <div className='pp-container-interna'>
                    {!loading && plans.length > 0 &&
                        <div className="pp-container">
                            {plans.map((item, index) => (
                                <BoxPlans data={item}/>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}