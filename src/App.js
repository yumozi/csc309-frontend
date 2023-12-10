import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PetDetailPage from './pages/PetDetailPage';
import LoginPage from './pages/LoginPage';
import SignupSeekerPage from './pages/SignupSeekerPage';
import SignupShelterPage from './pages/SignupShelterPage';
import PageNotFound from './pages/PageNotFound';
import PetAdoptionPage from './pages/PetAdoptionPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import SearchPage from './pages/SearchPage';
import HomePage from './pages/HomePage';
import UserContext from './context/UserContext';
import ShelterDetailPage from './pages/ShelterDetailPage';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedToken) setToken(storedToken);
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    if (token) localStorage.setItem('token', token);
  }, [user, token]);

  const ProtectedRoute = ({ children }) => {
    const { token } = useContext(UserContext);

    if (!token) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="pet/:id" element={<PetDetailPage />} />
            <Route path="shelter/:id" element={<ShelterDetailPage />} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="signup-seeker" element={<SignupSeekerPage/>} />
            <Route path="signup-shelter" element={<SignupShelterPage/>} />
            <Route path="404" element={<PageNotFound/>} />
            <Route path="adoption" element={
              <ProtectedRoute>
                <PetAdoptionPage/>
              </ProtectedRoute>
            } />
            <Route path="blog" element={<BlogPage/>} />
            <Route path="blog" element={<BlogPage/>} />
            <Route path="blog/:blogId" element={<BlogDetailPage/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
