import { Box } from '@chakra-ui/react';
import './App.css';
import HomePage from './pages/Home/HomePage';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import SelectLoginSignup from './components/LoginSignUp/SelectLoginSignup';
import Signup from './components/LoginSignUp/Signup';
import Login from './components/LoginSignUp/Login';
import WholeSaler from './pages/Landing/WholeSaler';
import RetailerLanding from './pages/Landing/Landing Body Retailer/RetailerLanding';
import AuthProvider, { useAuth } from './components/AuthContext/AuthContext';
import AddShopImagePage from './pages/Landing/Landing Body WholeSaler/AddShopImagePage';
function App() {
  const AuthenticatedRoute=({children})=>{
    const authContext=useAuth();
    if(authContext.isAuthenticated || localStorage.getItem('email')!=null)
    return children
    return <Navigate to="/"/>
  }
  return (
    <AuthProvider>
    <Box style={{backgroundColor:"#F3EEEA",
    boxSizing: "border-box"}} height={"100vh"}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/getstarted' element={<SelectLoginSignup/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
          <Route path='/wholesaler/home' element={
            <AuthenticatedRoute>
              <WholeSaler/>
            </AuthenticatedRoute>
          } />
          <Route path='/wholesaler/home/addimage' element={
            <AuthenticatedRoute>
              <AddShopImagePage/>
            </AuthenticatedRoute>
          } />
          <Route path='/wholesaler/home/addimage' element={
            <AuthenticatedRoute>
              <AddShopImagePage/>
            </AuthenticatedRoute>
          } />
          <Route path='/retailer' element={<RetailerLanding/>} />
      </Routes>
      </BrowserRouter>
    </Box>
      </AuthProvider>
  );
}

export default App;



