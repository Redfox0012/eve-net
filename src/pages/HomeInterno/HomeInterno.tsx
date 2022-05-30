import './HomeInterno.css'
import iconBack from '../../assets/img/arrow-icon.png'
import { useNavigate } from 'react-router-dom'


export const HomeInterno = () => {
    return (
        <div className="HomeInterno">
            <header>
                <div className='row full-h'>
                    <div className='col'>
                        <h1>Bem Vindo Gabriel</h1>
                        <div className='hi-area-nav'>
                            <button className='hi-icon' style={{backgroundColor: "orange"}}>home</button>
                            <button className='hi-icon'>home</button>
                            <button className='hi-icon'>home</button>
                            <button className='hi-icon'>home</button>
                        </div>
                    </div>
                    <button className='photo'><img /></button>
                </div>
            </header>
            <section>
                <div className='row full-w dados-gerais'>
                    <h2>Dados Gerais</h2>
                    <hr />
                    <div className='hi-info-area'>
                        <div>
                            <h3>Estrelas: </h3>
                        </div>
                        <div>
                            <h3>{7}</h3>
                        </div>
                    </div>
                    <div className='hi-info-area'>
                        <div>
                            <h3>Pedidos em Andamento: </h3>
                        </div>
                        <div>
                            <h3>{2}</h3>
                        </div>
                    </div>
                    <div className='hi-info-area'>
                        <div>
                            <h3>Pedidos Concluido: </h3>
                        </div>
                        <div>
                            <h3>{10}</h3>
                        </div>
                    </div>
                    <div className='hi-info-area'>
                        <div>
                            <h3>Ganho no total: </h3>
                        </div>
                        <div>
                            <h3>R$ {10000}</h3>
                        </div>
                    </div>
                    
                </div>
                <div className='row full-w pedidos-em-andamento'>
                    <h2>Lista de Pedidos em Andamento</h2>
                    <hr />
                </div>
            </section>
        </div>
    )
}