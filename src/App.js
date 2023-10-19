import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Creaciones from './components/Creaciones';
import Favoritos from './components/Favoritos';
import Contacto from './components/Contacto';



function App() {
  return (

    // ...
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/creaciones" component={Creaciones} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/contacto" component={Contacto}/>
      </Switch>
      <Footer />
    </Router>
     
  );
}

export default App;
