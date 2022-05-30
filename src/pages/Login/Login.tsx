import './Login.css'
import iconBack from '../../assets/img/arrow-icon.png'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    const navigate = useNavigate()
    const handleClickResetSenha = () => {
        console.log(`Envia para tela de reset senha`)
    }

    const handleClickCriarConta= () => {
        console.log(`Envia para form de criar conta`)
    }

    const handleClickLogin= () => {
        console.log(`Autenticando`)
        navigate(`/home-interno`)
    }
    const handleBackButton = () => {
        navigate(`/`)
    }
    return (
        <div className="Login">
            <div className='login-container'>
                <div className='header-login'>
                    <div className='back-area'>
                        <button onClick={handleBackButton}><img src={iconBack} className='btn-back'/></button>
                    </div>
                    <h1>Login</h1>
                    <div className='back-area'></div>
                </div>
                <fieldset>
                    <div>
                    <label>Login: </label>
                    <input type='text' placeholder="digite seu login aqui"></input>
                    <label>Senha: </label>
                    <input type='password' placeholder="minha senha"></input>
                    </div>
                    <div>
                    <div className='options' onClick={handleClickResetSenha}> <div>Esqueci Minha Senha</div></div>
                    <div className='options' onClick={handleClickCriarConta}> <div>Criar Nova Conta</div></div>
                    </div>
                    <div>
                        <div className='login-btn' onClick={handleClickLogin}>Entrar</div>
                    </div>
                </fieldset>
            </div>
            
        </div>
    )
}