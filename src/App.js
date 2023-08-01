import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Componentes/Header";
import Carrossel from './Componentes/Carrossel';
import Categorias from './Componentes/Categorias';
import Produtos from './Componentes/Produtos';
import Facilidades from './Componentes/Facilidades';
import Formulario from './Componentes/Formulario';
import Footer from './Componentes/Footer';
import Loading from './Componentes/Loading';

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
  const [apiContent, setApiContent] = useState({ produtos: [], categorias: [] })

  const produtosECategorias = [...apiContent.produtos, ...apiContent.categorias]

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const resposta = await axios.get('https://api-rest-meteora.vercel.app/data')
  
          setApiContent(resposta.data)
          setLoading(false)
        } catch (error) {
          console.error('Erro ao buscar os dados da API:', error);
        } 
      };
  
      fetchData();
    }, 3000)
  }, []);

  //Filtragem da API 

  const [filtro, setFiltro] = useState('')

  const pesquisaFiltrada = apiContent.produtos.filter((produto) => produto.id.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()))

  //Loading

  const [loading, setLoading] = useState(true)

  return (
    <div className='App'>
      <Fragment>
        <GlobalStyles />
        <Header
          setFiltro={setFiltro}
        />

        <main>
          <Carrossel />
          {produtosECategorias.length > 0 && (
            <>
              <Categorias
                setFiltro={setFiltro}
                apiCategorias={apiContent.categorias}
              />
              <Produtos
                apiProdutos={apiContent.produtos}
                pesquisaFiltrada={pesquisaFiltrada}
                valorDaBusca={filtro}
              />
            </>
          )}
          {loading && <Loading />}
          <Facilidades />
          <Formulario />
        </main>

        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
