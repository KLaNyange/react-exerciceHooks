import { useState } from 'react';
import './App.css';
import Article from './components/article/Article';
import Personnage from './components/personnage/Personnage';

function App() {
  const [hide, setHide] = useState(" ")
  const [show, setShow] = useState("hide")
  const [moi, setMoi] = useState([
    { nom: "Lambrette", prenom: "Nyange", age: 25, commune: "Koekelberg" }
  ])
  const rename = () => {
    setMoi([{ nom: "Rodriguez", prenom: "Adrian", age: 25, commune: "LLN" }])
    setHide("hide")
    setShow(" ")
  }
  const rename2 = () => {
    setMoi([{ nom: "Lambrette", prenom: "Nyange", age: 25, commune: "Koekelberg" }])
    setHide(" ")
    setShow("hide")
  }
  const [object, setOjbject] = useState([
    { nom: "table", prix: 20 },
    { nom: "dvd", prix: 4 },
    { nom: "tasse", prix: 67 },
    { nom: "doudou", prix: 1 },
    { nom: "pull", prix: 33 }
  ])

  return (
    <div className="App">
      <div className="title">
        <h1>Exercice Hooks</h1>
      </div>
      <div className="contenu">
        {moi.map((moi, index) => (<Personnage key={index} moi={moi} rename={rename} rename2={rename2} hide={hide} show={show} />))}
        <div>
          {object.map((object, index) => (<Article key={index} object={object} />))}
        </div>
      </div>
    </div>
  );
}

export default App;
