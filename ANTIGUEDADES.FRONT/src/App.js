import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import QuienesSomos from './pages/QuienesSomos';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productos" component={Productos} />
          <Route path="/quienes-somos" component={QuienesSomos} />
          <Route path="/preguntas-frecuentes" component={PreguntasFrecuentes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;