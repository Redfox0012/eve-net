import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { ProvidersList } from './pages/ProvidersList/ProvidersList'
import './App.css'
import { PlansProviter } from './pages/PlansProvider/PlansProvider'
import { FormContrato } from './pages/Contratar/FormContrato'
import { Login } from './pages/Login/Login'
import { HomeInterno } from './pages/HomeInterno/HomeInterno'
import { useParams } from 'react-router-dom'
import { ListInstallers } from './pages/Instaladores/ListInstallers'
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/planos" element={<ProvidersList />}> </Route>
          <Route path="/planos/:provider" element={<PlansProviter />} ></Route>
          <Route path="/planos/:provider/:estado" element={<PlansProviter />} ></Route>
          <Route path="/planos/:provider/contrato/:idPlan" element={<FormContrato />} ></Route>
          <Route path="/planos/:provider/contrato/:idPlan/instaladores" element={<ListInstallers/>} ></Route>
          <Route path="/busca" element={<ProvidersList />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/home-interno" element={<HomeInterno />}> </Route>
          <Route path="/verificar-status" element={<HomeInterno />}> </Route>
        </Routes>
    </div>
  )
}
//  <Route path="/planos/:slug" element={} >
export default App
