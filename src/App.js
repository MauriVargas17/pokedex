import logo from './logo.svg';
import './App.css';
import PokemonCard from './components/PokemonCard'
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { PokemonItem } from './components/PokemonItem';
import { Counter } from './components/Counter';
import { Login } from './components/Login'

function App() {

  const [name, setName] = useState('')
  const user = useSelector((state) => state.auth.user)

  const changeName = () => {
    setName("Mauri")
  }
  return (
    <div>
      {/* <PokemonCard name={name}/> */}
      {/* <PokemonItem></PokemonItem>
      <Counter></Counter> */}

      {!user ? <Login></Login> : <PokemonItem></PokemonItem>}

    </div>

  );
}

export default App;
