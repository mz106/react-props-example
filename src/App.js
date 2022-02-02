import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonPage from './components/PersonPage';
import CardContainer from './components/CardContainer';
import Header from './components/Header';

function App() {
  const [person, setPerson] = useState(null);

  const data = [
    {id: 1, 
    name: "michael", 
    url: "https://images.unsplash.com/photo-1573497158096-07b29ba25d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      name: "jane",
      url: "https://images.unsplash.com/photo-1594041037257-89ac9132c39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1pY2hhZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    },
    {
      id: 3,
      name: "hilda",
      url: "https://images.unsplash.com/photo-1643779375723-a2a7639b5ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  ];
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<CardContainer data={data} person={person} setPerson={setPerson} />} />
      <Route path="/personpage" element={<PersonPage person={person} setPerson={setPerson}/>} />
      
    </Routes>
    
      
    </div>
  );
}

export default App;
