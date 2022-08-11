import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Nav/Layout';
import Register from './Components/authenication/Register';
import Login from './Components/authenication/Login';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
