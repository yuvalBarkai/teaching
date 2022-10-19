import { Navigate, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import First from './Components/First/First';
import NotFound from './Components/NotFound/NotFound';
import Second from './Components/Second/Second';
import Third from './Components/Third/Third';

function App() {
    return (
        <div className="App">
            <h1>Routing is easy</h1>
            <BrowserRouter>
                <NavigationLinks />
                <Routing />
            </BrowserRouter>
        </div>
    );
}




function NavigationLinks() {
    return (
        <nav>
            <NavLink to="/first" className="NavLink">First</NavLink>&nbsp;|&nbsp;
            <NavLink to="/second" className="NavLink">Second</NavLink>&nbsp;|&nbsp;
            <NavLink to="/third" className="NavLink">Third</NavLink>&nbsp;|&nbsp;
            <NavLink to="/about" className="NavLink">About</NavLink>&nbsp;|&nbsp;
            <NavLink to="/users/0" className="NavLink">0</NavLink>&nbsp;|&nbsp;
            <NavLink to="/users/1" className="NavLink">1</NavLink>&nbsp;|&nbsp;
            <NavLink to="/users/2" className="NavLink">2</NavLink>&nbsp;|&nbsp;
        </nav>
    )
}

function Routing(){
    return(
        <Routes>
            <Route path='/first' element={ <First /> } />
            <Route path='/second' element={ <Second /> } />
            <Route path='/third' element={ <Third /> } />
            <Route path='/shalosh' element={ <Navigate to="/third" /> } />
            <Route path='/about' element={ <About /> } />
            <Route path="/users/:index" element={ <UserName />}/>
            <Route path='*' element={ <NotFound /> } />
        </Routes>
    )
}

function UserName(){
    const params = useParams();
    const index = (params as any).index;
    const names:string[] = ["David", "Moshe", "Tikva", "Shalva", "Ihezkel"];
    return(
        <div>
            {names[index] ? names[index] : <NotFound />}
        </div>
    )
}

export default App;