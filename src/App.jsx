import { Outlet } from 'react-router-dom';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <AppBar />
      <div className="mx-3">
        <Outlet />
      </div>
      <Footer />
    </div>

  );
}

export default App;
