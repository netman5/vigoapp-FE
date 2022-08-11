import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Nav/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/Register" element={<h1>Register</h1>} />
          <Route path="/Login" element={<h1>Login</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
