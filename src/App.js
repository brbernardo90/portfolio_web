import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';

function App() {
  return (
      <div className="App">
        <Header></Header>
        <Profile></Profile>
        <Footer></Footer>
      </div>

  );
}

export default App;
