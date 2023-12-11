import './App.css';
import MovieList from './MovieList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Description from './Description';

function App() {
  return (

    <Router>
    <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/Description/:IdMovie"  element={<Description />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
