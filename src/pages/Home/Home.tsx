import { Link } from 'react-router-dom'
import './Home.css'
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    const handleClickInstalador = () => {
        navigate(`/login/`)
    }
    const handleClickBuscahash = () => {
        navigate(`/busca/`)
    }

    return (
        <div className="Home">
            <div className="home-skew">
                <div className='home-content'>
                    <div className='home-area'>
                    <h1>Bem vindo!</h1>
                    <h3>Busque por melhores planos de internet na sua região</h3>
                    <button className='home-my_button'><Link className='home-my_link' to='/planos'>BUSCAR</Link></button>
                    </div>
                    <div className='home-footer' onClick={handleClickInstalador}> <div>Sou instalador</div></div>
                    <div className='home-footer' onClick={handleClickBuscahash}> <div>Ver status da solicitação</div></div>
                </div>
                
            </div>
        </div>
    )
}