import './App.css';
import './bootstrap.css'
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
     <Header/>
     <main>
       <Container>
       <HomeScreen/>
     </Container>
     </main>
     <Footer/>
    </div>
  );
}

export default App;
