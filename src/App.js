import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/main";
import Animals from "./pages/animals"; 
import Fashion from "./pages/fashion";
import Foods from "./pages/foods";
import Nature from "./pages/nature";
import NavBar from './compononts/navbar';
export default function App() {
    return (
        <Router className="Container" >
            <NavBar />
            <div className='content'>
            <Routes >
                <Route path="/" element={<Main />} />
                <Route path="/animals" element={<Animals />} /> 
                <Route path="/fashion" element={<Fashion />} /> 
                <Route path="/foods" element={<Foods />} /> 
                <Route path="/nature" element={<Nature />} /> 

            </Routes></div>
        </Router>
    );
}
