import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rodape from './components/Rodape';
import Home from './pages/Home';
import Hemocentros from './pages/Hemocentros';
import Requisitos from './pages/Requisitos';
import Agendamento from './pages/Agendamento';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hemocentros" element={<Hemocentros />} />
            <Route path="/requisitos" element={<Requisitos />} />
            <Route path="/agendamento" element={<Agendamento />} />
          </Routes>
        </main>
        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;