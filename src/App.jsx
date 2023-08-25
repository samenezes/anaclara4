import { useState } from 'react'
import './App.css'
//piedade de mim sandra por favor!!! eu to horrivel na sua materia 
function App() {
  //teste
  const valores = fecth('https://opentdb.com/api.php?amount=30&category=15').then(res=>{
    res.json().then(dados=>{
      mostraDados(dados);
    });
  }).catch(erro=>{
    console.log("erro")
  });
  console.log(valores)

  var resposta =` 
    <tr>
      <th>categoria</th>
      <th>resposta</th>
    </tr>`;

  return (
    <>
   <div>
     <h1>teste</h1>
   </div>
   <h1>categoria: <span className="categoria"></span></h1>
   <h1>resposta: <span className="resposta"></span></h1>
    </>

  );
}

export default App

// segunda opção de codigo
<section>
        <h1></h1>
        <div>
          <button className={styles.botao} onClick={handleButtonClick}>
            CLICK HERE!
          </button>
        </div>
        <div>
          <label className={styles.legenda}>{categoria}></label>
          <label className={styles.legenda} src={correct_answer}></label>
        </div>
      </section>

const [categoria, setCategoria] = useState('');
  const [correct_answer, setCaption] = useState('');

  function fetchCategoria() {
    fetch('https://opentdb.com/api.php?amount=30&category=15')
      .then((response) => response.json())
      .then((data) => {
        setCategoria(data.category)
      });
  }

  function fetchCaption() {
    fetch('https://opentdb.com/api.php?amount=30&category=15')
      .then((response) => response.json())
      .then((data) => {
        setCaption(data.correct_answer);
      });
  }

  function handleButtonClick() {
    fetchCategoria();
    fetchCaption();
  }