import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./style.css"
import { toast } from "react-toastify"

function Favoritos() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, [])

  function excluirFilme(id) {
    let filtrosFilmes = filmes.filter((item) => {
      return (item.id !== id)
    })

    setFilmes(filtrosFilmes)
    localStorage.setItem("@primeflix", JSON.stringify(filtrosFilmes))
    toast.success("Filme removido com sucesso")
  }

  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>
      {filmes.length === 0 && <span className="span-text"> Você não possui nenhum filme salvo 😥</span>}
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Favoritos