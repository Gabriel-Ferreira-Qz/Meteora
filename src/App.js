import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Componentes/Header";
import Carrossel from './Componentes/Carrossel';
import Categorias from './Componentes/Categorias';
import Produtos from './Componentes/Produtos';
import Facilidades from './Componentes/Facilidades';
import Formulario from './Componentes/Formulario';
import Footer from './Componentes/Footer';

import { Fragment, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';


const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Inter', sans-serif;
    
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb{
      background-color: #000000;
    }

    &::-webkit-scrollbar-track{
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #FFFFFF;
    }

`

function App() {

  //API dos produtos
  const [apiProdutos, setApiProdutos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProdutos = await axios.get('https://api-rest-meteora.vercel.app/data')

        setApiProdutos(responseProdutos.data.produtos)
      } catch (error) {
        console.error('Erro ao buscar os dados da API:', error);
      }
    };

    fetchData();
  }, []);

  //Filtragem da API 
  const [filtro, setFiltro] = useState('')

  const pesquisaFiltrada = apiProdutos.filter((produto) => produto.id.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()))


  return (
    <div className='App'>
      <Fragment>
        <GlobalStyles />

        <Header
          setFiltro={setFiltro}
        />
        <main>
          <Carrossel />
          <Categorias
            setFiltro={setFiltro}
          />
          <Produtos
            api={apiProdutos}
            pesquisaFiltrada={pesquisaFiltrada}
          />
          <Facilidades />
          <Formulario />
        </main>
        <Footer />

      </Fragment>
    </div>
  );
}

export default App;
