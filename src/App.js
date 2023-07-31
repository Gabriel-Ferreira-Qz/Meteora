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

    &::-webkit-scrollbar-thumb {
      background-color: #000000;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #FFFFFF;
    }
  }
`

function App() {

  //API
  const [apiProdutos, setApiProdutos] = useState([])

  const [apiCategorias, setApiCategorias] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await axios.get('https://api-rest-meteora.vercel.app/data')

        setApiProdutos(resposta.data.produtos)
        setApiCategorias(resposta.data.categorias)
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
            apiCategorias={apiCategorias}
          />
          <Produtos
            apiProdutos={apiProdutos}
            pesquisaFiltrada={pesquisaFiltrada}
            valorDaBusca={filtro}
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
