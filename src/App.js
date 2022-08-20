import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from'./components/About.jsx'
import Footer from './components/Footer.jsx'
import Product from './components/Product.jsx'
import ProductDetail from './components/ProductDetail'
import Contact from'./components/Contact.jsx'
import {Route, Redirect } from 'react-router-dom'
import './styles/App.css';

function App() {
  return (
    <>
    <Header/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/products' component={Product}/>
      <Route exact path='/products/:id' component={ProductDetail}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Redirect to='/'/>
      <Footer/>
    </>
  );
}

export default App;
