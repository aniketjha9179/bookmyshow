import "./App.css";

// Pages for app
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

// Routes
import {Routes, Route} from 'react-router-dom';

// React slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movie/:id" element={<MoviePage />} />
    <Route path="/plays" element={<PlayPage />} />
  </Routes>
}


export default App;
