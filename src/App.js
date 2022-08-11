import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Nav/Layout';
import Register from './Components/authenication/Register';
import Login from './Components/authenication/Login';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          {isLoggedIn ? (
            <>
              <Route path="/" element={<h1>Home</h1>} />
            </>
          ) : <Route path="/" element={<Login />} />}

        </Routes>
      </Layout>
    </div>
  );
}

export default App;
