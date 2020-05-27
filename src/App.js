import React from 'react';
import logo from './logo.svg';
import CadeirasList from './pages/CadeirasList'
import ProfsList from './pages/ProfsList'
import ProfInfo from './pages/ProfInfo'
import CadeiraInfo from './pages/CadeiraInfo'
import './css/App.scss';
import Navbar from './components/Navbar'

function App(props) {
  return (
    <div className="App">
      <Navbar />
      {(props.page === 'CADEIRA_INFO') ?
        <CadeiraInfo />
      : (props.page === 'CADEIRAS_LIST') ?
        <CadeirasList />
      : (props.page === 'PROFS_LIST') ?
        <ProfsList />
      : (props.page === 'PROF_INFO') &&
        <ProfInfo />
      }
    </div>
  );
}

export default App;
