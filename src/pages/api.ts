import axios from "axios"
import {Plans} from '../types/Plans'
import { Provider } from "../types/Provider"
import { useNavigate } from "react-router-dom"
const BASE = 'https://app-challenge-api.herokuapp.com'
const ESTADO = 'SP'

export const api = {
    getAllPlans:async (estado: string) => {
        let response = await axios.get(`${BASE}/plans?state=${estado}`)
        return response.data
    },
    getAllProviders:async (estado: string) => {
        let response = await axios.get(`${BASE}/plans?state=${estado}`)
        let names: string[] = []
        response.data.forEach(function(plan:Plans, i:number) {
            names.push(plan.isp)
        })
        let uniqueProviders = [...new Set(names)]
        console.log(typeof uniqueProviders)
        let providers: Provider[] = []
        uniqueProviders.forEach(function(plan:string, i:number) {
            let prov:Provider = {
                isp: plan
            }
            providers.push(prov)
        })
        return providers
    },
    getAllPlansProvider:async (isp: string, estado: string) => {
        let response = await axios.get(`${BASE}/plans?state=${estado}`)
        let plansProvider: Plans[] = []
        response.data.forEach(function(plan:Plans, i:number) {
            if(plan.isp.toLocaleLowerCase() == isp.toLocaleLowerCase()) {
                plansProvider.push(plan)
            }
        })
        return plansProvider
    },
    getPlanById:async (id: number) => {
        let response = await axios.get(`${BASE}/plans/${id}`)
        return response.data
    },
    getAllInstallers:async (id: number) => {
        let response = await axios.get(`${BASE}/installers?plan=${id}`)
        return response.data
    }
}