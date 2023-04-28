import { useState } from 'react'
import './App.css'
import api from "../services/api"
import logo from "./assets/logo.svg"

type cepType = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

function App() {
  const [cep, setCep] = useState('')
  const [resultado, setResultado] = useState<cepType>({bairro:"",cep:"",localidade:"",uf:"", 
   logradouro:"", complemento:""})
  
  async function buscarCep(){

    if(cep === '')
    {
      alert("Informe seu CEP!")
      return;
    }

    try {
      const response = await api.get(cep + '/json');
      setResultado(response.data)
    } catch (error) {
      alert(`Ops! Não foi possivel localizar o CEP.\nErro: ${error}`)
      setCep("")
    }
  }

  return (
    <div className="bg-black text-white pt-48">
      <div>
      <img src={logo}  className="m-auto" alt="My Happy SVG"/>
        <h1 className='text-lg'>Via<b>CEP</b></h1>
        <h3 className='text-sm mt-10'>Consulte seu CEP</h3>
      </div>
      <div className='mt-10 w-fit m-auto rounded-md border-2 border-solid  border-white'>
        <input
          type="number"
          className='bg-black py-1 ml-5 border-none border-0 border-black'
          placeholder='Digite seu CEP'
          name=""
          id=""
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        <button
          type="submit"
          className='bg-white h-30 text-black px-3 ml-1 py-2'
          onClick={() => buscarCep()}
        >
          Consultar</button>
      </div>

      {
        Object.keys(resultado.cep).length > 0 && 
        (
          <div className='mt-10 flex flex-row justify-center'>
            <div className=''>
              <p><b>CEP:</b> {resultado.cep}</p>
              <p><b>Rua:</b> {resultado.logradouro}</p>
              <p><b>Complemento:</b> {resultado.complemento}</p>
              <p><b>Bairro:</b> {resultado.bairro}</p>
              <p><b>Cidade:</b> {resultado.localidade}</p>
              <p><b>Estado / UF:</b> {resultado.uf}</p>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default App