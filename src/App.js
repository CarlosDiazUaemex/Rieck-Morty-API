
import imagen1 from '../src/assets/rm.png'
import { useState } from 'react';
import './App.css';
import Characters from './components/Characters'

function App() {
  const [characters, setCharacters]=useState(null)
  const reqApi= async()=>{
      const api=await fetch("https://rickandmortyapi.com/api/character")
      //console.log(api);
      const characterApi=await api.json();
      //console.log(characters);
      setCharacters(characterApi.results);
      //console.log(characters);
  }
  return (
    
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick and Morty</h1>
        {characters ?(
        <Characters characters={characters}></Characters>
        ):(
          <>
        <img src={imagen1} className='img-home' alt="logo"/>
        <button className='btn-search' onClick={reqApi}>
          buscar Personajes
          </button>
          </>
        )
      }
      </header>
    </div>
  );
}

export default App;
