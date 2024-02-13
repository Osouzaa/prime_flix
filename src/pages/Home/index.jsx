import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from "react-router-dom"
import "./style.css"

// URL DA API : movie/now_playing?api_key=84665a7e4c01d63c5e8914169c7f49c2&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const filmesPorPagina = 8;

  useEffect(() => {
    async function loadFilmes() {
      setLoading(true); // Define loading como true enquanto os filmes estão sendo carregados
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "84665a7e4c01d63c5e8914169c7f49c2",
          language: "pt-BR",
          page: currentPage
        }
      })
      setFilmes(response.data.results.slice(0, filmesPorPagina))
      setLoading(false); // Define loading como false após os filmes serem carregados
    }

    loadFilmes();
  }, [currentPage])

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}> Acessar</Link>
            </article>
          )
        })}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
        <span>Página {currentPage}</span>
        <button onClick={nextPage}>Próxima</button>
      </div>
    </div>
  )
}

export default Home;
