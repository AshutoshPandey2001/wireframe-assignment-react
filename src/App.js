import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000);
  }, [])

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', height: '100%' }}>
      {isLoading ? <Loader /> :
        <HomePage />
      }
    </div>
  );
}

export default App;
