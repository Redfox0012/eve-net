import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { Plans } from "../../types/Plans"
import { BoxPlans } from '../../components/BoxPlans/BoxPlans'
import { api } from "../api"
import './FormContrato.css'
import iconBack from '../../assets/img/arrow-icon.png'


export const FormContrato = () => {
    const [plan, setPlan] = useState<Plans>()
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        loadPlan();
    }, [])


    const loadPlan =async () => {
        setLoading(true)
        let json = await api.getPlanById(Number(params.idPlan));
        setLoading(false)
        if (json != undefined) {
            setPlan(json)
        }else {
            navigate(`/planos/${params.provider}`)
        }
    }

    const fchandleBackButton = () => {
        let est:string = '' 
        if(params.estado != undefined)
            est = params.estado
        navigate(`/planos/${params.provider}/${est}`)
    }

    const handleClickContratar = () => {
        console.log(`Enviando dados para ${params.provider}`)
        console.log(`Enviando hash para cliente por email`)
        alert(`Enviando dados para ${params.provider}\nEnviando codigo Hash para Cliente por email,\n{Cliente} você receberá nos proximos minutos um codigo em seu email para verificar o status do pedido`)
        navigate(`/planos/${params.provider}/contrato/${params.idPlan}/instaladores`)
    }
    
    return (
        <div className="FormContrato">
            <div className="fc-skew">
                <div>
                    <button onClick={fchandleBackButton}><img src={iconBack} className='btn-back'/></button>
                    <div className="fc-title">
                        <h2>Cadastrando Plano</h2>
                    </div>
                </div>
            </div>
            <div className='fc-container'>
                {loading && 
                    <div>CARREGANDO...</div>
                }
                <div className='pp-container-interna'>
                    {!loading && plan != undefined &&
                        <div className="fc-container">
                            <div className="fc-container-interna">
                                <fieldset>
                                    <br/>
                                    <label>Dados da Conta</label>
                                    <hr />
                                    <label>Nome Completo: </label>
                                    <input type='text' placeholder="digite seu nome aqui"></input>
                                    <label>CPF: </label>
                                    <input type='text' placeholder="ex:123.456.789-12"></input>
                                    <label>email: </label>
                                    <input type='email' placeholder="ex: meuemail@mail.com"></input>
                                    <label>numero telefone: </label>
                                    <input type='text' placeholder="ex: (ddd) 9 xxxx-xxxx "></input>
                                    
                                    <br/><br/>
                                    <label>Dados da Residencia</label>
                                    <hr />
                                    <label>cidade: </label>
                                    <input type='text' placeholder="digite a sua cidade aqui"></input>
                                    <label>bairro: </label>
                                    <input type='text' placeholder="digite o seu bairro aqui"></input>
                                    <label>numero: </label>
                                    <input type='text' placeholder="digite o num. de sua casa aqui"></input>
                                    <label>complemento: </label>
                                    <input type='text' placeholder="ex: Ap 15"></input>
                                    <label>numero: </label>
                                    <input type='text' placeholder="digite o seu bairro aqui"></input>
                                    
                                    <br/><br/>
                                    <label>Dados bancarios</label>
                                    <hr />
                                    <label>Numero do Cartão: </label>
                                    <input type='text' placeholder="ex: 1234 1234 1234 1234"></input>
                                    <label>CVV: </label>
                                    <input type='text' placeholder="cvv*"></input>
                                    <label>mês validade: </label>
                                    <input type='text' placeholder="ex: julho"></input>
                                    <label>ano: </label>
                                    <input type='text' placeholder="ex: 2028"></input>
                                </fieldset>
                            </div>
                            <div className="fc-area-confirm">
                                <div className='fc-btn-contratar' onClick={handleClickContratar}>Contratar</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}