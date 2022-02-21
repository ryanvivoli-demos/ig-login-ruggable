import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <main>
        <article>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </article>
      </main>
    </div>
  );
}

export default App;
