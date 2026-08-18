// rfce - Criar estrutura padrão


function Curso({id, descricao, local, data}) {
  return (
    <div>
        <h5>DESESTRUTURAÇÃO 2.0</h5>
        <p>O Id do usuário é: {id}</p>
        <p>Descrição: {descricao}</p>
        <p>Local: {local}</p>
        <p>Data: {data}</p>
    </div>
  )
}

export default Curso


