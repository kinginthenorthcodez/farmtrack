import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Features from './components/Features';
import Clients from './components/Clients';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Features />
      <Clients />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
